from flask import Flask
from flask import jsonify,request, make_response
from flask_cors import CORS
from selllllllllllll import *
from ELO import *
import time
print("My greatest creation is you....")
time.sleep(2)
app = Flask(__name__)
CORS(app)
@app.route('/api/random',methods=['GET'])
def random_name():
    global l
    l=np.random.choice(player_names, size=2, replace=False)
    global n
    n=l[0]
    global m
    m=l[1]
    name_details(n,m)
    query=ref.order_by_child('name').equal_to(n)
    query1=ref.order_by_child('name').equal_to(m)
    for i in query.get().values():
        print(type(i))
    for j in query1.get().values():
        print(type(i))
    global query_elo
    query_elo=i['elo']
    global query1_elo
    query1_elo=j['elo']
    query_img=i['image_path']
    query1_img=j['image_path']
    return jsonify({"data1":n,
                    "data2":m,
                    'data1_elo':query_elo,
                    'data2_elo':query1_elo,
                    'data1_img':query_img,
                    'data2_img':query1_img})

@app.route('/api/rating',methods=['POST'])
def rating():
    data = request.json
    selected_name=data['s_name']
    print(selected_name)
    print(player_names.index(selected_name))
    print(n,m)
    if selected_name==n:
        ratings=elo(query_elo,query1_elo)
        print(ratings)
        winner_id=player_names.index(n)
        winner_rating=ratings[1]
        loser_id=player_names.index(m)
        loser_rating=ratings[0]
        update_rating(winner_id,winner_rating)
        update_rating(loser_id,loser_rating)


    elif selected_name==m:
        ratings1=elo(query1_elo,query_elo)
        print(ratings1)
        winner_id=player_names.index(m)
        winner_rating=ratings1[1]
        loser_id=player_names.index(n)
        loser_rating=ratings1[0]
        update_rating(winner_id,winner_rating)
        update_rating(loser_id,loser_rating)
    else:
        print("Error dumbass")
    return jsonify({"received": data})

if __name__ == '__main__':
    app.run(debug=True)
