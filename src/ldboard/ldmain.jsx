import LD3 from "../Components/LD3"
import LDList from "../Components/LDList"
import LDTitleBar from "../Components/LDTitleBar"
import ParticlesComponent from "../Components/particles"
import "./ld.css"
import ReactConfetti from "react-confetti"

function Ldmain()
{
    //console.log(elements)
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="-z-20">
                <ParticlesComponent />
            </div>
            <ReactConfetti recycle={false}/>
            <div className="w-[90%] lg:w-[50%] justify-center items-center">
                <LDTitleBar />
                <LD3 />
                <LDList />
            </div>
        </div>
    )
}

export default Ldmain