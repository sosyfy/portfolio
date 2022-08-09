import React from 'react'
import Title from '../Title'
import Button from '../Button'
import './About.css'
import sospeter from '../../assets/images/avatar3.jpg'
import resume from "../../assets/images/sospeters-resume.pdf";


function About() {
  return (
    <div class="about" id="about">
      <Title titleTop="about me" titleBack="about" />
      <div className="container">
        <div className="left">
          <div
            className="card"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="card-image">
              <img src={sospeter} alt="sospeter" />
            </div>
            <p className="card-description">
            Front-End Developer with proven experience in helping companies create and maintain a better code base for reusability. Passionate about learning and development with a desire to apply skills on a larger development team.
            </p>
            <h3 className="card-name">Sopeter</h3>
            <p className="card-subtitle">Fronted web developer</p>
          </div>
        </div>

        <div className="right-div">
          <p className="sub-heading">Hi, This is Sospeter</p>
          <h2 className="slogan">Front-End Web Developer</h2>
          <p className="right-text" data-aos="fade-left">
          I have been working as a Front End Web Developer for the past three years and during that time I have developed a strong understanding of the latest technologies and trends in the industry. 
          </p>
          <div className="buttons">
            <a download href={resume} className="download-button">
              Download Resume 
            </a>

            <Button btnLink="/about" btnText="About Me ..." outline={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About