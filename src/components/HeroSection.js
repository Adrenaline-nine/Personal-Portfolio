import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import '../style.css';

const HeroStyles = styled.div`
position: relative;
right: 0;
width: 100%;
margin: 0;
height: 100vh;
  .hero {
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    font-size: 5vw;

      }
    .hero__name {
      font-size: 5vw;
      display: inline-block;
      margin-bottom: 2vh;
    }
  }
  .hero__img {
    width: 100%;
    height: 30vh;
    border: 1px solid var(--black);
    font-size: 13vw;
    display: inline-block;
    margin: auto;

    .img_text {
    margin: 7vh auto;
    }
  }
  .hero__info {
    .info_text {
      font-family: Courier, 'Times New Roman', Times, serif;
      display: inline-block;
      margin: 2vh auto;
    }
    .button {
      display: inline-block;
      width: 50%;
      font-weight: 300;
      font-size: 6vw;
      padding: 1vh;
      margin: 5vh auto;
    }
  }
  }
`;

const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = 'Hi, Good Morning!';
} else if (time < 16) {
  greeting = 'Hi, Good Afternoon!';
} else if (time < 21) {
  greeting = 'Hello, Good Evening!';
} else {
  greeting = 'Hello, Good Night!';
}

const Greet = () => greeting;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1>
            <span className="hero__name">
              <Greet />
            </span>
          </h1>
          <div className="hero__img">
            <div className="img_text">
              <p className="adr">Adrenaline</p>
              <p className="nine">Nine</p>
            </div>
          </div>
          <div className="hero__info">
            <p className="info_text">
              I am working as a freelance web designer and developer for more
              than 4 years. I love to design and make new web experiences.
            </p>
            <Button className="button" btnText="Projects" btnLink="/projects" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
