import React from 'react'
import Title from '../Title'
import Button from '../Button'
import './About.css'
import sospeter from '../../assets/images/avatar3.jpg'
import resume from "../../assets/images/updatedResume.pdf";


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
            As a full-stack developer with over 3 years of experience in the tech industry, I have a strong background in building and maintaining web applications using React, Next.js, Node, Javascript and Express.My expertise in these technologies, combined with my passion for developing intuitive and user-friendly interfaces, has allowed me to deliver high-quality projects on time and within budget.With hands-on project experience building both the front-end and back-end of web applications using JavaScript and technologies such as React.js, Express.js, Node.js, Redux, MySQL, and MongoDB. 
            </p>
            <h3 className="card-name">Sospeter</h3>
            {/* <p className="card-subtitle">Fronted web developer</p> */}
          </div>
        </div>

        <div className="right-div">
          {/* <p className="sub-heading">Hi, This is Sospeter</p> */}
          <h2 className="slogan">Web Developer</h2>
          <p className="right-text" data-aos="fade-left">
          I am excited to connect with other professionals in the tech industry and explore new opportunities for growth and development. Whether it's working on challenging projects or learning new skills, I am always looking for ways to take my career to the next level and make a positive impact on the projects I work on. 
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