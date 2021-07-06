from database import db
from flasgger import swag_from
from flask import Blueprint, request
from markupsafe import escape
from http import HTTPStatus
from models import Animal, Animals
from marshmallow import ValidationError
from schemas import AnimalSchema, AnimalsSchema, ErrorSchema

animals = Blueprint('/api/animals', __name__)

def get_detection_info():
    animals_schema = AnimalsSchema()

    detections = Animal.query.all()
    return animals_schema.dump({ "detections": detections }), HTTPStatus.OK.value

@swag_from({
    'responses': {
        HTTPStatus.CREATED.value:  {
            'description' : 'All the animals sent have been registered',
            'schema': AnimalsSchema
        },
        HTTPStatus.BAD_REQUEST: {
            'description': 'Payload invalid format or invalid header',
            'schema': ErrorSchema
        }
    }
})
def register_new_detection():
    payload = request.get_json()
    error_schema = ErrorSchema()

    if payload is None:
        return error_schema.dump({ messages: ["Invalid format"] }), HTTPStatus.BAD_REQUEST.value

    animals_schema = AnimalsSchema(only=("detections.name", "detections.detected_at"))
    try:
        animals = animals_schema.load(payload)
        for animal in animals["detections"]:
            db.session.add(animal)
        db.session.commit()
    except ValidationError as e:
        db.session.rollback()
        return error_schema.dump({ "messages": ["Invalid data gave"] }), HTTPStatus.BAD_REQUEST.value

    return payload, HTTPStatus.CREATED.value

@animals.route('/', methods=['GET', 'POST'])
@animals.route('', methods=['GET', 'POST'])
@swag_from({
    'responses': {
        HTTPStatus.OK.value:  {
            'description' : 'Dump all the animals that have been detected',
            'schema': AnimalsSchema
        }
    }
})
@swag_from({
    'responses': {
        HTTPStatus.CREATED.value:  {
            'description' : 'All the animals sent have been registered',
            'schema': AnimalsSchema
        },
        HTTPStatus.BAD_REQUEST: {
            'description': 'Payload invalid format or invalid header',
            'schema': ErrorSchema
        }
    }
})
def handle_animals_requests():
    if request.method == 'POST':
        return register_new_detection()
    else:
        return get_detection_info()

@animals.route('/<name>', methods=['GET'])
@swag_from({
    'responses': {
        HTTPStatus.OK.value: {
            'description': 'Get detection data about a specific animal',
            'schema': AnimalsSchema
        },
        HTTPStatus.NOT_FOUND.value: {
            'description': 'Animal specified not found',
            'schema': ErrorSchema
        }
    }
})
def get_animal_data(name):
    animals_schema = AnimalsSchema()
    error_schema = ErrorSchema()

    if not name in set(item.value for item in Animals):
        return error_schema.dump({"messages": ["Animal not found"]}), HTTPStatus.NOT_FOUND.value

    animals = Animal.query.filter_by(name=escape(name)).all()
    return animals_schema.dump({ "detections": animals }), HTTPStatus.OK.value