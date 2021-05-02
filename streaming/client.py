#!/usr/bin/env python3

import cv2


IP = "192.168.1.5"
PORT = 1425

client = cv2.VideoCapture("rtsp://{}:{}/out.h264".format(IP, PORT))

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