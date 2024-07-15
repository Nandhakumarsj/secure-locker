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

