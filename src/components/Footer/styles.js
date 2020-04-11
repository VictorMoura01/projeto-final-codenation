import styled from 'styled-components';

export const Container = styled.footer`
  background: #000;
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ddd;

  span {
    font-weight: bold;
    margin-bottom: 5px;
  }

  a + a {
    margin-left: 5px;
  }
`;
