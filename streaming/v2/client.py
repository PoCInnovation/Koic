# import socket
# import subprocess

# # Start a socket listening for connections on 0.0.0.0:8000 (0.0.0.0 means
# # all interfaces)
# client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# client_socket.connect( ('192.168.1.5', 1245) )

# # Accept a single connection and make a file-like object out of it
# connection = client_socket.makefile('rb')
# try:
#     # Run a viewer with an appropriate command line. Uncomment the mplayer
#     # version if you would prefer to use mplayer instead of VLC
#     cmdline = ['vlc', '--demux', 'h264', '-']
#     #cmdline = ['mplayer', '-fps', '25', '-cache', '1024', '-']
#     player = subprocess.Popen(cmdline, stdin=subprocess.PIPE)
#     while True:
#         # Repeatedly read 1k of data from the connection and write it to
#         # the media player's stdin
#         data = connection.read(1024)
#         if not data:
#             break
#         player.stdin.write(data)
# finally:
#     connection.close()
#     client_socket.close()
#     player.terminate()

import socket
import h264decoder
import numpy as np
import cv2
import matplotlib.pyplot as pyplot
from detector import Detector

# class VideoReceiver:

#     def __init__(self, host, port):
#         self.host = (host, port)
#         self.client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#         self.co = None
#         self.running = False

#     def start(self):
#         self.client.connect(self.host)
#         self.co = self.client.makefile('wb')

#         self.running = True
#         while self.running:
#             data = self.co.read(VideoReiceiverBUFFER)

WIDTH = 640
HEIGHT = 480

detector = Detector("yolov5s")

client = socket.socket()
# At home
# client.connect(('192.168.1.5', 2555))
# At school
client.connect(('10.224.33.237', 2555))

co = client.makefile('rb')
decoder = h264decoder.H264Decoder()
running = True

try:
    while running:
        # Continously capture all H.264 video packets
        in_data = co.read(1024)
        if not in_data:
            break

        frame_datas = decoder.decode(in_data)
        for frame_data in frame_datas:
            (frame, w, h, ls) = frame_data
            if frame is not None:
                # Transform packets into numpy array (RGB frames)
                frame = np.frombuffer(frame, dtype=np.ubyte, count=len(frame))
                frame = frame.reshape((h, ls//3, 3))
                frame = frame[:,:w,:]
                # RGB TO BGR conversion
                frame = frame[...,::-1]
                # Predict bounded boxes on frame
                frame = detector.get_predicted_boxes(frame)
                # Show window
                cv2.imshow('Stream', frame)
                if cv2.waitKey(1) & 0xFF == ord('q'):
                    running = False
except KeyboardInterrupt:
    pass
finally:
    co.close()
    client.close()
