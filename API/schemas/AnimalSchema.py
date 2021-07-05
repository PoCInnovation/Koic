from database import ma
from models import Animal
from flask_marshmallow import Schema
from marshmallow import post_load, post_dump
from marshmallow.fields import Str, UUID, DateTime

class AnimalSchema(ma.SQLAlchemySchema):

    id = UUID(dump_only=True)
    name = Str(required=True)
    detected_at = DateTime(required=True)
    created_at = DateTime(dump_only=True)

    class Meta:
        model = Animal

    @post_load
    def make_animal(self, data, **kwargs):
        return Animal(**data)

# Animals:

# ID            uuid
# NAME          Enum (Raven, Boar)
# DETECTED_AT   DateTime
# CREATED_AT    DateTime    NOW()
