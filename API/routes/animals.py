from database import db
from flask import Blueprint, request
from markupsafe import escape
from models import Animal, Animals
from marshmallow import ValidationError
from schemas import AnimalSchema, AnimalsSchema, ErrorSchema

animals = Blueprint('/api/animals', __name__)

def get_detection_info():
    animals_schema = AnimalsSchema()

    detections = Animal.query.all()
    return animals_schema.dump({ "detections": detections }), 200

def register_new_detection():
    payload = request.get_json()
    error_schema = ErrorSchema()

    if payload is None:
        return error_schema.dump({ messages: ["Invalid format"] }), 400

    animals_schema = AnimalsSchema(only=("detections.name", "detections.detected_at"))
    try:
        animals = animals_schema.load(payload)
        for animal in animals["detections"]:
            db.session.add(animal)
        db.session.commit()
    except ValidationError as e:
        db.session.rollback()
        return error_schema.dump({ "messages": ["Invalid data gave"] }), 400

    return payload, 203

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
    error_schema = ErrorSchema()

    if not name in set(item.value for item in Animals):
        return error_schema.dump({"messages": ["Animal not found"]}), 404

    animals = Animal.query.filter_by(name=escape(name)).all()
    return animals_schema.dump({ "detections": animals }), 200