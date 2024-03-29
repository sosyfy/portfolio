import React from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import {  FiLinkedin ,FiGithub } from 'react-icons/fi';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import Title from '../Title';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  overflow:hidden ;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <Title titleTop='get in touch' titleBack='contact' />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<FiGithub />} text="https://github.com/sosyfy" />
            <ContactInfoItem icon={<MdEmail />} text="sospeterkaranja02@gmail.com" />
            <ContactInfoItem icon={<FiLinkedin/>} text="https://www.linkedin.com/in/sosyfy" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
