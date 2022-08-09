import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Title from '../Title';
import img from "../../assets/images/52_MjExMC53MDA5Lm4wMDEuNDnQoS5wNi40OQ.jpg"

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
    position: relative;
  }
   .contactBanner__heading1{
     color:cyan;
   }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner(props) {
  return (
    <ContactBannerStyles>
      <div className="container"  >
        <Title titleTop={props.titleTop} titleBack={props.titleTop}/>
        <div className="contactBanner__wrapper" backgroundImage = {`url(${img})`} >
          <div className='beat'>
           {props.img &&  <img src={img} alt="" />}
          </div>
          <h2 className='contactBanner__heading1'>{props.t}</h2>
          <h3 className="contactBanner__heading">{props.b}</h3>
          <Button btnText={props.ln} btnLink={props.l} />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
