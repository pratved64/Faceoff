import { useState } from 'react'

function Card({path, def, initElo})
{

    const [state, setState] = useState({imagePath: path, elo: initElo})

    function response()
    {
        setState((prevState) => {
            // Place API calls here and return object with updated path and elo
            console.log("Updated State of " + def)
            return state
        })
    }

    return (
        <div className="card" onClick={response}>
            <img src={state.imagePath} alt={def}/>
            <p>{state.elo}</p>
        </div>
    )
}

export default Card