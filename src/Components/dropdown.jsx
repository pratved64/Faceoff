import { useEffect, useState } from "react"

function Dropdown() {

    const def = localStorage.getItem("option") || "w"
    const [selectedOption, setOption] = useState(def)
    
    const getURL = (option) => {
        const baseURL = "https://faceoff-2.onrender.com/api" // CHANGE URLS AS PER BACKEND!!
        switch (option) {
            case "w":
                return `${baseURL}/random`
            case "m":
                return `${baseURL}/random_m`
            default:
                return `${baseURL}/random`
        }
    }

    

    
    useEffect(() => {
        localStorage.setItem("url", getURL(selectedOption))
        localStorage.setItem("option", selectedOption)
    }, [selectedOption])

    return (

        <select className="bg-sky-50" value={selectedOption} onChange={(e) => {
                setOption(e.target.value)
                location.reload()
            }}>
            <option value="w">Women</option>
            <option value="m">Men</option>
        </select>
    )    
}

export default Dropdown
