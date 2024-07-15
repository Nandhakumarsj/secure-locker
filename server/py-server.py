import notify
from flask import Flask, request, send_from_directory
from PIL import Image
from deepface import DeepFace

app = Flask("secure-locker")

database = r"E:/Projects/IOT_Projects/secure-locker/server"
# findings = DeepFace.verify(database+'/users/man1.jpg',
#                            database+'/users/man2.jpg')
# to_notify = findings['verified']


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
    try:
        for i in range(5):
            to_notify = DeepFace.verify(
                database+f'/upload/{filename}.jpg', database+f'/users/{i}.jpg')['verified']
            if to_notify:
                break
        notify.send_notify(time, date, auth=to_notify)
    except ValueError:
        print('Face Not Detected!')
        to_notify = False
        notify.send_notify(time, date, auth=to_notify)
    return 'uploaded'


app.run(debug=True, host='0.0.0.0', port=8080)
print('server is running')
