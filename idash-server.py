import irsdk
import socketio
import time
import threading
from flask import Flask

socket = socketio.Server(async_mode='threading', cors_allowed_origins='*')
app = Flask(__name__)
static_files = {
    '/': './client/build/index.html',
    '/': './client/build/'
}
app.wsgi_app = socketio.WSGIApp(socket, app.wsgi_app, static_files=static_files)

def poll_iracing():
    ir = irsdk.IRSDK()
    connected = ir.startup()
    while True:
        if not connected:
            if ir.startup():
                connected = True
                print("Connected to iRacing")
            else:
                print("Cannot connect to iRacing, trying again in 5 seconds...")
                time.sleep(5)
        else:
            stats_to_collect = ["Speed", "RPM", "FuelLevelPct", "Gear", "Brake", "BrakeABSactive", "Clutch", "OilTemp", "OilPress", "Throttle", "SteeringWheelAngle", "SteeringWheelAngleMax", "DisplayUnits"]
            payload = {}
            for stat in stats_to_collect:
                payload[stat] = ir[stat]
            socket.emit('update', payload)
            time.sleep(1/60) # 60FPS

if __name__ == '__main__':
    poll_thread = threading.Thread(target=poll_iracing)
    poll_thread.start()
    app.run("0.0.0.0")