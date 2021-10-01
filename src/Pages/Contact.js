import React from 'react';
import styled from 'styled-components';
import { variants } from '../Components/Animate';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, type: 'spring' }}
    >
      <div className="full-form">
        <h1>Contact us</h1>

        <form action="https://formspree.io/f/xdoybqae" method="POST">
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-container">
            <label htmlFor="budget">Budget:</label>
            <input type="text" id="budget" name="budget" />
          </div>
          <div className="input-container">
            <label htmlFor="desc">Desc:</label>
            <textarea id="desc" cols="30" rows="10" name="desc"></textarea>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 90vh;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../images/Contact.jpg');
    background-position: center;
    background-size: cover;
    filter: blur(4px);
  }

  .full-form {
    position: relative;
    z-index: 99;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-family: 'Gemunu Libre', sans-serif;
      text-align: center;
      text-transform: uppercase;
      font-size: 5rem;
      color: black;
    }

    form {
      color: white;
      margin: 5rem auto;
      width: 70%;
      .input-container {
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 4rem;

        label {
          font-size: 3.5rem;
          margin-right: 5rem;
          align-self: center;
          width: 30%;
          font-weight: bold;
          color: black;
        }
        input {
          width: 60%;
          padding: 1rem 2rem;
          border-radius: 1rem;
          border: none;
        }
        textarea {
          width: 60%;
          padding: 2rem 2rem;
          border-radius: 1rem;
          border: none;
        }
      }
      button {
        display: block;
        padding: 1.5rem 1.5rem;
        background: #d39810;
        border-radius: 1rem;
        border: none;
        font-size: 2.5rem;
        text-transform: uppercase;
        color: white;
        margin: 5rem auto;
      }
    }
  }
`;
