# Back End Documentation

## API

When the api turns go into  http://localhost:5000/apidocs/

### Many stream

Name topics of your kafka like this:  
- CAMERA_{nb}

With `nb` is the "id" of your stream.

To get the video stream http://localhost:5000/stream/{nb}

For example:  
http://localhost:5000/stream/1  

### Add new animal

Change the ***class Animals*** in **API/migrations/setup.py** and **API/models/AnimalModel.py**
```py
# API/migrations/setup.py and API/models/AnimalModel.py

class Animals(enum.Enum):
    raven = "raven"
    boar = "boar"
    person = "person"
    # Here add new object détection with her name
```

## IA 

In **IA/coco128.yaml** you will have all the parameters of what your model detects.  
With `Yolov5s`:  
```yml
# YOLOv5 🚀 by Ultralytics, GPL-3.0 license
# COCO128 dataset https://www.kaggle.com/ultralytics/coco128 (first 128 images from COCO train2017)
# Example usage: python train.py --data coco128.yaml
# parent
# ├── yolov5
# └── datasets
#     └── coco128  ← downloads here


# Train/val/test sets as 1) dir: path/to/imgs, 2) file: path/to/imgs.txt, or 3) list: [path/to/imgs1, path/to/imgs2, ..]
path: ../datasets/coco128  # dataset root dir
train: images/train2017  # train images (relative to 'path') 128 images
val: images/train2017  # val images (relative to 'path') 128 images
test:  # test images (optional)

# Classes
nc: 80  # number of classes
names: ['person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat', 'traffic light',
        'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow',
        'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee',
        'skis', 'snowboard', 'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard',
        'tennis racket', 'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple',
        'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake', 'chair', 'couch',
        'potted plant', 'bed', 'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote', 'keyboard', 'cell phone',
        'microwave', 'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear',
        'hair drier', 'toothbrush']  # class names
``` 

For train custom data with yolov5, please refer to this documentation https://github.com/ultralytics/yolov5/wiki/Train-Custom-Data