from marshmallow.fields import List, Str, Nested
from flask_marshmallow import Schema
from marshmallow import pre_dump, post_dump

class ErrorSchema(Schema):
    messages = List(Str())