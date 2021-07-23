#!/usr/bin/env python3

import io
import sys
import cv2
import json
import asyncio
import aiohttp
import numpy as np
from PIL import Image
from ai import Detector
from json import JSONEncoder
from datetime import datetime, date
from kafka import KafkaConsumer

class DateTimeEncoder(JSONEncoder):
    #Override the default method
    def default(self, obj):
        if isinstance(obj, (date, datetime)):
            return obj.isoformat()

class Worker:
    def __init__(self, topic, endpoint):
        self.ai = Detector(from_file="coco128.yaml", model_name='last.pt')
        self.endpoint = endpoint
        self.consumer = KafkaConsumer(
            topic,
            bootstrap_servers="localhost:9092",
            group_id="workers",
            auto_offset_reset="latest"
        )

    async def register_detected_animals(self, detections):
        payload = { "detections" : detections }
        print(json.dumps(payload, cls=DateTimeEncoder))

        async with aiohttp.ClientSession() as session:
            try:
                async with session.post(f"{self.endpoint}/api/animals", data=json.dumps(payload, cls=DateTimeEncoder).encode()) as res:
                    print(res.status)
                    print(await res.text())
                    ## Log information for success or error
            except:
                print("Couldn't post data to the remote server")
    async def process_ai(self, img_bytes):
        img = Image.open(io.BytesIO(img_bytes))
        img_cv = np.array(img)
        img_cv = img_cv[:, :, ::-1]

        # AI Processing TODO
        results = self.ai.detect(img_cv)
        print(results)
        if len(results) != 0:
            print("Image processed")
            await self.register_detected_animals(results)

    async def run(self):
        # 'msg' contains the buffer of the image sent by the RPI
        for msg in self.consumer:
            await self.process_ai(msg.value)

if __name__ == "__main__":
        # Put configuration into the environment TODO
        worker = Worker("CAMERA_1", "http://localhost:5000/api")
        asyncio.run(worker.run())