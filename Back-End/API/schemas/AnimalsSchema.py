from flask_marshmallow import Schema
from marshmallow.fields import Nested
from schemas import AnimalSchema

class AnimalsSchema(Schema):
    class Meta:
        fields = ["detections"]

    detections = Nested(AnimalSchema, many=True)