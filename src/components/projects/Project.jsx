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
          <h2 className="project-title"> RESUME GEN</h2>
          <h3 className="project-subtitle">Resume Builder </h3>
          <p className="project-description ptext">
            A web application that allows users to create and customize professional resumes in a simple and efficient manner. Built with React, the application utilizes the power of Tailwind CSS for styling and Zustand for state management. The end result can be downloaded in both PDF and Print format.
          </p>
          <div className="technologies">
            <div className="item">
              <p>REACT JS</p>
            </div>
            <div className="item">
              <p>ZUSTAND</p>
            </div>
            <div className="item">
              <p>TAILWIND CSS</p>
            </div>

          </div>
          <div className="project-buttons">
            <a
              href="https://github.com/sosyfy/tesla-clone"
              target=" _blank"
              className="download-button github"
            >
              Github
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
          <h2 className="project-title"> WHATSAPP.COM </h2>
          <h3 className="project-subtitle">Clone Website</h3>
          <p className="project-description ptext">
            This project is a clone of the WhatsApp.com landing page, built with React and Tailwind CSS. It is a static web page that closely mimics the design and layout of the original WhatsApp website.
            It is a static web page that closely mimics the design and layout of the original WhatsApp website.
          </p>
          <div className="technologies">
            <div className="item">
              <p>REACT JS</p>
            </div>
            <div className="item">
              <p>TAILWIND CSS</p>
            </div>

          </div>
          <div className="project-buttons">
            <a
              href="https://github.com/sosyfy/whatsapp-clone"
              target=" _blank"
              className="download-button github"
            >
              Github
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
            This Clothing Website is a dynamic and responsive web application that allows users to browse and purchase clothing items.
            e website features a clean and visually pleasing design, easy navigation, and various interactive elements
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
              Github
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
            <img src="https://media.sproutsocial.com/uploads/2022/09/Instagram-Templates.svg" alt="" />
          </div>
        </div>
        <div className="right-side">
          <h2 className="project-title"> INSTABOT </h2>
          <h3 className="project-subtitle">Instagram Autopost Bot</h3>
          <p className="project-description ptext">
            The Instagram Bot is a tool that allows users to automatically repost content from Instagram on their own account. It works by scraping posts from a specified Instagram user or hashtag and then reposting them on a schedule using a cron job.
          </p>
          <div className="technologies">
            <div className="item">
              <p>NODE JS </p>
            </div>
            <div className="item">
              <p>EXPRESS JS</p>
            </div>
            <div className="item">
              <p>JAVASCSRIPT</p>
            </div>
          </div>
          <div className="project-buttons">
            <a
              href="https://github.com/sosyfy/instabot"
              target=" _blank"
              className="download-button github"
            >
              github
            </a>

          </div>
        </div>
      </div>
      <div className="project" data-aos="fade-up">
        <div className="left-side">
          <div className="project-img">
            <img src="https://codersera.com/blog/wp-content/uploads/2019/06/What-is-an-API.png" alt="" />
          </div>
        </div>
        <div className="right-side">
          <h2 className="project-title"> E-COMMERCE API</h2>
          <h3 className="project-subtitle">Rest API</h3>
          <p className="project-description ptext">
            This E-Commerce API is a flexible and powerful tool for building e-commerce websites and applications.
            The API offers a wide range of endpoints for various e-commerce functionalities such as product management, customer authentication, and order processing.
          </p>
          <div className="technologies">
            <div className="item">
              <p>NODE JS </p>
            </div>
            <div className="item">
              <p>EXPRESS JS</p>
            </div>
            <div className="item">
              <p>MONGO DB</p>
            </div>
          </div>
          <div className="project-buttons">
            <a
              href="https://github.com/sosyfy/e-commerce-rest-api"
              target=" _blank"
              className="download-button github"
            >
              github
            </a>

          </div>
        </div>
      </div>
      <div className="project" data-aos="fade-up">
        <div className="left-side">
          <div className="project-img">
            <img src="https://cdn.c-zentrix.com/blog-images/whatsapp-bot-for-customer-service.jpeg" alt="" />
          </div>
        </div>
        <div className="right-side">
          <h2 className="project-title"> WHATS_BOT </h2>
          <h3 className="project-subtitle">WhatsApp User Bot</h3>
          <p className="project-description ptext">
            A WhatsApp user bot built with Node.js for automating messaging and providing custom commands for users and also performing administrative actions such as adding and blocking users.
          </p>
          <div className="technologies">
            <div className="item">
              <p>NODE JS </p>
            </div>
            <div className="item">
              <p>JAVASCSRIPT</p>
            </div>
          </div>
          <div className="project-buttons">
            <a
              href="https://github.com/sosyfy/whatsapp-bot"
              target=" _blank"
              className="download-button github"
            >
              Github
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
