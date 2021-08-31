from database import ma
from models import Animal, Animals
from flask_marshmallow import Schema
from marshmallow import post_load, post_dump, validate
from marshmallow.fields import Str, UUID, DateTime

class AnimalSchema(ma.SQLAlchemySchema):

    id = UUID(dump_only=True)
    name = Str(required=True, validate=validate.OneOf([e.name for e in Animals]))
    detected_at = DateTime(required=True)
    created_at = DateTime(dump_only=True)

    class Meta:
        model = Animal

    @post_dump(pass_many=False)
    def dump_animal(self, data, many, **kwargs):
        return {"id": data["id"], "name": data["name"], "detected_at": data["detected_at"], "created_at": data["created_at"]}

    @post_load
    def make_animal(self, data, **kwargs):
        return Animal(**data)
