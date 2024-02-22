import time
import base64
import cv2
import requests

image = cv2.imread('../local_compressed.jpg')
image = cv2.imencode('.jpg', image)
b64 = base64.b64decode()
headers = {"Content-Type":"application/json"}
data = {"time":time.strftime("%X %p"),
        "content":image}
