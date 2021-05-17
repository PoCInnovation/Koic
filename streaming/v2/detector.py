import torch
import cv2

class Detector:
    FONT = cv2.FONT_HERSHEY_SIMPLEX
    SCALE = 1
    COLOR = (255, 255, 255)
    THICKNESS = 4

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
                Detector.COLOR,
                Detector.THICKNESS,
                cv2.LINE_4
            )
            cv2.putText(
                frame,
                'Label: {:.2f}%'.format(confidence * 100),
                (int(xmin), int(ymin) - 14),
                Detector.FONT,
                Detector.SCALE,
                Detector.THICKNESS
            )

        return frame
