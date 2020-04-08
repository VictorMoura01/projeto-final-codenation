import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

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
    font-family: 'Roboto', sans-serif;
    background-color: #eaeaea;
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
