import logo from '../assets/Logo.png'
import ldboard from '../assets/ldboard.png'

function TitleBar() {
    const l = logo;
    const board = ldboard;
    return (
        <div className="flex w-full justify-between items-center h-16 bg-[] p-2">
            <img src={l} alt="Logo-Placeholder" className="h-28"/>
            <a href="../Leaderboard.html"><img id="linkIcon" src={board} alt="Leaderboard" className='h-14 bg-white border-2 border-[#3C0753] rounded-xl'/></a>
        </div>
    )
}

export default TitleBar