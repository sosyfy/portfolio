import React from 'react'
import Title from '../Title'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Experience() {

  const frontend = [
    "React Js" , 
    "JavaScript",
    "React Native",
    "HTML",
    "CSS",
    "Bootstrap",
    "Sass",
    "Tailwind css",
  ]
  
  const backend = [
    "Node Js" , 
    "Express Js",
    "Mongo Db",
    "Firebase",
    "MySQL",
  ]
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
            {frontend?.map((item)=>(
              <article className="details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>{item}</h4>
              </div>
            </article>
            ))}
          
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
          {backend?.map((item)=>(
              <article className="details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>{item}</h4>
              </div>
            </article>
            ))}
         
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience