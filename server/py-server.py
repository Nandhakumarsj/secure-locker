from flask import Flask, request
from deepface import DeepFace
import notify
import base64

app = Flask("secure-locker")

database = r"F:\\IOT Lab\\secure-locker\\server"
findings = DeepFace.verify(database+'/users/man1.jpg', database+'/users/man2.jpg')
to_notify = findings['verified']


@app.route('/<filename>', methods=['GET'])
def home(filename):
    with open(filename, 'rb') as img:
        str_ = base64.b64encode(img.read())
        send = str_.decode('utf-8')
    return send


@app.route('/upload/<filename>', methods=['POST'])
def upload(filename):
    img = request.files['image']
    # print(dir(request.files['time']), request.files['time'].stream)
    img.save(
        rf'F:\\IOT Lab\\secure-locker\\server\\uploads\\{filename}.jpg')
    date, time = str(filename).split('-')
    to_notify = DeepFace.verify(database+f'/uploads/{filename}.jpg',database+'/users/man2.jpg')['verified']
    notify.send_notify(time, date, auth=to_notify)
    return 'uploaded'


app.run(debug=True, host='0.0.0.0', port=8080)
print('server is running')
