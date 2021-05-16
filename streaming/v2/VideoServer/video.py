from server import Server
from threading import Thread, Lock
from picamera import PiCamera
import time
import sys

class VideoServer:

    def __init__(self, host, port):
        self.server = Server(host, port)
        self.camera = PiCamera()
        self.running_capture = False
        self.start_thd: Thread = None

        camera.resolution = (640, 480)
        camera.framerate = 24

    def start_broadcast(self):
        print("[+] Starting server in background")
        self.start_thd = Thread(target=self.server.start, args=())
        self.start_thd.start()

    def start_capture(self):
        print("[+] Start video capture to stream")
        if not self.server.isRunning():
            print("[-] Server not running: start it before capturing")
            return
        self.running_capture = True
        self.camera.start_preview()
        time.sleep(2)
        start = time.time()
        self.camera.start_recording(self.server, format="h264")
        while self.running_capture:
            try:
                self.camera.wait_recording()
                dt = time.time()
                print("Streaming running for {:.2f}s\r".format(dt - start), end="")
            except KeyboardInterrupt:
                self.stop_capture()

    def stop_capture(self):
        print("[+] Stopping video capture")
        self.running_capture = False
        self.camera.stop_recording()
        self.camera.stop_preview()

    def __del__(self):
        self.stop_capture()
        self.server.stop()
        if not self.start_thd is None and self.start_thd.isAlive():
            self.start_thd.join()


if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("USAGE:\t{} host port".format(sys.argv[0]))
        sys.exit(1)
    print(  "KoiC Stream Server v2\n"
            "---------------------\n")
    vidServer = VideoServer(sys.argv[1], int(sys.argv[2]))
    vidServer.start_broadcast()
    vidServer.start_capture()