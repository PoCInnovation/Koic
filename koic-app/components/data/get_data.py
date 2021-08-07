import requests
import json

res_raven = requests.get("http://127.0.0.1:5000/api/animals/raven")
res_boar = requests.get("http://127.0.0.1:5000/api/animals/boar")

file = open ("raven.json", "w")
file = open ("boar.json", "w")
file.write(str(res_raven.json()))
file.write(str(res_boar.json()))


