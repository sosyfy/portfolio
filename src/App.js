import React, { useEffect } from 'react';
import NavMenu from './components/nav/NavMenu';
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './components/ScrollToTop';
import AnimatedRoutes from './AnimatedRoutes';




export default function App() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavMenu />
          <AnimatedRoutes />
        <Footer />
        
      </Router>
    </>
  );
}