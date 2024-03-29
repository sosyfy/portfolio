import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  overflow: hidden;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col1 p {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <FooterStyle data-aos="fade-up">
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Sospeter Karanja</h1>
          <div>
            <p className="ptext">
            I design and establish interactive & dynamic websites that guarantee high traffic, page views, maximum user experience and subsequently increase company sales.
           <br />
            What Can I Do For You?
            </p>
            <br />
            <h2>Email me at <span style={{color : "cyan"}}>sospeterkaranja02@gmail.com</span> </h2>
            <br />
          </div>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "About",
                path: "/about",
              },
              {
                type: "Link",
                title: "Projects",
                path: "/projects",
              },
              {
                type: "Link",
                title: "Contact",
                path: "/contact",
              },
            ]}
          />
        </div>
     
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: "Facebook",
                path: "http://facebook.com/sosyfyed/",
              },
              {
                title: "Twitter",
                path: "http://twitter.com/sosyfyed/",
              },
              {
                title: "Instagram",
                path: "http://instagram.com/sosyfyed/",
              },
              {
                title: "Github",
                path: "https://github.com/sosyfy",
              },
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/sospeter-karanja-a636b6230",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div>
            © {year} - Sospeter Karanja | Designed By{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://focus-sos.netlify.com"
            >
              Sospeter
            </a>{" "}
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
