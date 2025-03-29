import LDRow from "./LDRow"
import {useState, useEffect} from "react";

// elements is an array of element object
// element contains Rank, Name and Image path of each celebrity
// Structure element while fetching accordingly

function LDList() {
    
    const [elements, setElements] = useState([])
    const url = localStorage.getItem("ldboard-url")
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('HTTP ERROR')
                }
                return res.json()
            })
            .then(data => {
                let arr = []
                //console.log(data)
                for (let i = 3; i < 10; i++)
                {
                    arr.push({
                        rank: i+1,
                        name: data.name[i],
                        img: data.image_path[i],
                        elo: data.elo[i]
                    })
                    //console.log(arr)
                    
                }
                setElements(arr)
            })
            .catch(error => console.error("Error fetching data: ", error))
    }, [])

    return (
        <div className="my-10 mb-4 flex flex-col justify-center items-center w-full">
            {elements.map((element, index) => (
                <LDRow key={index} {...element} />
            ))}
            <p className="text-white font-thin text-sm mt-4 lg:text-xl 2xl:text-2xl"> ~ project by PRAN</p>
        </div>
    );
}

export default LDList;

// TODO: Styling for LDRow
