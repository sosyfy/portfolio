import React from 'react'
import styled from 'styled-components'

const Service =styled.div`
    dispay:flex;
    flex-direction: column;
    text-align: center;
    gap:10rem;

.service-title h2{
  font-size: 2.5rem;
  font-family: 'montserrat ';
  color: cyan;
}
.service-text {
   padding: 1rem;
   margin-top: 2rem;
   line-height: 2rem;
   font-size: 1.3rem;
}
.service-icon svg {
    width: 3rem;
}
@media screen and (max-width: 768px){
    padding: 0;
    .service-title {
        font-size: 1rem ;
    }
    .service-text {
        padding:0;
    }

}

`
function ServicesSection({icon, title , text}) {
  return (
    <Service data-aos="zoom-in-up" data-aos-duration="2000">
      <div className="service-icon">{icon}</div>
      <div className="service-title">
        <h2>{title}</h2>
      </div>
      <div className="service-text">
        <p> {text} </p>
      </div>
    </Service>
  );
}

export default ServicesSection