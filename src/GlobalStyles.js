import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html{
    font-size:62.5%;
    color: white;
}

body {
    margin: 0;
    padding: 0;
    background: black;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    ::-webkit-scrollbar {
      width: 0rem;
    }
     
    
  }

  h1{
    font-size:3rem;
  }

  p{
    color:white;
    font-size:4rem
  }

  a{
    font-size:3rem;
    color:white;
    text-decoration:none;
  }
  
`;

export default GlobalStyle;
