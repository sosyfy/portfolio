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
          Lorem ipsum dolor sit,
           amet consectetur adipisicing elit. 
           Porro facilis placeat neque harum recusandae nesc
           iunt ab repellat error, magnam est?
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
        <h2 className="slogan">Freelance Frontend Developer</h2>
        <p className="right-text">
          Lorem ipsum dolor sit amet consectetur a
        dipisicing elit. Tempore consectetur eaque aperiam voluptate iusto e
        xercitationem eum laudantium reiciendis. Porro velit, laboriosam obcae
        cati facilis enim alias magni dolore pariatur minima nesciunt.
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