import requests
from flask import Flask, render_template, jsonify, request, abort
import pickle

app = Flask(__name__)
events = dict()
events[1] = {"id":"1", "time":"2018-11-11 15:45", "location":"Guadalupe Street, Austin TX",
                "reason1": "Ignore", "reason2": "", "other": ""}

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

@app.route('/api/event', methods=['POST'])
def post_event():
    if not request.json or not 'id' in request.json:
        abort(400)

    # Look for event.
    thisId = int(request.json['id'])
    if thisId not in events:
        abort(400)

    event = events[thisId]

    # Update fields.
    FIELDS = ['reason1', 'reason2', 'other']
    for f in FIELDS:
        if f in request.json:
            event[f] = request.json[f]

    print("Updated events.")
    print(events)
    return ('', 200)

@app.route('/test', methods=['GET'])
def ask_event():
    print(events[1])
    headers = {"Content-Type": "application/json"}
    r = requests.post('http://localhost:8000/', data = events[1], headers=headers)

    return ('', 200)

if __name__ == '__main__':
    app.run("localhost", 5000, debug=True)
