import logo from '../assets/Logo.png'

function LDTitleBar()
{
    return (
        <div className='logo-cont'>
            <a href='index.html'><img src={logo} className='logo'/></a>
        </div>
    )
}

export default LDTitleBar