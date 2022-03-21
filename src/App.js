import React from 'react';
import NavMenu from './components/nav/NavMenu';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './components/footer/Footer';


export default function App() {
  return (
    <>
    <Router>  
     <NavMenu />
    <Routes>
      
      <Route path='/' element={<Home/ >} ></Route>
      <Route exact path='/about' element={<About/ >} ></Route>
      <Route exact path='/projects' element={<Projects/ >} ></Route>
      <Route exact path='/contact' element={<Contact/ >} ></Route>

    </Routes>
    <Footer/>
    </Router>
    </>
  );
}