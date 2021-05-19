from flask import Flask, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from pymongo import MongoClient
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017"
mongo = PyMongo(app)
CORS(app)

client = MongoClient('localhost', 27017)
db = client.dbsparta

@app.route('/songs', methods=['GET'])
def listening():
    songs = list(db.spotify_chart_songs.find({}, {'_id': False}))
    return jsonify({'all_songs': songs})

if __name__ == '__main__':
    app.run(debug=True)