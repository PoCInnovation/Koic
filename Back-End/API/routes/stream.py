from kafka import KafkaConsumer
from flask import Blueprint, Response

stream = Blueprint('/stream', __name__)

def get_video_stream(id):
    consumer = KafkaConsumer(f"CAMERA_{int(id)}", bootstrap_servers=["192.168.0.17:9092"])

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