import enum
import uuid
import sqlalchemy
from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy import Column, DateTime, Enum
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import UUID

engine = create_engine('postgresql://root:password@localhost:5432/koic_detections', echo = True)
Base = declarative_base()

class Animals(enum.Enum):
    raven = "raven"
    boar = "boar"
    person = "person"
    chair = "chair"

class AnimalSeed(Base):
    __tablename__ = "Animal"

    id = Column('id', UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column('name', Enum(*[e.name for e in Animals], name="animal_name"))
    detected_at = Column('detected_at', DateTime())
    created_at = Column('created_at', DateTime(timezone=True), default=datetime.now, server_default=sqlalchemy.sql.func.now())

if __name__ == "__main__":
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)

    from sqlalchemy.orm import sessionmaker
    Session = sessionmaker(bind = engine)
    session = Session()
    session.commit()
    session.close()
