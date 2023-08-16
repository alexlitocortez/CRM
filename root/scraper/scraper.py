import requests
from bs4 import BeautifulSoup

url = "https://www.indeed.com/"
response = requests.get(url)

print("response", response)