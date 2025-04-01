import { useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'

function LD3()
{
    const [data, setData] = useState(null)
    const urls = {
        w: "https://faceoff-2.onrender.com/api/leaderboard",
        m: "https://faceoff-2.onrender.com/api/leaderboardm"
    }

    const [searchParams] = useSearchParams()
     const selectedType = searchParams.get("type") || "w"
 
     const url = selectedType === "w" ? urls.w : urls.m

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(fetched => {
                setData({
                    name: fetched.name.slice(0, 3),
                    img: fetched.image_path.slice(0, 3),
                    elo: fetched.elo.slice(0, 3)
                })
            })
            .catch(err => console.error("ERROR: ", err))

    }, [])

    if (!data) return <p>LOADING</p>

    return (
        <div className='grid grid-cols-3 mx-2 text-white justify-center items-center text-center 2xl:text-4xl -mt-5 sm:-mt-20 lg:-mt-10 2xl:mt-0 sm:text-2xl'>
            <div className='mx-2 2xl:mx-8 mt-10 sm:mt-12 flex flex-col justify-center items-center'>
                <p>{data.name[1]}</p>
                <img alt="#2" className='border-2' src={data.img[1]}/>
                <p>{data.elo[1]}</p>
                <p className='font-bold'>2</p>
            </div>
            <div className='mb-10 flex flex-col justify-center items-center'>
                <p>{data.name[0]}</p>
                <img alt="#1" className='border-2' src={data.img[0]}/>
                <p>{data.elo[0]}</p>
                <p className='text-yellow-400 font-semibold text-2xl lg:text-4xl 2xl:text-6xl'>1</p>
            </div>
            <div className='mx-2 2xl:mx-8 mt-16 sm:mt-40 flex flex-col justify-center items-center'>
                <p>{data.name[2]}</p>
                <img alt="#3" className='border-2' src={data.img[2]}/>
                <p>{data.elo[2]}</p>
                <p className='font-bold'>3</p>
            </div>
        </div>
    )
}

export default LD3
