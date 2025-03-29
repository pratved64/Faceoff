import { useEffect, useState } from "react"

function Dropdown({ page }) {

    const def = localStorage.getItem("option") || "w"
    const [selectedOption, setOption] = useState(def)
    console.log(page)
    const getURL = (option) => {
        const baseURL = "https://faceoff-2.onrender.com/api" // CHANGE URLS AS PER BACKEND!!
        if (page === "home") {
            switch (option) {
                case "w":
                    return `${baseURL}/random`
                case "m":
                    return `${baseURL}/random_m`
                default:
                    return `${baseURL}/random`
            }
        } else if (page === "ldboard") {
            switch (option) {
                case "w":
                    return `${baseURL}/leaderboard`
                case "m":
                    return `${baseURL}/leaderboardm`
                default:
                    return `${baseURL}/leaderboard`
            }
        }
    }

    console.log(getURL)

    

    
    useEffect(() => {
        localStorage.setItem(`${page}-url`, getURL(selectedOption))
        localStorage.setItem("option", selectedOption)
    }, [selectedOption])

    if (page === "ldboard") {
        return (
            <select className="bg-sky-50 !absolute top-38 left-1/2 -translate-x-1/2" value={selectedOption} onChange={(e) => {
                    setOption(e.target.value)
                    location.reload()
                }}>
                <option value="w">Women</option>
                <option value="m">Men</option>
            </select>
        )    
    } else {
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
    
}

export default Dropdown
