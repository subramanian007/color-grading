import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>
      <Link to="/">
        <h1>COLOR GRADING</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  background-color: #1f1e1ea7;
  position: sticky;
  top: 0;
  z-index: 99;
  min-height: 8rem;
  display: flex;
  padding: 0.5rem 4rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 630px) {
    display: block;
  }

  h1 {
    font-family: 'Gemunu Libre', sans-serif;
    color: #e0dede;
    transition: all 0.3s;
    font-size: 3rem;

    @media only screen and (max-width: 630px) {
      text-align: center;
    }

    :hover {
      color: white;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-basis: 7rem;
    margin-right: 1rem;
    padding: 0;
    margin: 0ch;

    @media only screen and (max-width: 630px) {
      justify-content: space-between;
      margin-bottom: 1.3rem;
      margin-right: 0rem;
    }

    a {
      text-decoration: none;
      margin-left: 6rem;
      font-size: 2rem;
      transition: all 0.2s;
      font-weight: bold;
      color: #cac4c4;
      position: relative;

      @media only screen and (max-width: 630px) {
        margin-left: 0rem;
        padding: 1.5rem;
      }

      ::after {
        position: absolute;
        left: 0;
        bottom: -12px;
        content: '';
        display: block;
        height: 4px;
        width: 0%;
        border-radius: 10%;
        background-color: #e9a60a;
        transition: width 0.3s ease-in;

        @media only screen and (max-width: 630px) {
          bottom: 4px;
        }
      }

      :hover {
        color: #ffffff;

        ::after {
          width: 100%;
        }
      }
    }
  }
`;
