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

class CustomOutput:
    def __init__(self):
        self.content = b""

    def write(self, s):
        self.content += s
    
    def flush(self):
        print(self.content)

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
        self.vlc = subprocess.Popen(StreamBroadcaster.VLC_ARGS, stdin=subprocess.PIPE)
        self.buffer = b""
        print("[+] VLC Subprocess launched - streaming on rtsp://{}:{}/".format(
                socket.gethostbyname(socket.gethostname()),
                StreamBroadcaster.PORT
            )
        )

    def write(self, s):
        self.buffer += s

    def flush(self):
        self.vlc.stdin.write(self.buffer)
        self.buffer = b""

    def close(self):
        self.vlc.terminate()

def run():
    print("------------------------------------")
    print("  KoiC - Pi Camera Streaming v0.1   ")
    print("---------- PoC Innovation ----------\n")
    dt = 0

    with PiCamera() as camera:
        print("[+] Opening Camera")
        stream = StreamBroadcaster()
        camera.start_recording(stream, format="h264")
        time.sleep(2)
        print("[+] Start recording")
        try:
            while RUNNING:
                camera.wait_recording(1)
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