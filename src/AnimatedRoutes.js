import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { Routes , Route, useLocation} from 'react-router-dom'


function AnimatedRoutes() {
    const location = useLocation()
  return (
    <Routes location={location} key={location.pathname} >
    <Route path="/" element={<Home />}></Route>
    <Route exact path="/about" element={<About />}></Route>
    <Route exact path="/projects" element={<Projects />}></Route>
    <Route exact path="/contact" element={<Contact />}></Route>
  </Routes>
    
  )
}

export default AnimatedRoutes