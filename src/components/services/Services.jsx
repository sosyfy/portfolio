import React from 'react'
import './Services.css'
import Title from '../Title'
import ServicesSection from '../ServicesSection'
import {MdDesktopMac,MdCode,MdPhonelinkSetup} from 'react-icons/md'


function Services() {
  return (
<div className="services">
  <h2>What i will do for you</h2>
 <Title titleTop='my services' titleBack='services' />
 <div className="container">
   <ServicesSection 
   icon = {<MdDesktopMac/>} 
   title="Web Design"
    text="I do UI/UX design for your website that helps website to get a unique and elegant look. "/>
   <ServicesSection 
   icon={MdCode}
   title="Web Development" 
   text="I also develop websites.I create responsive  high performance websites with blazing fast speeds. "/> 
   <ServicesSection 
   icon={MdPhonelinkSetup}
   title="Bug Fixes" text="I can fix responsive design issues on your website and any UI related bugs. "/>
 </div>

</div> 

)
}

export default Services