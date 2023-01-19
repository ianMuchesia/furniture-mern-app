import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from "./pages/Shop"

function App() {
 

  return (
    <BrowserRouter >
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="Shop" element={ <Shop/>}/>
   
    </Routes>
     
      
      <Footer/> 
    </BrowserRouter>
  )
}

export default App
