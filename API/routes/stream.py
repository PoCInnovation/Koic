from flask import Blueprint

stream = Blueprint('/stream', __name__)

@stream.route('/', methods=['GET'])
def stream():
    return "Stream available soon"