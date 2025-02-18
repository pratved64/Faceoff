import logo from '../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import back from "../assets/back.png";

function LDTitleBar()
{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <div>
            <div className='flex flex-col justify-center items-center w-full text-white'>
                <Link to="/"><img src={logo} alt='back' className='h-40 m-auto -mt-10 sm:h-48 2xl:h-64'/></Link>
                <p className='-mt-10 mb-10 sm:mb-20 text-2xl 2xl:text-4xl 2xl:-mt-16 italic'>LEADERBOARD</p>
            </div>
            <img className='bg-white rounded-full h-10 border-2 border-black absolute left-2 top-2 cursor-pointer' onClick={() => handleClick()} src={back} />
        </div>
    )
}

export default LDTitleBar