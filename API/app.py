from flask import Flask
from routes.stream import stream
from routes.animals import animals

def init_config(app):
    pass

def create_app():
    app = Flask(__name__)

    init_config(app)
    app.register_blueprint(animals, url_prefix='/api/animals')
    app.register_blueprint(stream, url_prefix='/stream')

    return app

if __name__ == '__main__':
    from argparse import ArgumentParser

    parser = ArgumentParser()
    parser.add_argument('-p', '--port', default=5000, type=int, help='port to listen on')
    args = parser.parse_args()

    app = create_app()
    port = args.port

    app.run(host='0.0.0.0', port=port)


# AUTHENTICATION: Bearer Token

# GET   /api/animals
# GET   /api/animals/:name?page=&limit
# POST  /api/animals

# GET   /api/docs
# GET   /stream



