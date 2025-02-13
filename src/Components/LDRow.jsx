function LDRow({rank, name, img})
{
    return (
        <div id='ldRow'>
            <p id="rowRank">{rank}</p>
            <p id="rowName">{name}</p>
            <img src={img} alt={name} id="rowImg"/>
        </div>
    )
}

export default LDRow