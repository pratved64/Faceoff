
function Card({path, def, elo})
{
    function response() {
        // Place API calls here
        alert("Clicked! " + def)
        const s_name=def;
        fetch("/api/rating", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ s_name }),
        })
            .then((res) => res.json())
            .then((data) => console.log("Response:", data));


        window.location.reload();


    }

    return (
        <div className="card" onClick={response}>
            <img src={path} alt={def}/>
            <p>{elo}</p>
        </div>
    )
}

export default Card