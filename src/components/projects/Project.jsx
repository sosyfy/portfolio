import React from "react";
import "./Project.css";
import furn from "../../assets/images/project2.jpg";
import criba from "../../assets/images/project1.jpg";
import cara from "../../assets/images/project4.jpg";
import tesla from "../../assets/images/tesla.jfif"
import whatsapp from "../../assets/images/whatsapp.png"

function Project() {
  return (
    <div>
      <div className="project" data-aos="fade-up">
        <div className="left-side">
          <div className="project-img">
            <img src={tesla} alt="" />
          </div>
        </div>
        <div className="right-side">
          <h2 className="project-title"> Tesla </h2>
          <h3 className="project-subtitle">Clone Website</h3>
          <p className="project-description ptext">
            This is a replica of the Tesla's landing page website.Built in React js and styled components,
            the website is fully responsive with features such as routing and conditional rendering.
          </p>
          <div className="technologies">
            <div className="item">
              <p>REACT JS</p>
            </div>
            <div className="item">
              <p>STYLED COMPONENTS</p>
            </div>
            <div className="item">
              <p>CSS</p>
            </div>
          
          </div>
          <div className="project-buttons">
            <a
              href="https://github.com/sosyfy/tesla-clone"
              target=" _blank"
              className="download-button github"
            >
              github
            </a>
            <a
              href="https://tesla-clone-sos.netlify.app/"
              target=" _blank"
              className="download-button preview"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
      <div className="project" data-aos="fade-up">
        <div className="left-side">
          <div className="project-img">
            <img src={whatsapp} alt="" />
          </div>
        </div>
        <div className="right-side">
          <h2 className="project-title"> WhatsApp </h2>
          <h3 className="project-subtitle">Clone Website</h3>
          <p className="project-description ptext">
            This is a replica of the WhatsApp.com website.Built in React js and Tailwind Css,
            the website is pixel perfect and almost similar to the original one.
          </p>
          <div className="technologies">
            <div className="item">
              <p>REACT JS</p>
            </div>
            <div className="item">
              <p>Tailwind Css</p>
            </div>
          
          </div>
          <div className="project-buttons">
            <a
              href="https://github.com/sosyfy/whatsapp-clone"
              target=" _blank"
              className="download-button github"
            >
              github
            </a>
            <a
              href="https://whatsapp-clone-by-sos.netlify.app/"
              target=" _blank"
              className="download-button preview"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
      <div className="project" data-aos="fade-up">
        <div className="left-side">
          <div className="project-img">
            <img src={cara} alt="" />
          </div>
        </div>
        <div className="right-side">
          <h2 className="project-title"> CARA </h2>
          <h3 className="project-subtitle">Ecommerce Website</h3>
          <p className="project-description ptext">
            Cara is a clothing Ecommerce website. I implemented basic routing in
            JavaScript and also dynamic data change. The site has cool
            animations and is fully responsive.
          </p>
          <div className="technologies">
            <div className="item">
              <p>HTML</p>
            </div>
            <div className="item">
              <p>CSS</p>
            </div>
            <div className="item">
              <p>JavaScript</p>
            </div>
          </div>
          <div className="project-buttons">
            <a
              href="https://github.com/sosyfy/commerce-web"
              target=" _blank"
              className="download-button github"
            >
              github
            </a>
            <a
              href="https://sosyfy.github.io/commerce-web/"
              target=" _blank"
              className="download-button preview"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
      <div className="project" data-aos="fade-up">
        <div className="left-side">
          <div className="project-img">
            <img src={criba} alt="" />
          </div>
        </div>
        <div className="right-side">
          <h2 className="project-title"> CRIBA </h2>
          <h3 className="project-subtitle">Crypto Website</h3>
          <p className="project-description ptext">
            Criba is a Cryptocurrency market price change check website. All
            data comes from an external Api. The website is fully responsive and
            components update when the data changes.
          </p>
          <div className="technologies">
            <div className="item">
              <p>CSS</p>
            </div>
            <div className="item">
              <p>REACT JS</p>
            </div>
          </div>
          <div className="project-buttons">
            <a
              href="https://github.com/sosyfy/criba-crypto-web"
              target=" _blank"
              className="download-button github"
            >
              github
            </a>
            <a
              href="https://criba.netlify.app"
              target=" _blank"
              className="download-button preview"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
      <div className="project" data-aos="fade-up">
        <div className="left-side">
          <div className="project-img">
            <img src={furn} alt="" />
          </div>
        </div>
        <div className="right-side">
          <h2 className="project-title"> FURN. </h2>
          <h3 className="project-subtitle">Furniture Website</h3>
          <p className="project-description ptext">
            Furn is a mordern furniture store landing page that displays all
            important andhot products of a website.It is optimized to look great
            for all devices you have.
          </p>
          <div className="technologies">
            <div className="item">
              <p>HTML</p>
            </div>
            <div className="item">
              <p>SASS</p>
            </div>
            <div className="item">
              <p>JAVASCSRIPT</p>
            </div>
          </div>
          <div className="project-buttons">
            <a
              href="https://github.com/sosyfy/responsive-furniture-website"
              target=" _blank"
              className="download-button github"
            >
              github
            </a>
            <a
              href="https://furn-website.netlify.app/"
              target=" _blank"
              className="download-button preview"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
