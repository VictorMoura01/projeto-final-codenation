import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
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
  height: 100%;
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
  flex-direction: column;
  justify-content: center;
  width: 75%;
  padding: 0 0.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }
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
  text-align: right;
`;

export const ProductActions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    padding: 0 1.6rem;
  }

  div {
    display: flex;
  }
`;

export const ActionButton = styled.button`
  border: ${({ remove }) => (remove ? 'none' : '1px solid #000')};
  border-radius: 2px;
  display: flex;
  align-items: center;
`;

export const Total = styled.footer`
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  color: #fff;
  background: #212529;
  text-align: center;
  padding: 1.6rem;
`;
