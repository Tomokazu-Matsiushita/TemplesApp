# app.py

import sqlite3
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/search', methods=['GET'])
def search_temple():
    query = request.args.get('query', '')
    result = fetch_temple_by_title(query)
    return jsonify(result)

def fetch_temple_by_title(title):
    conn = sqlite3.connect('trial.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM temples_table WHERE Title LIKE ?", ('%' + title + '%',))
    result = cursor.fetchall()
    conn.close()
    return result

if __name__ == '__main__':
    app.run(debug=True)

# # import csv
# # from flask import Flask, jsonify, request

# # app = Flask(__name__)

# # # Read temple data from CSV
# # temples = []
# # with open('trial.db', newline='', encoding='utf-8') as db:
# #     reader = csv.DictReader(csvfile)
# #     for row in reader:
# #         temple = {
# #             "href": row['Href'],
# #             "title": row['Title'],
# #             "latitude": row['Latitude'],
# #             "longitude": row['Longitude']
# #         }
# #         temples.append(temple)

# # @app.route('/temples', methods=['GET'])
# # def get_temples():
# #     return jsonify(temples)

# # @app.route('/temples/search', methods=['GET'])
# # def search_temples():
# #     query = request.args.get('query', '').lower()
# #     results = [temple for temple in temples if query in temple['title'].lower()]
# #     return jsonify(results)

# # if __name__ == '__main__':
# #     app.run(debug=True)
# import sqlite3
# from flask import Flask, jsonify, request

# app = Flask(__name__)

# # Establish a connection to the SQLite database
# conn = sqlite3.connect('trial.db')
# cursor = conn.cursor()

# # Define the temple table schema
# cursor.execute('''
#     CREATE TABLE IF NOT EXISTS temples (
#         id INTEGER PRIMARY KEY AUTOINCREMENT,
#         href TEXT,
#         title TEXT,
#         latitude TEXT,
#         longitude TEXT
#     )
# ''')
# conn.commit()

# # Sample data insertion, replace this with actual data insertion logic
# cursor.executemany('''
#     INSERT INTO temples (href, title, latitude, longitude) VALUES (?, ?, ?, ?)
# ''', [
#     ('/wiki/%E6%95%A2%E5%9C%8B%E7%A5%9E%E7%A4%BE', '敢國神社', '北緯34度47分14.52秒', '東経136度09分50.18秒'),
#     # Add more data here
# ])
# conn.commit()

# @app.route('/temples', methods=['GET'])
# def get_temples():
#     # Retrieve all temples from the database
#     cursor.execute('SELECT * FROM temples')
#     result = cursor.fetchall()

#     temples_data = []
#     for row in result:
#         temple = {
#             "href": row[1],
#             "title": row[2],
#             "latitude": row[3],
#             "longitude": row[4]
#         }
#         temples_data.append(temple)

#     return jsonify(temples_data)

# @app.route('/temples/search', methods=['GET'])
# def search_temples():
#     query = request.args.get('query', '').lower()
#     results = [
#         {
#             "href": temple["Href"],
#             "title": temple["Title"],
#             "latitude": temple["Latitude"],
#             "longitude": temple["Longitude"]
#         }
#         for temple in temples
#         if query in temple['Title'].lower()
#     ]
#     return jsonify(results)

# if __name__ == '__main__':
#     app.run(debug=True)
