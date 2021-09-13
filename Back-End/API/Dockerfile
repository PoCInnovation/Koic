FROM python:3.8-alpine

WORKDIR /api

ARG PORT

RUN     apk add build-base postgresql-dev
RUN     apk upgrade

COPY    ./requirements.txt /

RUN     python3 -m pip install -r /requirements.txt

COPY    . .

EXPOSE ${PORT}

CMD     ["sh", "-c", "python3 app.py -p $PORT"]

