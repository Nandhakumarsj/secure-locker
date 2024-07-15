import addHistory
import picamera
import time
from gpiozero import MotionSensor

PIR_PIN = 12

def start():
    global camera, pir
    camera = picamera.PiCamera()
    pir = MotionSensor(PIR_PIN)
    
def capture():
    global file_name
    file_name = time.strftime('%d.%m.%Y-%H-%M-%s')
    camera.capture(f'./uploads/{file_name}.jpg')
    
def clear():
    camera.close()
    
def send():
    addHistory.addHistory(file_name, 'https://192.168.43.73:8080/upload/{file_name}')
    
if __name__ == '__main__':
    print("-> Initializing...")
    while True:
        pir.wait_for_motion()
        capture()
        send()
        print('-> User Moved')
        pir.wait_for_no_motion(timeout=2)
    clear()