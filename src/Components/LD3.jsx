function LD3(t3Img, t3Names)
{
    return (
        <div id='t3-cont'>
            <div id="t3-row">
                <p>{t3Names[1]}</p>
                <img alt="#2" id="t3-L" src={t3Img[1]}/>
                <p>2</p>
            </div>
            <div id="t3-row">
                <p>{t3Names[0]}</p>
                <img alt="#1" id="t3-C" src={t3Img[0]}/>
                <p>1</p>
            </div>
            <div id="t3-row">
                <p>{t3Names[2]}</p>
                <img alt="#3" id="t3-R" src={t3Img[2]}/>
                <p>3</p>
            </div>
        </div>
    )
}

export default LD3