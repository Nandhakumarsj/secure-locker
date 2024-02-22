import time
import requests

def addHistory(filename:str, url:str):
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
        
file_name = time.strftime("%I-%M-%S-%p")
addHistory(r'E:/Projects/IOT_Projects/secure-locker/assets/imgs/man1.jpg', f'http://127.0.0.1:3223/upload/{file_name}')
