import { createRoot } from "react-dom/client"
import LD3 from "../Components/LD3"
import LDList from "../Components/LDList"
import LDTitleBar from "../Components/LDTitleBar"

alert("I've left wireframe borders for debugging. Good luck. \n\nComment me out later")
createRoot(document.getElementById('root')).render(
    <>
        <LDTitleBar />
        <LD3 />
        <LDList elements={[{rank:-1, name:'empty', img:'#'}]}/>
    </>
)