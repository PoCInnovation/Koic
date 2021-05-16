import torch

class Detector:

    def __init__(self, model_name):
        self.result = None
        self.model = torch.hub.load('ultralytics/yolov5', model_name)

    def predict(self, frame):
        self.result = self.model(frame)
        frame = []
        self.result.print()
        return frame