import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function LDTitleBar()
{
    return (
        <div>
            <Link to="/"><img src={logo} className='h-40 m-auto -mt-10 sm:h-48 2xl:h-64'/></Link>
        </div>
    )
}

export default LDTitleBar