import notify
import base64
from flask import Flask, request, jsonify, send_from_directory
from PIL import Image
# from deepface import DeepFace

app = Flask("secure-locker")

database = r"E:/Projects/IOT_Projects/secure-locker/server"
# findings = DeepFace.verify(database+'/users/man1.jpg',
#                            database+'/users/man2.jpg')
# to_notify = findings['verified']
to_notify = True


@app.route('/<filename>', methods=['GET'])
def home(filename):
    img_dir = f"{database}/upload"
    return send_from_directory(img_dir, f"{filename}.jpg")
    # img_dir = f"{database}/upload/{filename}.jpg"
    # return send_file(img_dir, as_attachment=True)
    # with open(img_dir, 'rb') as img:
    #     encoded_string = base64.b64encode(img.read()).decode()
    # return jsonify({'image': encoded_string})


@app.route('/upload/<filename>', methods=['POST'])
def upload(filename):
    img = request.files['image']
    # print(dir(request.files['time']), request.files['time'].stream)
    img_dir = f"{database}/upload/{filename}.jpg"
    img.save(img_dir)
    img = Image.open(img_dir)
    img = img.resize((300, 300))
    img.save(img_dir, optimize=True)
    date, time = str(filename).split('-', 1)
    # to_notify = DeepFace.verify(
    #     database+f'/upload/{filename}.jpg', database+'/users/man2.jpg')['verified']
    notify.send_notify(time, date, auth=to_notify)
    return 'uploaded'


app.run(debug=True, host='0.0.0.0', port=8080)
print('server is running')
