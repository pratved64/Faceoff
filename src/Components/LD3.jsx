import { useState, useEffect} from 'react'

function LD3()
{
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://faceoff-1.onrender.com/api/leaderboard")
            .then(res => res.json())
            .then(fetched => {
                setData({
                    name: fetched.name.slice(0, 3),
                    img: fetched.image_path.slice(0, 3)
                })
            })
            .catch(err => console.error("ERROR: ", err))

    }, [])

    if (!data) return <p>LOADING</p>

    return (
        <div id='t3-cont'>
            <div id="t3-row">
                <p>{data.name[1]}</p>
                <img alt="#2" id="t3-L" src={data.img[1]}/>
                <p>2</p>
            </div>
            <div id="t3-row">
                <p>{data.name[0]}</p>
                <img alt="#1" id="t3-C" src={data.img[0]}/>
                <p>1</p>
            </div>
            <div id="t3-row">
                <p>{data.name[2]}</p>
                <img alt="#3" id="t3-R" src={data.img[2]}/>
                <p>3</p>
            </div>
        </div>
    )
}

export default LD3