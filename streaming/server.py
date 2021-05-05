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
        "#rtp{{sdp=rtsp://:{}/out.h264}}".format(PORT),
        ":demux=h264"
    ]

    def __init__(self):
        self.vlc = None
        self.running = False
    
    def start(self):
        self.vlc = subprocess.Popen(StreamBroadcaster.VLC_ARGS, stdin=subprocess.PIPE)
        self.running = True
        print("[+] VLC Subprocess launched - streaming on rtsp://{}:{}/".format(
                socket.gethostbyname(socket.gethostname()),
                StreamBroadcaster.PORT
            )
        )
        print(self.vlc)

    def write(self, s):
        if self.running:
                self.vlc.stdin.write(s)

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
        camera.framerate = 5
        camera.resolution = (640, 480)        
        stream = StreamBroadcaster()
        camera.start_preview()
        camera.start_recording(stream, format="h264")
        stream.start()
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
            except BrokenPipeError:
                pass
            camera.stop_preview()
            stream.close()

# raspivid -o - -t 0 -hf -fps 5 | cvlc -vvv stream:///dev/stdin --sout '#rtp{sdp=rtsp://:9160/}' :demux=h264

if __name__ == "__main__":
    signal.signal(signal.SIGINT, safe_exit)
    run()
