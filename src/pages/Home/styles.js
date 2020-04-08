import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  background-color: red;
  padding: 20px;
  margin: 0 auto;
`;

export const ProductList = styled.ul`
  list-style: none;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    padding: 10px;
    border: 1px solid black;
    overflow: hidden;

    img {
      width: auto;
      height: 350px;
      align-self: center;
      border-radius: 4px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 16px;
      color: #333;
      margin: 5px 0;
    }
  }
`;
