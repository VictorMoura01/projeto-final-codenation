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
    width:100%;
  }

  body{
    min-height: 100%;
    min-width: 100%;
  }

  body, input, button{
    font-family: 'Karla', sans-serif;
    background-color: #fafafa;
    -webkit-font-smoothing: antialiased;
  }

  .container{
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    .container {
      width:768px;
      }
   }

  #root{
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 8vh auto 7vh;
    grid-template-areas:
    "header"
    "main"
    "footer";
  }

  button{
    cursor:pointer;
  }

  .main-button{
    height: 3em;
    width: 8em;
    border: none;
    color: #FEFFFE;
    background-color: #53D365;
    transition: all 0.1s ease-in-out;
    font-weight: bold;

    &:hover {
      background-color: #4dc158;
    }

    &:disabled {
      background-color: #eee;
      color: #8a8986;
      border: none;
      pointer-events: none;
      cursor: not-allowed;
    }
  }

`;
