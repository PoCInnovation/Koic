from sqlalchemy.dialects.postgresql import UUID
import sqlalchemy
from enum import Enum
from database import db
from datetime import datetime
import uuid

class Animals(Enum):
    raven = "raven",
    boar = "boar"

class Animal(db.Model):
    __tablename__ = "Animal"

    id = db.Column('id', UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column('name', db.Enum(*[e.name for e in Animals], name="animal_name"))
    detected_at = db.Column('detected_at', db.DateTime())
    created_at = db.Column('created_at', db.DateTime(timezone=True), default=datetime.now, server_default=sqlalchemy.sql.func.now())

# Database Architecture

# Animals:

# ID            uuid
# NAME          Enum (Raven, Boar)
# DETECTED_AT   DateTime
# CREATED_AT    DateTime    NOW()
