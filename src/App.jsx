import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Link1 from './components/Link1'
import Link2 from './components/Link2'
import Link3 from './components/Link3'
import Link4 from './components/Link4'


function App() {
  

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/link1" element={<Link1 />}/>
        <Route path="/link2" element={<Link2 />}/>
        <Route path="/link3" element={<Link3 />}/>
        <Route path="/link4" element={<Link4 />}/>
      </Routes>
      
    </>
  )
}

export default App
