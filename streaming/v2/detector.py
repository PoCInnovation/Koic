import torch

class Detector:

    def __init__(self, model_name):
        self.model = torch.hub.load('ultralytics/yolov5', model_name)

    def predict(self, frame):
        results = self.model(frame, size=640)
        results.print()
        return results