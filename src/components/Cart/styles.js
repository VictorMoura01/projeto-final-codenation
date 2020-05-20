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
  }
`;

export const CartList = styled.ul`
  padding: 0 16px;
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;

  & + & {
    margin-top: 5px;
    border-bottom: 1px solid #eee;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #000;
    padding: 2px;
    width: 40px;
    background: #fff;
  }

  .cart_item__name {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .cart-item__size {
    color: #666;
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 2px;
  }

  .cart-item__summary {
    display: flex;
    flex-direction: column;
  }

  .cart-item__price {
    font-size: 1.4rem;
    margin-top: 10px;
    font-weight: 600;
  }

  .cart-item__action {
    margin-top: 5px;
  }
`;

export const ProductFigure = styled.figure`
  height: 100%;
  img {
    height: 100%;
  }
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  padding: 5px;
`;

export const ProductName = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const ProductSize = styled.span`
  color: #666;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const ProductActions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  span {
    margin: 0 5px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background: #000;
  color: #fff;
  height: 40px;
`;
