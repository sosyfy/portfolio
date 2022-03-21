import React from 'react'
import './HeroSection.css'
import HeroImg from '../../assets/images/sospeter.jpg'
import Button from '../Button'
import socialArrow from '../../assets/images/social-media-arrow.svg'
import {FiFacebook ,FiTwitter,FiInstagram,FiLinkedin} from 'react-icons/fi'
import AOS from "aos";
import "aos/dist/aos.css";


function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello, This is</span>
          <span className="name">Sospeter Karanja</span>
        </h1>
        <div className="hero__img" >
          <img src={HeroImg} alt="sospeter" />
        </div>
        <div className="hero__info">
          <p>
            I am a Freelance Web Developer for 1 year. I love to build and
            develop new web experiences for people.
          </p>
          <Button btnLink="/projects" btnText="see my works" outline={false} />
        </div>
        <div className="hero__socials" data-aos="fade-right">
          <div className="hero__social_indicator">
            <p>follow</p>
            <img src={socialArrow} alt="" />
          </div>
          <div className="hero_social_text">
            <ul>
              <li>
                <a
                  href="https://web.facebook.com/sosyfyed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/sosyfyed"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sosyfyed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sospeter-karanja-a636b6230/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero_scroll_down" data-aos="fade-left">
          <p>scroll</p>
          <img src={socialArrow} alt="" />
        </div>
      </div>
    </div>
  );
}

AOS.init();
export default HeroSection