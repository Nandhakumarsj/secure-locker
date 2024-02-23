"""
---Warning---
Don't Use the AuthKey Elsewhere
"""
import time
import requests
from datetime import datetime

def send_notify(auth=False):
    """Sends Notification to the Authorized Device

    Args:
        auth (bool, optional): Does the Person is Authorized to access the Locker. Defaults to False.

    Returns:
        bool: Whether the notification sent or not
    """
    url = "https://exp.host/--/api/v2/push/send"
    headers = {
        "Content-Type": "application/json"
    }

    time_ = time.strftime('%I:%M:%S %p')
    # Default Body
    
    # if imgFile:
    #     original = Image.open(imgFile)
    #     original.save("local_compressed.jpg", "JPEG", optimize=True, quality=5)
    #     img = cv2.imread("local_compressed.jpg")
    #     r = 50 / img.shape[1]
    #     dim = (50, int(img.shape[0] * r))
    #     img = cv2.resize(img, dim, interpolation=cv2.INTER_AREA)
    #     img = cv2.imencode('.jpg', img)
    #     b64 = base64.b64encode(img[1]).decode('utf-8')
    data = {
        # Push Token [Specific for each registered device]
        "to": "ExponentPushToken[0ZXeV9GdssX9V8E0j1c6G7]",
        # Image Data to be encoded in base-64(ASCII)
        "data": {"auth": auth, 'date': f'{datetime.now()}', 'time': time_}
    }
    # if imgFile:
    #     img = Image.open(imgFile)
    #     img = img.resize((200, 250))
    #     img.save(imgFile, optimize=True)
    #     with open(imgFile, 'rb') as img:
    #         str_ = base64.b64encode(img.read())
    #         data["data"]["base64"] = str_.decode('utf-8')
    if auth:
        data["title"] = "Secure Locker"
        data["body"] = "Authorized Person Accessed"
        data["ttl"] = 3
    else:
        data["title"] = "Secure Locker Alert"
        data["body"] = "UnAuthorized Person Accessed"
        data["ttl"] = 5
        data['priority'] = 'high'
    # try:
    res = requests.post(url=url, headers=headers, json=data, timeout=10)
    res = res.json()
    if res['data']['status'] == 'ok':
        print(res)
        return True
    return False
    #   return True
    # except requests.ConnectionError:
    #     print('=> Connection Failed!')
    #     return False

    # except (requests.Timeout):
    #     print('=> Timeout!')
    #     return False
    # except (requests.HTTPError):
    #     print('=> Secure Connection Failed!')
    # return False


if __name__ == "__main__":
    while True:
        if send_notify(auth=True):
            break
