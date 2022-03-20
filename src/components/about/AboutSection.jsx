import React from 'react'
import Title from '../Title'
import Button from '../Button'
import './About.css'
import sospeter from '../../assets/images/sospeter.jpg'

function About() {
  return (
<div class="about" id="about">
    <Title titleTop="about me" titleBack='about'/> 
    <div className="container">
      <div className="left">
      <div className="card">
        <div className="card-image">
          <img src={sospeter} alt="sospeter" />
        </div>
        <p className='card-description'>
         A freelance web designer and developer from Nairobi, Kenya. I always make websites that have unique designs and also has a good performance rate.
        </p>
        <h3 className="card-name">
          Sopeter
        </h3>
        <p className="card-subtitle">
          Fronted web developer
        </p>
      </div>
      </div>

      <div className="right-div">
        <p className="sub-heading">Hi, This is Sospeter</p>
        <h2 className="slogan">Freelance Web Developer</h2>
        <p className="right-text">
         
My vision is to make the world a better place. Now almost everything is becoming better than ever.
 It is time for us to create more good stuff that helps the world to become a better place.
        </p>
        <div className="buttons">
          <a  download href={sospeter} className='download-button'>Download Resume </a>
   
          <Button btnLink="/about" btnText="More Info" outline={true} />
  
          
        </div>
      </div>
      </div>  
</div>
  )
}

export default About