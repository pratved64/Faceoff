import PropTypes from "prop-types";
import { motion } from "motion/react";

function Card({path, def })
{
    Card.propTypes = {
        path: PropTypes.any,
        def: PropTypes.any,
        elo: PropTypes.any,
    };

    function response() {
        // Place API calls here
        //alert("Clicked! " + def)
        const s_name=def;
        fetch("https://faceoff-1.onrender.com/api/rating", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ s_name }),
        })
            .then((res) => res.json())
            .then((data) => console.log("Response:", data));


        window.location.reload();
    }

    return (
        <div className="flex flex-col justify-center items-center h-full lg:hover:scale-105 bg-black text-white border-2 p-4 shadow-md hover:shadow-lg duration-500 cursor-pointer shadow-red-400" onClick={response}>
            <motion.img
             initial = {{ opacity: 0}}
             animate = {{opacity: 1}}
             transition={{duration: 0.2, delay: 1.9}}
             src={path} alt={def} className="h-80 m-2 border-2"/>
            <p className="text-lg font-semibold font-serif">{def}</p>
        </div>
    )
}

export default Card