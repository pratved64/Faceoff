import React from 'react';
import TitleBar from "./Components/TitleBar.jsx";
import Card from "./Components/Card.jsx";
import {useState,useEffect} from 'react';
function App() {
    const [data1, setValue1] = useState({name:'',elo:'',img:''});
    const [data2, setValue2] = useState({name:'',elo:'',img:''});
    const fetchData = () => {
        fetch("/api/random")
            .then((res) => res.json())
            .then((data) => {
                setValue1({name:data.data1,elo:data.data1_elo,img:data.data1_img});
                setValue2({name:data.data2,elo:data.data2_elo,img:data.data2_img});})
            }
    useEffect(() => {
        fetchData();
    }, []);
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(TitleBar),
        React.createElement('div', { id: 'wrapper' },
            React.createElement(Card, {
                path: data1.img,
                def: data1.name,
                elo: data1.elo}),
            React.createElement(Card, {
                path: data2.img,
                def: data2.name,
                elo: data2.elo})
        )
    );
}

export default App;

