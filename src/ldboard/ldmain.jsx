import ReactConfetti from "react-confetti"
import LD3 from "../Components/LD3"
import LDList from "../Components/LDList"
import LDTitleBar from "../Components/LDTitleBar"
import "./ld.css"

function Ldmain()
{

    //console.log(elements)
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <ReactConfetti />
            <LDTitleBar />
            <LD3 />
            <LDList />
        </div>
    )
}

export default Ldmain