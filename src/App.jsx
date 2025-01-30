import TitleBar from "./Components/TitleBar"
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"

function App()
{
    return (
      <>
        <TitleBar />
        <div id="wrapper">
          <Card path="#" def="Contestant 1" elo="1000"/>
          <Card path="#" def="Contestant 2" elo="1000"/>
        </div>
      </>
    )
}

export default App