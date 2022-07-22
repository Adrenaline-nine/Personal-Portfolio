import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import Adrenaline from '../assets/images/Adrenaline';
import SectionTitle from './SectionTitle';
import '../style.css';

const AboutSectionStyles = styled.div`
  padding: 1rem 0;
  .containers {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .container_wrapper {
    width: 85%;
    margin: auto;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  
  .para {        
    margin-top: 5rem;
    margin-left: 0;
  }
  .aboutimg_text {
    font-size: 4.5rem;
  }
  .aboutSection__buttons {
    width: 90%;
    margin: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .containers {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <SectionTitle subheading="Let me introduce myself" heading="About Me" />
        <div className="container_wrapper">
          <div className="containers">
            <div className="aboutSection__left">
              <PText>
                I am a freelance website designer and developer. I create
                professional websites and always try to show unique views to the
                audience through my design...
              </PText>
              <div className="aboutSection__buttons">
                <Button btnText="Read More" btnLink="/about" outline />
              </div>
            </div>
            <div className="aboutSection__right">
              <div className="aboutimg_text">
                <Adrenaline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
