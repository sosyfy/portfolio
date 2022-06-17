import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { Routes , Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion"


function AnimatedRoutes() {
    const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
    <Routes location={location} key={location.pathname} >
    <Route path="/" element={<Home />}></Route>
    <Route exact path="/about" element={<About />}></Route>
    <Route exact path="/projects" element={<Projects />}></Route>
    <Route exact path="/contact" element={<Contact />}></Route>
  </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes