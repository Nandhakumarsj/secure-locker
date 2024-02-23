from flask import Flask, request
from deepface import DeepFace
import notify

app = Flask("secure-locker")

database = r"E:/Projects/IOT_Projects/secure-locker/server/users"
findings = DeepFace.verify(database+'/man1.jpg', database+'/man2.jpg')
to_notify = findings['verified']


@app.route('/<filename>', methods=['GET'])
def home(filename):
    to_notify = DeepFace.verify(database+'/man2.jpg')
    notify.send_notify(auth=to_notify)
    return 'sent'


@app.route('/upload/<filename>', methods=['POST'])
def upload(filename):
    img = request.files['image']
    # print(dir(request.files['time']), request.files['time'].stream)
    img.save(
        rf'E:\Projects\IOT_Projects\secure-locker\server\upload\{filename}.jpg')
    return 'uploaded'


app.run(debug=True, host='0.0.0.0', port=3306)
print('server is running')
