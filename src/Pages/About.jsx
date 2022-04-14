import React from 'react';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutPage/AboutInfoItem'
import ContactBanner from '../components/contact/ContactBanner';
import sospeter from '../assets/images/aboutme.jpg'
import resume from '../assets/images/Resume.pdf'





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
    flex: 2;
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
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Sospeter Karanja</span>
              </p>
              <h2 className="about__heading">A freelance Web developer</h2>
              <div className="about__info">
                <p
                  className="ptext"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  I am from Nairobi, Kenya. A place of beauty and nature. Since
                  my childhood, i love art and design. I always try to design
                  stuff with my unique point of view. I also love to create
                  things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
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
                items={["Multimedia University of Kenya"]}
              />
              <AboutInfoItem title="Other" items={["Udemy and Scrimba"]} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  "HTML",
                  "CSS",
                  "Bootstrap",
                  "Sass",
                  "JavaScript",
                  "REACT",
                ]}
              />
              <AboutInfoItem title="BackEnd" items={["Node", "Express"]} />
              <AboutInfoItem
                title="Design"
                items={["Photoshop", "After Effects", "Figma"]}
              />
              <AboutInfoItem title="Databases" items={["Mongo db", "mySql"]} />
              <AboutInfoItem title="Tools" items={["Git" ,"Github","Netlify" , "Vs Code "]} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem title="2020-2021" items={["junior developer "]} />

              <AboutInfoItem
                title="2021-"
                items={["Freelance web Developer"]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}


// You can also pass an optional settings object
// below listed default settings
