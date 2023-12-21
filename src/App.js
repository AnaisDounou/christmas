import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Gift from "./pages/Gift"
import Messages from "./pages/Messages"
import Calender from "./pages/Calender"
import DecemberCalendar from "./pages/Component/December"
function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={ <Home/> } />
        <Route path="gift" element={ <Gift/> } />
        <Route path="message" element={ <Messages/> } />
        <Route path="calender" element={ <Calender/> } />
        <Route path="calenders" element={ <DecemberCalendar/> } />
      </Routes>
    </div>
  )
}
export default App