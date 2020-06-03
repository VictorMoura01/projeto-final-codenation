import styled, { css } from 'styled-components';
// import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
  background: #f9f9f9;
  top: 0;
  min-height: 100vh;
  position: fixed;
  transition: transform 0.3s ease-out;
  transform: translate3d(100%, 0, 0);
  width: 100%;
  z-index: 20;

  ${({ visible }) =>
    visible &&
    css`
      transform: translateZ(0);
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
      }
    `}

  &::before {
    background-color: red;
  }

  @media screen and (min-width: 1024px) {
    width: 375px;
    right: 0;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 15px;
  background: #fff;
  margin-bottom: 5px;

  span {
    margin: 0 auto;
    color: #2b2f33;
  }
`;

export const CartList = styled.ul`
  padding: 0 1.6rem;
  width: 100%;
`;

export const CartItem = styled.li`
  display: flex;
  padding: 1rem 0;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

export const ProductFigure = styled.figure`
  width: 25%;

  img {
    width: 100%;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const ProductName = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const ProductSize = styled.span`
  color: #a7a7a7;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  width: 50%;
  text-align: right;
`;

export const ProductActions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  span {
    padding: 0 1.6rem;
  }

  button {
    border: 1px solid #000;
    border-radius: 2px;
  }
`;

export const Total = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: #fff;
  background: #212529;
  text-align: center;
  padding: 1.6rem;
`;
