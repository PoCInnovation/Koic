import requests
import json
from datetime import datetime

# res_raven = requests.get("http://127.0.0.1:5000/api/animals/raven")

# file = open ("raven.json", "w")
# file.write(str(res_raven.json()))
f = open('raven.json', "r")
data = json.loads(f.read())
day = datetime.today().strftime('%Y-%m-%d')
print(day)

for elem in data['detections']:
    if 'detected_at' in elem:
            if day in elem['detected_at']:
                print('ici')


