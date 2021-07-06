#!/usr/bin/env python3

import io
import sys
import cv2
import json
import asyncio
import aiohttp
import requests
import numpy as np
from PIL import Image
from ai import Detector
from datetime import datetime
from kafka import KafkaConsumer

class Worker:
    def __init__(self, topic, endpoint):
        self.ai = Detector(from_file="coco.yaml")
        self.endpoint = endpoint
        self.consumer = KafkaConsumer(
            topic,
            bootstrap_servers="localhost:9092",
            group_id="workers",
            auto_offset_reset="latest"
        )

    async def register_detected_animals(self, detections):
        payload = { "detections" : detections }

        async with aiohttp.ClientSession() as session:
            async with session.post(f"{self.endpoint}/api/animals", json.dumps(payload).encode()) as res:
                print(res.status)
                print(await res.text())

    async def process_ai(self, img_bytes):
        img = Image.open(io.BytesIO(img_bytes))
        img_cv = np.array(img)
        img_cv = img_cv[:, :, ::-1]

        # AI Processing TODO
        results = self.ai.detect(img_cv)

        if len(results) != 0:
            await register_detected_animals(results)

    async def run(self):
        # 'msg' contains the buffer of the image sent by the RPI
        for msg in self.consumer:
            print("[+] Got a new message to read:")
            # print(msg.value)
            await self.process_ai(msg.value)

if __name__ == "__main__":
        worker = Worker("CAMERA_1", "http://localhost:5000/api")
        asyncio.run(worker.run())