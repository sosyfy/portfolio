import React from 'react';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutPage/AboutInfoItem'
import ContactBanner from '../components/contact/ContactBanner';
import sospeter from '../assets/images/aboutme.jpg'
import resume from '../assets/images/sospeters-resume.pdf'
import { motion } from 'framer-motion'




const AboutPageStyles = styled.div`
  padding: 10rem 0 10rem 0;
  overflow:hidden;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 3;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
      color: cyan ;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.05, 1] }} exit={{ scale: 0 }} transition={{ duration: 0.5, type: "spring" }}>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Sospeter Karanja</span>
              </p>
              <h2 className="about__heading">A Front-End Web Developer</h2>
              <div className="about__info">
                <p
                  className="ptext"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                 I have been working as a Front End Web Developer for the past three years, and during that time I have developed a strong understanding of the latest technologies and trends in the industry. I am well-versed in using HTML, CSS, and JavaScript, and I have experience with popular frameworks such as React Js and React Native. I am also familiar with using various content management systems, such as WordPress and Shopify.
                  <br /> <br />
                  I am a motivated and creative individual who is always looking for new ways to improve my skills. I am passionate about web development and enjoy working on projects that challenge me to think outside the box. I am confident that I have the skills and drive to be a valuable member of any team.
                  <br />
                  <br />
                  I stay updated on all the latest trends and developments associated with this industry and I have the knowledge to apply this information where appropriate. I also have the ability to adhere to all standards, rules and coding standards set forth by management.
                </p>
              </div>
              <a download href={resume} className="download-button">
                Download Resume{" "}
              </a>
            </div>
            <div
              className="right"
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img src={sospeter} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="University"
                items={["Multimedia University of Kenya - Bachelor of Software Engineering"]}
              />
              <AboutInfoItem title="Other" items={["Udemy and Scrimba - Frontend and web dev courses"]} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  "React Js",
                  "JavaScript",
                  "React Native",
                  "HTML",
                  "CSS",
                  "Tailwind Css",
                  "Bootstrap",
                  "Sass",
                ]}
              />
              <AboutInfoItem title="BackEnd" items={["Node", "Express", "Firebase"]} />
              <AboutInfoItem
                title="Design"
                items={["Photoshop", "After Effects", "Figma"]}
              />
              <AboutInfoItem title="Databases" items={["Mongo db", "mySql"]} />
              <AboutInfoItem title="Tools" items={["Git", "Github", "Netlify", "Vs Code "]} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem title="2020-2021" items={["Freelance developer "]} />

              <AboutInfoItem
                title="2022 - present "
                items={["Junior Web Developer"]}
              />
            </div>
          </div>
        </div>
        <ContactBanner t="Have a project in mind" b="Let me help you" ln="Contact me" l="contact"/>
      </AboutPageStyles>
    </motion.div>
  );
}


// You can also pass an optional settings object
// below listed default settings
