import logo from '../assets/Logo.png'

function TitleBar() {
    const l = logo
    return (
        <div className="titleBar">
            <img src={l} alt="Logo Placeholder"/>
        </div>
    )
}

export default TitleBar