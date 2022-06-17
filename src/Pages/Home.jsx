import React from 'react'
import AboutSection from '../components/about/AboutSection'
import ContactBanner from '../components/contact/ContactBanner'
import Experience from '../components/experience/Experience'
import HeroSection from '../components/hero/HeroSection'
import Services from '../components/services/Services'
import { motion } from "framer-motion";


function Home() {
  
  return (
    <motion.div     initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0 }}
    transition={{ duration: 0.5 ,type: "spring" }}>
    <HeroSection/>
    <AboutSection />
    <Services />
    <Experience />
    <ContactBanner />
    </motion.div>
  )
}

export default Home