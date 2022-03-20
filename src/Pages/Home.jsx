import React from 'react'
import About from '../components/about/About'
import HeroSection from '../components/hero/HeroSection'
import Services from '../components/services/Services'

function Home() {
  return (
    <>
    <HeroSection/>
    <About />
    <Services />
    </>
  )
}

export default Home