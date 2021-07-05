#!/usr/bin/env python3

import sys
import json
import asyncio
import aiohttp
import requests
from datetime import datetime
from kafka import KafkaConsumer

class Worker:
    def __init__(self, topic, endpoint):
        self.endpoint = endpoint
        self.consumer = KafkaConsumer(
            topic, bootstrap_servers="kafka:9092", group_id="workers"
        )

    async def register_detected_animals(self, detections):
        payload = { "detections" : detections }

        async with aiohttp.ClientSession() as session:
            async with session.post(f"{self.endpoint}/api/animals", json.dumps(payload).encode()) as res:
                print(res.status)
                print(await res.text())

    async def process_ai(self, msg):
        results = []

        # AI Processing TODO

        if len(results) != 0:
            await register_detected_animals(results)

    async def run(self):
        for msg in self.consumer:
            print("[+] Got a new message to read")
            await process_ai(msg)

if __name__ == "__main__":
    try:
        worker = Worker("CAMERA_1", "http://localhost:5000/api")
        asyncio.run(worker.run())
    except KeyboardInterrupt:
        sys.exit(0)