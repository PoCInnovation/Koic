import os
import sys
from flask import Flask
from database import db, ma
from routes.stream import stream
from routes.animals import animals
from flasgger import Swagger
from dotenv import load_dotenv
load_dotenv()

RUN_IP = os.getenv('RUN_IP', '127.0.0.1')

def init_config(app):
    env_config = os.getenv("APP_SETTINGS", "config.DevelopmentConfig")
    app.config.from_object(env_config)

def create_app():
    app = Flask(__name__)

    init_config(app)
    app.register_blueprint(animals, url_prefix='/api/animals')
    app.register_blueprint(stream, url_prefix='/stream')

    swagger = Swagger(app)

    return app

app = create_app()
ma.init_app(app)
try:
    db.init_app(app)
except Exception as e:
    print("[-] Unable to connect to the database: Aborting...", file=sys.stderr)
    exit(1)

if __name__ == '__main__':
    from argparse import ArgumentParser

    parser = ArgumentParser()
    parser.add_argument('-p', '--port', default=5000, type=int, help='port to listen on')
    args = parser.parse_args()

    port = args.port
    app.run(host=RUN_IP, port=port)


# AUTHENTICATION: Bearer Token

# GET   /api/animals
# GET   /api/animals/:name?page=&limit
# POST  /api/animals

# GET   /api/docs
# GET   /stream


