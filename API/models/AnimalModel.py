from sqlalchemy.dialects.postgresql import UUID
from enum import Enum
from database import db
from datetime import datetime
import uuid

class Animals(Enum):
    raven = 0,
    boar = 1

class Animal(db.Model):
    __tablename__ = "Animal"

    id = db.Column('id', UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column('name', db.Enum(Animals))
    detected_at = db.Column('detected_at', db.DateTime())
    created_at = db.Column('created_at', db.DateTime(), default=datetime.now)

# Database Architecture

# Animals:

# ID            uuid
# NAME          Enum (Raven, Boar)
# DETECTED_AT   DateTime
# CREATED_AT    DateTime    NOW()
