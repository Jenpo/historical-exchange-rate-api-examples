import csv
import requests

url = "https://fxpeek.com/api/history"
params = {"from": "CNY", "to": "TRY", "days": 365}

response = requests.get(url, params=params, timeout=20)
response.raise_for_status()

data = response.json()
rows = data["rates"]

with open("cny-try-history.csv", "w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=["date", "base", "target", "rate"])
    writer.writeheader()
    writer.writerows(rows)

print(f"Wrote {len(rows)} rows to cny-try-history.csv")

