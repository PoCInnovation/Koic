from kafka import KafkaConsumer
from flask import Blueprint, Response
import os

stream = Blueprint('/stream', __name__)

def get_video_stream(id):
    ip = os.getenv('IP', 'localhost') + ":9092"
    consumer = KafkaConsumer(f"CAMERA_{int(id)}", bootstrap_servers=[ip])

    for msg in consumer:
        yield(
            b'--frame\r\n'
            b'Content-Type: image/jpg\r\n\r\n' + msg.value + b'\r\n\r\n'
        )


@stream.route('/<id>', methods=['GET'])
def stream_cam(id):
    try:
        return Response(
            get_video_stream(int(id)),
            mimetype='multipart/x-mixed-replace; boundary=frame'
        )
    except Exception as e:
        return "No stream available", 404