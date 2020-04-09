import styled, { css } from 'styled-components';

export const Container = styled.header`
  background: #fff;
  padding: 0 10px;
  margin-top: 20px;
  border-radius: 3px;
  border: 1px solid #000;
`;

export const Navbar = styled.nav`
  height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  h1 {
    flex: 1;
    text-align: center;
  }

  button + button {
    margin-left: 5px;
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
  transition: opacity 0.2s ease-in-out;

  ${(props) =>
    props.cartItems &&
    css`
      &::after {
        position: absolute;
        right: -4px;
        top: 0;
        width: 16px;
        height: 16px;
        background: red;
        content: '${props.cartItems}';
        color: #fff;
        font-size: 0.8em;
        border-radius: 50%;
        display:flex;
        align-items: center;
        justify-content: center;
      }
    `}

  &:hover {
    opacity: 0.7;
  }
`;
