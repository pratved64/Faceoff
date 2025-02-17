import LDRow from "./LDRow"
import {useState} from "react";

// elements is an array of element object
// element contains Rank, Name and Image path of each celebrity
// Structure element while fetching accordingly

function LDList() {
    function getElements() {
        // Fetch Data here
        const [data, setValue] = useState({name:[],elo:[],img:[]});
        const fetchData = () => {
            fetch("https://faceoff-1.onrender.com/api/leaderboard")
                .then((res) => res.json())
                .then((data) => {
                    setValue({name:data.name,elo:data.elo,img:data.image_path});

        let arr = []

        for (let i = 4; i <= 10; i++) {
            let o = { rank: i, name: data.name[i], img: data.img[i]}
            arr.push(o)
        }
        return arr;
    })

    let elements = getElements();

    return (
        <div>
            {elements.map((element, index) => (
                <LDRow key={index} {...element} />
            ))}
        </div>
    );
}

export default LDList;}}

// TODO: Styling for LDRow
