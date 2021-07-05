from flask import Blueprint, request
from markupsafe import escape
from models import Animal
from schemas import AnimalSchema, AnimalsSchema

animals = Blueprint('/api/animals', __name__)

def get_detection_info():
    animals_schema = AnimalsSchema()

    detections = Animal.query.all()
    return animals_schema.dump({ "detections": detections })

def register_new_detection():
    print(request.data)


    return "POST /api/animals"

@animals.route('/', methods=['GET', 'POST'])
def handle_animals_requests():
    if request.method == 'POST':
        return register_new_detection()
    else:
        return get_detection_info()

@animals.route('/<name>', methods=['GET'])
def get_animal_data(name):
    return escape(name)