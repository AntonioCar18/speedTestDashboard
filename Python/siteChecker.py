import requests
import time
from datetime import datetime
import json
import os

def checkSite(url):
    results = {
        "website": url,
        "status": "DOWN",
        "latency": 0,
        "timestamp": datetime.now().strftime("%H:%M:%S"), # Skratio sam na sate:min:sec za graf
        "ssl_cert": "N/A",
        "domain_expiry": "N/A"
    }

    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }

    try:
        start_time = time.time()
        response = requests.get(url, timeout=5, verify=True, headers=headers)
        end_time = time.time()
        results["latency"] = round((end_time - start_time) * 1000)
        results["status"] = "UP" if response.status_code == 200 else "DOWN"
    except requests.exceptions.RequestException as e:
        print(f"Error checking {url}: {e}")
    return results

# --- KONFIGURACIJA ---
sites = [
    "https://4solutions.hr", 
    "https://vel-tours.hr", 
    "https://safranko-tech.hr",
    "https://profizio-butala.hr",
    "https://zabavni-centar-hiphop.hr",
    "https://restaurant-capoteyole.hr",
    "https://bod-ugostiteljstvo.hr",
    "https://dobra-prijevoz.hr",
    "https://sirana-milka.hr",
    "https://alba.hr",
    "https://dv-zvoncic-ozalj.hr",
    "https://gkicdr.hr"
]
path_json = "/Users/antoniocar/Desktop/4Solutions/siteChecker/public/ping_results.json"
MAX_HISTORY = 20 # Koliko točaka želimo čuvati za grafikon

# 1. Učitaj postojeću povijest iz JSON-a
if os.path.exists(path_json):
    try:
        with open(path_json, 'r') as f:
            database = json.load(f)
            # Ako je stari format bio lista [], pretvori ga u rječnik {}
            if isinstance(database, list):
                database = {}
    except:
        database = {}
else:
    database = {}

# 2. Provjeri stranice i nadopiši podatke u rječnik
print(f"Započinjem provjeru...")

for site in sites:
    result = checkSite(site)
    
    # Ako stranica ne postoji u bazi, napravi praznu listu
    if site not in database:
        database[site] = []
    
    # Dodaj novi rezultat u listu povijesti za tu stranicu
    database[site].append(result)
    
    # Zadrži samo zadnjih 20 rezultata (za grafikon)
    database[site] = database[site][-MAX_HISTORY:]
    
    print(f"Status za {site}: {result['status']} ({result['latency']}ms)")

# 3. Spremi sve nazad u JSON (novi format je rječnik listi)
with open(path_json, 'w') as f:
    json.dump(database, f, indent=4)

print("Podaci uspješno spremljeni s poviješću.")