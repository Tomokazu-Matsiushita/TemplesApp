# app.py
import sqlite3
from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, resources={
    r"/search": {
        "origins": ["http://localhost:3001"],
        "allow_headers": ["Content-Type", "Authorization"],
        "methods": ["GET"]
    }
})

DATABASE_PATH = 'trial.db'

def search_in_db(title):
    # Connect to the SQLite database
    connection = sqlite3.connect(DATABASE_PATH)
    cursor = connection.cursor()

    # Execute a SQL query to search for temples by title
    cursor.execute("SELECT * FROM temples WHERE title LIKE ?", ('%' + title + '%',))
    results = cursor.fetchall()

    # Close the database connection
    connection.close()

    # Convert the results to a list of dictionaries
    temples = [{'Href': row[1], 'Title': row[2], 'Latitude': row[3], 'Longitude': row[4]} for row in results]

    return temples

@app.route('/search', methods=['GET'])
def search_title():
    title = request.args.get('title')
    result = search_in_db(title)
    response = jsonify(result)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
