import io
import time
from picamera import PiCamera
from kafka import KafkaProducer

class Manager:

    def __init__(self):
        self.producer = KafkaProducer(
            bootstrap_servers=["192.168.1.45:9092"]
        )
        self.camera = PiCamera()

    def configure_camera(self):
        print("[+] Configurating camera...")
        self.camera.resolution = (640, 480)
        self.camera.start_preview()
        time.sleep(2)

    async def start_capture(self):
        self.configure_camera()
        stream = io.BytesIO()
        start = time.time()

        print("[+] RPI is starting capturing its environment...")
        for foo in self.camera.capture_continuous(stream, 'jpeg'):
            try:
                stream.seek(0)
                # print(stream.read())
                self.producer.send("CAMERA_1", stream.read())
                dt = time.time() - start
                print(f"[+] Stream capturing since {dt:.2f}s\r", end="")
                stream.seek(0)
                stream.truncate()
                time.sleep(0.2)
            except KeyboardInterrupt:
                await self.stop_capture()
                break

    async def stop_capture(self):
        self.camera.stop_capturing()
        self.camera.stop_preview()

    async def close(self):
        await self.stop_capture()
