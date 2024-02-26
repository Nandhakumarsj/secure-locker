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


file_name = time.strftime("%Y%m%d-%H%M%S")
addHistory(r'E:/Projects/IOT_Projects/secure-locker/server/08-19-37-AM.jpg',
           f'http://192.168.248.209:8080/upload/{file_name}')
