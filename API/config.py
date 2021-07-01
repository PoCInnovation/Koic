import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    DEBUG = False
    DEVELOPMENT = False
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "postgresql://root:password@localhost:5432/koic_detections")

class ProductionConfig(Config):
    pass

class StagingConfig(Config):
    DEBUG = True

class DevelopmentConfig(Config):
    DEBUG = True
    DEVELOPMENT = True