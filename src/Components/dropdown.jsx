import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

function Dropdown({ styles }) {

    const [searchParams, setSearchParams] = useSearchParams()
    
    const selectedOption = searchParams.get("type") || "w"
    if (!searchParams.get("type"))
    {
        setSearchParams({type: "w"}, {replace: true})
    }
    
    
    return (
        <select className={styles} value={selectedOption} onChange={(e) => {
                setSearchParams({type: e.target.value}, {replace: true})
                location.reload()
            }}>
            <option value="w">Women</option>
            <option value="m">Men</option>
        </select>
    )    
}

export default Dropdown
