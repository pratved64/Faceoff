import PropTypes from "prop-types";

function LDRow({rank, name, img, elo})
{
    LDRow.propTypes = {
            rank: PropTypes.any,
            name: PropTypes.any,
            img: PropTypes.any,
            elo: PropTypes.any,
        };

    return (
        <div className="w-[96%] bgColorRow flex text-white font-medium 2xl:text-3xl justify-between items-center px-4 py-2 mt-2 sm:mt-4 border-2 sm:text-2xl">
            <p className="font-bold">{rank}</p>         
            <p>{name}</p>
            <p>{elo}</p>
            <img src={img} alt={name} className="w-28 sm:w-44 lg:w-56 border-2"/>
        </div>
    )
}

export default LDRow