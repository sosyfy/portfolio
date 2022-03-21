import React from 'react'
import Title from '../Title'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section>
      <Title titleBack="experience" titleTop="my experience" />
      <div className="container experience">
        <div
          className="frontend"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2>Frontend Development</h2>
          <div className="experience-content">
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>Sass</h4>
                <small>Junior</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div
          className="backend"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2>Backend Development</h2>
          <div className="experience-content">
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>Node Js</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>Express</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>Mongo DB</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>MySQl</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience