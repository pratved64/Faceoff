 import { useSearchParams } from "react-router-dom"

 function Dropdown() {
 
    const [searchParams, setSearchParams] = useSearchParams()
    
    const selectedOption = searchParams.get("type") || "w"
    if (!searchParams.get("type"))
    {
        setSearchParams({type: "w"}, {replace: true})
    }
    
    return (
        <select className="bg-[#1A0000] cursor-pointer p-0.5 text-white font-sans border-2 rounded-lg"
         value={selectedOption} onChange={(e) => {
         setSearchParams({type: e.target.value}, {replace: true})
         location.reload()
        }}>
            <option className="bg-black cursor-pointer" value="w">Women</option>
            <option className="bg-black cursor-pointer"  value="m">Men</option>
        </select>
    )      
}

export default Dropdown
