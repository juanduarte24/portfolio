import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Proyects from "./components/Proyects"
import Skills from "./components/Skills"


function App() {
 
  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Proyects/>
     <Contact/>
    </div>
  )
}

export default App
