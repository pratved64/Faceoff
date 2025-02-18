import LD3 from "../Components/LD3"
import LDList from "../Components/LDList"
import LDTitleBar from "../Components/LDTitleBar"
import { ParticlesContainer } from "../Components/particles"
import "./ld.css"
import ReactConfetti from "react-confetti"

function Ldmain()
{

    //console.log(elements)
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="-z-20"><ParticlesContainer /></div>
            <ReactConfetti recycle={false}/>
            <LDTitleBar />
            <LD3 />
            <LDList />
        </div>
    )
}

export default Ldmain