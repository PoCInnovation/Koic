import sys
import subprocess
from io import BytesIO
from picamera import PiCamera

PORT = 1425

# raspivid -o - -t 0 -n => Opening camera and starting recoding information
VLC_ARGS = [
    "cvlc",
    "-vvv",
    "stream:///dev/stdin",
    "--sout",
    "'#rtp{{sdp=rtsp://:{}/}}'".format(PORT),
    ":demux=h264"
]

print("------------------------------------")
print("  KoiC - Pi Camera Streaming v0.1   ")
print("---------- PoC Innovation ----------\n")

with PiCamera() as camera:
    print("[+] Opening Camera")
    # vlcBroadcaster = subprocess.Popen(VLC_ARGS, stdin=subprocess.PIPE)
    # print("[+] Open subprocess to broadcast video")
    
    # print("[+] VLC broadcasting video on port {}".format(PORT))
    # camera.start_recording(vlcBroadcaster.stdin)
    camera.start_recording(sys.stdout)

