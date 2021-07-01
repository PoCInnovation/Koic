from flask import Blueprint, request
from markupsafe import escape

animals = Blueprint('/api/animals', __name__)

def get_detection_info():
    return "GET /animals"

def register_new_detection():
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