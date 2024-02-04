"""
---Warning---
Don't Use the AuthKey Elsewhere
"""
import requests


def send_notify(auth=False):
    """Sends Notification to the Authorized Device

    Args:
        auth (bool, optional): Does the Person is Authorized to access the Locker. Defaults to False.

    Returns:
        bool: Whether the notification sent or not
    """
    url = "https://exp.host/--/api/v2/push/send"
    headers = {
        "Content-Type": "application/json",
        "Accept-encoding": "gzip, deflate"
    }
    # Image Data to be encoded in base-64(ASCII)
    img = {"auth":auth}
    data = {
        # Push Token [Specific for each registered device]
        "to": "ExponentPushToken[mO0i2xGftfXYgG3vsSJQbu]",
    }
    if auth:
        data["title"] = "Secure Locker"
        data["body"] = "Authorized Person Accessed"
        data["ttl"] = 3
    else:
        data["title"] = "Secure Locker Alert"
        data["body"] = "UnAuthorized Person Accessed"
        data["ttl"] = 5
    try:
        requests.post(url=url, headers=headers, json=data, data=img, timeout=100)
        return True
    except requests.ConnectionError:
        print('=> Connection Failed!')
        return False

    except (requests.Timeout):
        print('=> Timeout!')
        return False
    except (requests.HTTPError):
        print('=> Secure Connection Failed!')
        return False

if __name__ == "__main__":
    while True:
        if send_notify(auth=True):
            break
