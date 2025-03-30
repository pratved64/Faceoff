
import ParticlesComponent from "./Components/particles.jsx"
import Titlebar from "./Components/TitleBar.jsx"
import Ldmain from './ldboard/ldmain.jsx'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Card from "./Components/Card.jsx";

function Home() {
    return (
        <div className="min-h-[100svh] flex flex-col pb-4">
            <div className="-z-20"><ParticlesComponent /></div>
            <div className="mt-2">
                <Titlebar />
                <Card />
            </div>
            
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
