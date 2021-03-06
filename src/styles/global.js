import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`

  ${normalize}

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html{
    height: 100%;
    width:100%;
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Noto Sans SC',sans-serif;
    background-color: #f9f9f9;
    -webkit-font-smoothing: antialiased;
  }

  #root{
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5vh auto;
    grid-template-areas:
      'header'
      'main';
  }

  button{
    cursor:pointer;
    border: none;
    background-color: transparent;
  }

  ul{
    list-style: none;
  }

`;
