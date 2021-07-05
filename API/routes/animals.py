from database import db
from flask import Blueprint, request
from markupsafe import escape
from models import Animal
from marshmallow import ValidationError
from schemas import AnimalSchema, AnimalsSchema

animals = Blueprint('/api/animals', __name__)

def get_detection_info():
    animals_schema = AnimalsSchema()

    detections = Animal.query.all()
    return animals_schema.dump({ "detections": detections })

def register_new_detection():
    payload = request.get_json()

    if payload is None:
        # Error handling TODO
        return "Not json"
    animals_schema = AnimalsSchema(only=("detections.name", "detections.detected_at"))
    try:
        animals = animals_schema.load(payload)
        for animal in animals["detections"]:
            db.session.add(animal)
        db.session.commit()
    except ValidationError as e:
        print(e.messages)
        return "Invalid data gave"
    return payload

@animals.route('/', methods=['GET', 'POST'])
@animals.route('', methods=['GET', 'POST'])
def handle_animals_requests():
    if request.method == 'POST':
        return register_new_detection()
    else:
        return get_detection_info()

@animals.route('/<name>', methods=['GET'])
def get_animal_data(name):
    animals_schema = AnimalsSchema()

    animals = Animal.query.filter_by(name=escape(name)).all()
    return animals_schema.dump({ "detections": animals })