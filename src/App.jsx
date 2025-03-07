import Card from "./Components/Card.jsx";
import ParticlesComponent from "./Components/particles.jsx"

import Titlebar from "./Components/TitleBar.jsx"
import Ldmain from './ldboard/ldmain.jsx'
import { motion } from "motion/react";
import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'

function Home() {
    const [data1, setValue1] = useState({name:'',elo:'',img:''});
    const [data2, setValue2] = useState({name:'',elo:'',img:''});
    const fetchURL = localStorage.getItem("url") || "https://faceoff-2.onrender.com/api/random"
    const fetchData = () => {
        fetch(fetchURL)
            .then((res) => res.json())
            .then((data) => {
                setValue1({name:data.data1,elo:data.data1_elo,img:data.data1_img});
                setValue2({name:data.data2,elo:data.data2_elo,img:data.data2_img});})
            .catch(error => console.error(error))
        }
    useEffect(() => {
        fetchData();
    }, []);

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

    return (
        <div className="min-h-[100svh] flex flex-col pb-4">
            <div className="-z-20"><ParticlesComponent /></div>
            <div className="mt-2">
                <Titlebar />
            </div>
            <motion.div
             initial = {{ y: "100vh"}}
             animate = {{y: 0}}
             transition={{duration: 1.5}}
             className="flex flex-col lg:flex-row justify-center items-center bg-transparent lg:min-h-[60svh] w-[80%] sm:w-[50%] lg:w-[80%] lg:mt-20 m-auto mt-4 gap-6 lg:gap-12"> 
                <Card path = {data1.img} def={data1.name} elo={data1.elo} />
                <Card path = {data2.img} def={data2.name} elo={data2.elo} />
            </motion.div>
        </div>
    );
}

function Leaderboard()
{
    return <Ldmain />
}

function App()
{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/leaderboard" element={<Leaderboard />}/>
            </Routes>
        </Router>
    )
}

export default App;

/*
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
*/
