import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { variants } from '../Components/Animate';

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          molestias laboriosam voluptatem sed modi itaque amet illum impedit,
          ratione, aspernatur praesentium possimus delectus deleniti blanditiis
          ipsum harum! Doloribus quia voluptatibus fuga incidunt sint id
          necessitatibus dolorem atque beatae nisi labore eveniet accusamus cum,
          unde ex eaque odit, suscipit ratione tempora ipsam sed autem earum
          tenetur! Unde optio cupiditate, harum error voluptates pariatur
          dolorem alias eligendi eum maiores minima quos sunt vel sapiente.
          Temporibus facilis earum delectus eos perspiciatis? Eveniet fugit
          perferendis ipsum
        </p>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 90vh;
  position: relative;

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
    filter: blur(10px);
  }

  .text-container {
    position: relative;
    padding: 22rem 10rem;

    z-index: 999;
    h1 {
      text-align: center;
      text-transform: uppercase;
      font-family: 'Gemunu Libre', sans-serif;

      font-size: 6.5rem;
      margin: 2rem 0rem;
    }

    p {
      font-size: 3.5rem;
      text-align: center;
    }
  }
`;
