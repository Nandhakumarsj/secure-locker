import time
import requests


def addHistory(filename: str, url: str):
    with open(filename, 'rb') as image:
        file = {
            'image': image
        }
        res = requests.post(
            url, files=file
        )
        if res.status_code == 200:
            print('Uploaded')
        else:
            print('Not Uploaded')


file_name = time.strftime("%d.%m.%Y-%H-%M-%S")
addHistory(r'E:\Projects\IOT_Projects\secure-locker\server\users\man2.jpg',
           f'http://192.168.43.73:8080/upload/{file_name}')
