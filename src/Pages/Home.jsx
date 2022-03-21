import React from 'react'
import AboutSection from '../components/about/AboutSection'
import ContactBanner from '../components/contact/ContactBanner'
import Experience from '../components/experience/Experience'
import HeroSection from '../components/hero/HeroSection'
import Services from '../components/services/Services'

function Home() {
  return (
    <div style={{width: '100vw'}}>
    <HeroSection/>
    <AboutSection />
    <Services />
    <Experience />
    <ContactBanner />
    </div>
  )
}

export default Home