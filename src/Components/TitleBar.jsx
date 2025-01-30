import logo from '../assets/Logo.png'
import ldboard from '../assets/ldboard.png'

function TitleBar() {
    const l = logo
    const board = ldboard
    return (
        <div className="titleBar">
            <img src={l} alt="Logo Placeholder"/>
            <a href="../Leaderboard.html"><img id="linkIcon" src={board} alt="Leaderboard"/></a>
        </div>
    )
}

export default TitleBar