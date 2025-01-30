import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from collections import OrderedDict
import numpy as np
cred = credentials.Certificate("./amgaaa-999fd-firebase-adminsdk-dyz3v-125540b8ea.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://amgaaa-999fd-default-rtdb.asia-southeast1.firebasedatabase.app'})
ref=db.reference(path='Celebrities')
data=ref.get()
player_names = [entry.get('name') for entry in data]
rating=[entry.get('elo') for entry in data]
def name_details(a,b):
    query=ref.order_by_child('name').equal_to(a)
    query1=ref.order_by_child('name').equal_to(b)
    for i in query.get().values():
        print(type(i))
    for j in query1.get().values():
        print(type(i))
    query_elo=i['elo']
    query1_elo=j['elo']
    query_img=i['image_path']
    query1_img=j['image_path']
    return query_elo,query1_elo,query_img,query1_img
def update_rating(id,new_rating):
    celeb=db.reference(path=f'Celebrities/{id}')
    celeb.update({
        "elo":new_rating
    })