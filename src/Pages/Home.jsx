import React from 'react'
import About from '../components/about/About'
import ContactBanner from '../components/contact/ContactBanner'
import HeroSection from '../components/hero/HeroSection'
import Services from '../components/services/Services'

function Home() {
  return (
    <>
    <HeroSection/>
    <About />
    <Services />
    <ContactBanner />
    </>
  )
}

export default Home