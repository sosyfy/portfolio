import React from 'react'
import './Project.css'
import UTrackerImg from '../../assets/images/utracker.jpg';

function Project() {
  return (
    <div className="project" data-aos="fade-up">
      <div className="left-side">
        <div className="project-img">
          <img src={UTrackerImg} alt="" />
        </div>
      </div>
      <div className="right-side">
        <h2 className="project-title">hello this is my first </h2>
        <h3 className="project-subtitle">her fkkfkf</h3>
        <p className="project-description ptext">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          labore maxime error asperiores reiciendis doloremque dolor animi
          officiis, ullam vero!
        </p>
        <div className="technologies">
          <div className="item">
            <p>html</p>
          </div>
        </div>
        <div className="project-buttons">
          <a href=" " className="download-button github">
            {" "}
            Github{" "}
          </a>
          <a href=" " className="download-button preview">
            Preview
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project