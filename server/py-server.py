from flask import Flask, request
app = Flask("secure-locker")


@app.route('/')
def home():
    return '<p>Server is Running..</p>'


@app.route('/upload', method='POST')
def upload():
    img = request.files
    with open('test.jpg', 'wb') as image:
        image.write()


app.run('127.0.0.1', 3223)
print('server is running')
