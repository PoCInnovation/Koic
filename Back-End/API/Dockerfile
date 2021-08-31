FROM python:3.8.10-alpine

WORKDIR /api

ENV     APP_SETTINGS    "config.ProductionConfig"
ENV     FLASK_ENV       "development"
ENV     DATABASE_URI    "postgresql://root:password@localhost:5432/koic_detections"
ENV     PORT            5000
ENV			IP							"127.0.0.1"

COPY    ./requirements.txt /

RUN     apk add build-base postgresql-dev
RUN     apk upgrade
RUN     python3 -m pip install -r /requirements.txt

COPY    .       .

CMD     ["sh", "-c", "python3 app.py -p $PORT"]

