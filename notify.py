"""
---Warning---
Don't Use the AuthKey Elsewhere
"""
import requests
import base64
from PIL import Image


def send_notify(auth=False, imgFile=None):
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

    data = {
        # Push Token [Specific for each registered device]
        "to": "ExponentPushToken[mO0i2xGftfXYgG3vsSJQbu]",
        # Image Data to be encoded in base-64(ASCII)
        "data": {"auth": auth, 'date': '07/07/2024', 'time': '12:44', 'base64': 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}
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
    # return True
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
        if send_notify(auth=True, imgFile="./assets/imgs/man2.jpg"):
            break
