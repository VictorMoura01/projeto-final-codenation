import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    height: 100%;
  }

  body{
    min-height: 100%;
  }

  body, input, button{
    font-family: 'Karla', sans-serif;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  #root{
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10vh auto 7vh;
    grid-template-areas:
    "header"
    "main"
    "footer";
  }

  button{
    cursor:pointer;
  }
`;
