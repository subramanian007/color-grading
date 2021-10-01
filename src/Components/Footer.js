import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyle>
      <h1>All Rights Reserved</h1>
      <p>Create and Developed by Someone</p>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    margin-top: 2rem;
    margin-bottom: 0rem;
    font-size: 3rem;
  }

  p {
    font-size: 1rem;
  }
`;

export default Footer;
