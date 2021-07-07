FROM python:3.8.10-alpine

WORKDIR /api

ENV     APP_SETTINGS    "config.ProductionConfig"
ENV     FLASK_ENV       "development"
ENV     DATABASE_URI    "postgresql://root:password@localhost:5432/koic_detections"
ENV     PORT            5000

COPY    ./requirements.txt /

RUN     apk add build-base
RUN     apk upgrade
RUN     python3 -m pip install -r /requirements.txt

COPY    .       .

CMD     ["sh", "-c", "python3 app.py -p $PORT"]

