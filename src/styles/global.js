import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  ${normalize}

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    height: 100%;
    width:100%;
    font-size: 62.5%;
  }

  body{
    min-height: 100%;
    min-width: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Noto Sans SC',sans-serif;
    background-color: #f9f9f9;
    -webkit-font-smoothing: antialiased;
  }

  .container{
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    .container {
      width:1024px;
      }
   }

  #root{
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10vh auto;
    grid-template-areas:
    "header"
    "main"
  }

  button{
    cursor:pointer;
  }

`;
