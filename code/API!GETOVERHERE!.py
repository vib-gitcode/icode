# API!GETOVERHERE!.py
FetchError = "Can\'t Fetch'"
import requests

response =   requests.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code&temperature_unit=fahrenheit"
)
print(response.json()
['current']
['temperature_2m'])
print(response.json()
['current']
['weather_code'])
code =   response.json() ['current'] ['weather_code']
if code == 0: print("Sunny")
elif code == 1: print("Mostly Clear")
elif code == 3: print("Cloudy")
elif code == 45: print("Foggy")
else: print(FetchError)