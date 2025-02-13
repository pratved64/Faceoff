import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function LDTitleBar()
{
    return (
        <div className='logo-cont'>
            <Link to="/"><img src={logo} className='logo'/></Link>
        </div>
    )
}

export default LDTitleBar