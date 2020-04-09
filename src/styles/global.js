import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    min-height: 100vh;
  }

  body, input, button{
    font-family: 'Karla', sans-serif;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  #root{
    max-width: 1380px;
    margin:0 auto;
    padding: 0 20px 50px;
  }

  button{
    cursor:pointer;
  }
`;
