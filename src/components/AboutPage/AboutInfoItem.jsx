import React from 'react';
import styled from 'styled-components';
import {motion } from 'framer-motion'


const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
       color: cyan;

  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <motion.div  initial={{ scale : 0 , opacity: 0 }}
          animate={{ scale: [0,1.3,1] , opacity: [0,1] }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.7, delay : index , type:"spring" }} className="item" key={index}>
            <p>{item}</p>
          </motion.div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
