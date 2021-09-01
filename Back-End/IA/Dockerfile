FROM python:3.8

WORKDIR /ia


RUN apt update && apt install build-essential
RUN apt -y install libgl1-mesa-glx

COPY ./requirements.txt .

RUN  python3 -m pip install -r requirements.txt

COPY . .

CMD ["python3", "worker.py"]