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
        self.buffer = b""
    
    def start(self):
        self.running = True
        self.vlc = subprocess.Popen(StreamBroadcaster.VLC_ARGS, stdin=subprocess.PIPE)
        print("[+] VLC Subprocess launched - streaming on rtsp://{}:{}/".format(
                socket.gethostbyname(socket.gethostname()),
                StreamBroadcaster.PORT
            )
        )

    def write(self, s):
        if self.running:
            self.buffer += s

    def flush(self):
        if self.running:
            self.vlc.stdin.write(self.buffer)
            self.buffer = b""

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
        stream = StreamBroadcaster()
        camera.start_recording(stream, format="h264")
        stream.start()
        print("[+] Start recording")
        try:
            while RUNNING:
                camera.wait_recording()
                stream.flush()
                dt += 1
                print("Streaming running for {} seconds\r".format(dt), end="")
        except:
            print("\n[-] Error occured")
        finally:
            print("\n")
            try:
                camera.stop_recording()
            except BrokenPipeError:
                pass
            stream.close()

if __name__ == "__main__":
    signal.signal(signal.SIGINT, safe_exit)
    run()