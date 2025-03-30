import logo from '../assets/Logo.png'
import ldboard from '../assets/ldboard.png'
import { Link } from 'react-router-dom'
import Dropdown from './dropdown';

function TitleBar() {
    const l = logo;
    const board = ldboard;
    return (
        <div className="flex w-full justify-between items-center h-16 bg-[] p-2">
            <img src={l} alt="Logo-Placeholder" className="h-28"/>
            <Dropdown styles="bg-sky-50"/>
            <Link to="/leaderboard">
            <img id="linkIcon" src={board} alt="Leaderboard" className='h-14 bg-white border-2 border-[#3C0753] rounded-xl'/>
            </Link>
        </div>
    )
}

export default TitleBar