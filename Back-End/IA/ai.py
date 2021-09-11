import torch
import yaml
import os
import requests
from datetime import datetime

class Detector:
    def __init__(self, hub="ultralytics/yolov5", model_name=None, threshold=0.5, **kwargs):
        self.model = torch.hub.load(hub, "yolov5s")
        if model_name is None:
            self.model.load_state_dict(torch.load(f"{os.path.dirname(os.path.realpath(__file__))}/{model_name}")['model'].state_dict())
        self.labels = {}
        self.threshold = threshold
        if "from_file" in kwargs:
            try:
                with open(kwargs["from_file"]) as f:
                    d = yaml.load(f, Loader=yaml.FullLoader)
                    for i, x in enumerate(d['names']):
                        self.labels[i] = x
            except:
                raise ValueError("Invalid format for file containing labels")
        # Load labels (from URL) TODO
        else:
            raise ValueError("No labels precised for this model")

    def detect(self, img_cv):
        objects_detected = []
        result = self.model(img_cv)
        points_data = result.xyxy[0].numpy()

        for _, _, _, _, confidence, class_nb, in points_data:
            print(confidence, class_nb)
            objects_detected.append({"name": self.labels[int(class_nb)], "confidence": confidence })

        return list(map(
            lambda e: { "name": e["name"], "detected_at": datetime.utcnow() },
            filter(lambda x: x["confidence"] > self.threshold, objects_detected)
        ))