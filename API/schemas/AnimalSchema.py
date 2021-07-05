from models import Animal
from flask_marshmallow import Schema
from marshmallow.fields import Str, UUID, DateTime
from marshmallow_sqlalchemy import ModelSchema

class AnimalSchema(ModelSchema):

    id = UUID(dump_only=True)
    name = Str(required=True)
    detected_at = DateTime(required=True)
    created_at = DateTime(dump_only=True)

    class Meta:
        model = Animal

# Animals:

# ID            uuid
# NAME          Enum (Raven, Boar)
# DETECTED_AT   DateTime
# CREATED_AT    DateTime    NOW()
