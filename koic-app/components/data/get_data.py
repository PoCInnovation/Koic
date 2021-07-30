import requests
import json

res_raven = requests.get("http://127.0.0.1:5000/api/animals/raven")

file = open ("raven.json", "w")
file.write(str(res_raven.json()))


