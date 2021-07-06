import torch
import yaml
import requests

class Detector:
    def __init__(self, hub="ultralytics/yolov5", model_name="yolov5s", **kwargs):
        self.model = torch.hub.load(hub, model_name)
        self.labels = {}
        if "from_file" in kwargs:
            try:
                with open(kwargs["from_file"]) as f:
                    d = yaml.load(f, Loader=yaml.FullLoader)
                    for i, x in enumerate(d['names']):
                        self.labels[i] = x
            except:
                raise ValueError("Invalid format for file containing labels")
        # Load labels (from URL) TODO
        # elif "from_url" in kwargs:
        else:
            raise ValueError("No labels precised for this model")

    def detect(self, img_cv):
        result = self.model(img_cv)
        points_data = result.xyxy[0].numpy()

        for _, _, _, _, confidence, class_nb, in points_data:
            print(f"[+] New object found : {self.labels[class_nb]} - confidence: {confidence * 100:.2f}%")
        return []