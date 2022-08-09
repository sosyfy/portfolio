import React from 'react'
import AboutSection from '../components/about/AboutSection'
import ContactBanner from '../components/contact/ContactBanner'
import Experience from '../components/experience/Experience'
import HeroSection from '../components/hero/HeroSection'
import Services from '../components/services/Services'


function Home() {
  
  return (
    <div 
  >
    <HeroSection/>
    <AboutSection />
    <Services />
    <Experience />
    <ContactBanner  titleTop="Projects" ln="All my projects --> " l="projects" img="present"/>
    <ContactBanner t="Have a project in mind" b="Let me help you" ln="Contact me" l="contact"/>
    </div>
  )
}

export default Home