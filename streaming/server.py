import sys
import time
import socket
import signal
import subprocess
from io import BytesIO
from picamera import PiCamera

RUNNING = True

def safe_exit(signum, frame):
    sys.exit(0)

class StreamBroadcaster:
    PORT = 1425
    VLC_ARGS = [
        "cvlc",
        "-vvv",
        "stream:///dev/stdin",
        "--sout",
        "'#rtp{{sdp=rtsp://:{}/}}'".format(PORT),
        ":demux=h264"
    ]

    def __init__(self):
        self.vlc = None
        self.running = False
    
    def start(self):
        self.running = True
        self.vlc = subprocess.Popen(StreamBroadcaster.VLC_ARGS, stdin=subprocess.PIPE)
        print("[+] VLC Subprocess launched - streaming on rtsp://{}:{}/".format(
                socket.gethostbyname(socket.gethostname()),
                StreamBroadcaster.PORT
            )
        )
        print(self.vlc)

    def write(self, s):
        if self.running:
            if not s is None:
                self.vlc.stdin.write(s)
                self.vlc.communicate()

    def close(self):
        if self.running:
            self.vlc.terminate()
            self.running = False

def run():
    print("------------------------------------")
    print("  KoiC - Pi Camera Streaming v0.1   ")
    print("---------- PoC Innovation ----------\n")
    dt = 0

    with PiCamera() as camera:
        print("[+] Opening Camera")
        # stream = StreamBroadcaster()
        # stream.start()
        camera.start_preview()
        camera.start_recording("media.h264", format="h264")
        print("[+] Start recording")
        try:
            start = time.time()
            while RUNNING:
                camera.wait_recording()
                dt = time.time()
                print("Streaming running for {:.2f}s\r".format(dt - start), end="")
        except:
            print("\n[-] Error occured")
        finally:
            print("\n")
            try:
                camera.stop_recording()
                camera.stop_preview()
            except BrokenPipeError:
                pass
            # stream.close()


if __name__ == "__main__":
    signal.signal(signal.SIGINT, safe_exit)
    run()
