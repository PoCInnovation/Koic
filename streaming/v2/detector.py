import torch
import cv2

class Detector:

    def __init__(self, model_name):
        self.model = torch.hub.load('ultralytics/yolov5', model_name)

    def get_predicted_boxes(self, frame):
        result = self.model(frame)
        result.print()
        points_data = result.xyxy[0].numpy()
        for xmin, ymin, xmax, ymax, confidence, class_nb in points_data:
            frame = cv2.rectangle(
                frame.copy(),
                (int(xmin), int(ymin)),
                (int(xmax), int(ymax)),
                (255, 0, 0),
                2
            )
        return frame
