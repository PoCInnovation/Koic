#!/usr/bin/env python3

import cv2
import sys
import os

IP = "192.168.1.26"
PORT = 9160

os.environ["OPENCV_FFMPEG_CAPTURE_OPTIONS"] = "rtsp_transport;udp"

client = cv2.VideoCapture("rtsp://{}:{}/out.h264".format(IP, PORT))

if not client.isOpened():
    sys.exit(1)

while True:
    try:
        ret, frame = client.read()
        if ret:

            cv2.imshow('FRAME', frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
    except KeyboardInterrupt:
        break

client.release()
cv2.destroyAllWindows()