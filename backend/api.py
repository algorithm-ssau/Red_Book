import requests
import csv

cols = ['_id', 'name', 'description', 'class']

#url содержит в себе адрес, к которому отправляется запрос
url = 'http://localhost:5000/api/items'  

def get_response(url):
    response = requests.get(url)
    data = response.json()
    #print (data)
    return data

def write_to_csv(name_file, cols, data):
    with open('eggs.csv', 'w', newline='') as f:
        wr = csv.DictWriter(f, fieldnames = cols) 
        wr.writeheader() 
        wr.writerows(data)
 
data = get_response(url)
write_to_csv(1, cols, data)


