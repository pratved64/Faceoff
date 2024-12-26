function Card({path, def, elo})
{

    function response() {
        // Place API calls here
        alert("Clicked! " + def)
    }

    return (
        <div className="card" onClick={response}>
            <img src={path} alt={def}/>
            <p>{elo}</p>
        </div>
    )
}

export default Card