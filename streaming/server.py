import sys
import time
import socket
import subprocess
from io import BytesIO
from picamera import PiCamera


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
        self.vlc = subprocess.Popen(StreamBoardcaster.VLC_ARGS, stdin=subprocess.PIPE)
        self.buffer = b""
        print("[+] VLC Subprocess launched - streaming on rtsp://{}:{}/".format(
                socket.gethostbyname(socket.gethostname()),
                StreamBoardcaster.PORT
            )
        )

    def write(self, s):
        self.buffer += s

    def flush(self):
        self.vlc.stdin += self.buffer
        self.buffer = b""

    def close(self):
        self.vlc.terminate()



# raspivid -o - -t 0 -n => Opening camera and starting recoding information



print("------------------------------------")
print("  KoiC - Pi Camera Streaming v0.1   ")
print("---------- PoC Innovation ----------\n")

with PiCamera() as camera:
    print("[+] Opening Camera")
    # vlcBroadcaster = subprocess.Popen(VLC_ARGS, stdin=subprocess.PIPE)
    # print("[+] Open subprocess to broadcast video")
    
    # print("[+] VLC broadcasting video on port {}".format(PORT))
    # camera.start_recording(vlcBroadcaster.stdin)
    stream = StreamBroadcaster()
    camera.start_recording(stream, format="h264")
    time.sleep(2)
    print("[+] Start recording")
    try:
        while True:
            camera.wait_recording(1)
            stream.flush()
    finally:
        camera.stop_recording()
        stream.close()
