import logo from '../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import back from "../assets/back.png";
import Dropdown from './dropdown';

function LDTitleBar()
{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <div className='flex justify-between px-4 py-2'>
            <img className='bg-white rounded-full h-10 border-2 border-black cursor-pointer' onClick={() => handleClick()} src={back} />
            <div className='flex flex-col justify-center items-center w-full text-white'>
                <Link to="/"><img src={logo} alt='back' className='h-24 m-auto sm:h-44 lg:-mt-12 2xl:h-48 -mt-6'/></Link>
                <p className='-mt-8 mb-10 text-xl 2xl:text-4xl 2xl:-mt-16 italic'>LEADERBOARD</p>
            </div>
            <div className=''>
                <Dropdown />
            </div>
        </div>
    )
}

export default LDTitleBar