import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { variants } from '../Components/Animate';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, type: 'spring' }}
    >
      <div className="text-container">
        <h1>About us</h1>
        <p>
          &#8211; Hi, i am subramanian, a freelance colorist, i have worked as a
          colorist in shortfilms, commercials, music videos, documentaries and
          much more.
          <br /> &#8211; I have been working in fiverr and other freelancing
          platforms for more than a year now, and there had the entitlement on
          working in many different types of projects.
          <br />
          &#8211; so if you are looking for colorist for your projects,Don't
          hesitate to contact me with the details about your project
        </p>
        <div className="buttons">
          <a
            href="https://www.fiverr.com/subramanian007/do-video-editing-in-davinci-resolve-16"
            id="fiverr"
            target="_blank"
            rel="noreferrer"
          >
            Fiverr
          </a>
          <Link id="contact" to="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 90vh;
  position: relative;

  @media only screen and (max-width: 650px) {
    height: 80vh;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../images/About.jpg');
    background-position: center;
    background-size: cover;
    filter: blur(3px);
    opacity: 50%;
  }

  .text-container {
    position: relative;
    padding: 18rem 10rem;

    .buttons {
      display: flex;
      justify-content: center;
      #fiverr {
        margin-right: 4rem;
        padding: 1rem 2rem;
        display: inline-block;
        background: #19a463;
        border-radius: 1rem;
        color: white;
        transition: background 0.2s ease-in;

        :hover {
          background: #15c372;
        }
      }

      #contact {
        padding: 1rem 2rem;
        display: inline-block;
        background: #d39810;
        border-radius: 1rem;
        color: white;
        transition: background 0.2s ease-in;

        :hover {
          background: #f1ab07;
        }
      }
    }

    @media only screen and (max-width: 650px) {
      padding: 14rem 5rem;
    }

    @media only screen and (max-width: 1100px) {
      padding: 7rem 5rem;
    }

    @media only screen and (max-width: 800px) {
      padding: 0rem 5rem;
    }

    @media only screen and (max-width: 500px) {
      padding: 10rem 4rem;
    }

    z-index: 99;
    h1 {
      text-align: center;
      text-transform: uppercase;
      font-family: 'Gemunu Libre', sans-serif;

      font-size: 6.5rem;
      margin: 2rem 0rem;

      @media only screen and (max-width: 500px) {
        font-size: 4rem;
        margin: 1rem 0rem;
      }

      @media only screen and (max-width: 650px) {
        font-size: 5rem;
        margin: 1rem 0rem;
      }
    }

    p {
      font-size: 3.5rem;
      filter: drop-shadow(3px 3px 8px #020202);
      line-height: 5.5rem;

      @media only screen and (max-width: 650px) {
        font-size: 2rem;
        margin: 1rem 0rem;
      }

      @media only screen and (max-width: 420px) {
        font-size: 1.5rem;
        margin: 1rem 0rem;
        font-weight: bolder;
      }
    }
  }
`;
