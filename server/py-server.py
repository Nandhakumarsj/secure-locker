from flask import Flask, request
app = Flask("secure-locker")


@app.route('/<filename>', methods=['GET'])
def home(filename):
    
    return '<p>Server is Running..</p>'


@app.route('/upload/<filename>', methods=['POST'])
def upload(filename):
    img = request.files['image']
    # print(dir(request.files['time']), request.files['time'].stream)
    img.save(
        rf'E:\Projects\IOT_Projects\secure-locker\server\{filename}.jpg')
    return 'uploaded'


app.run('127.0.0.1', 3223, debug=True)
print('server is running')
