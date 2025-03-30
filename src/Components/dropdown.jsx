import { useDispatch, useSelector } from "react-redux"
import { changeGen } from "../utils/faceSlice";

function Dropdown() {
    const gender = useSelector((store) => store.face);
    const dispatch = useDispatch();
    const handleGen = (gen) => {
        dispatch(changeGen(gen));
    }
    
    return (
        <select value={gender} className="bg-[#1A0000] cursor-pointer p-0.5 text-white font-sans border-2 rounded-lg" onChange={(e) => {handleGen(e.target.value)}}>
            <option className="bg-black cursor-pointer" value="w">Women</option>
            <option className="bg-black cursor-pointer"  value="m">Men</option>
        </select>
    )      
}

export default Dropdown
