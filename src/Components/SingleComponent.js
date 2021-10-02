import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { data } from './Data';
import { homeVariants } from './Animate';
import { motion } from 'framer-motion';

const SingleComponent = () => {
  const { id } = useParams();
  const { img, title, content, otherImg } = data[id - 1];
  const otherImages = Object.values(otherImg);
  console.log(otherImages);
  return (
    <Wrapper initial="hidden" animate="visible" variants={homeVariants}>
      <img src={img} alt={id} />
      <motion.div
        className="text"
        initial="hidden"
        animate="visible"
        variants={homeVariants}
      >
        <h1>{title}</h1>
        <p>{content}</p>
      </motion.div>
      <div className="additional-images">
        {otherImages.map((image, id) => {
          return <img src={image} alt="" key={id} />;
        })}
      </div>
      <div className="contact">
        <h2>Having Any Queries</h2>
        <Link to="/contact"> Contact Us </Link>
      </div>
    </Wrapper>
  );
};

export default SingleComponent;

const Wrapper = styled(motion.div)`
  img {
    width: 100%;
    height: 100vh;
    position: relative;
    object-fit: cover;

    @media only screen and (max-width: 500px) {
      height: 90vh;
    }
  }

  .text {
    padding: 0rem 3rem;
    h1 {
      text-transform: uppercase;
      font-size: 6rem;
      font-family: 'Gemunu Libre', sans-serif;
      position: absolute;
      bottom: 0;
      left: 4rem;

      @media only screen and (max-width: 500px) {
        left: auto;
        bottom: -1rem;
        font-size: 4rem;
      }
    }
    p {
      font-family: 'Schoolbell', cursive;

      @media only screen and (max-width: 500px) {
        font-size: 2rem;
      }
    }
  }

  .additional-images {
    overflow: hidden;

    img {
      margin: 0rem;
      padding: 0rem;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 5rem;
    h2 {
      font-size: 3rem;
    }
    a {
      display: inline-block;
      padding: 1.5rem 1.5rem;
      background: #d39810;
      border-radius: 2rem;
      font-size: 2rem;
    }
  }
`;
