from flask import Blueprint

stream = Blueprint('/stream', __name__)

@stream.route('/:id', methods=['GET'])
def stream_cam():
    return "Stream available soon"