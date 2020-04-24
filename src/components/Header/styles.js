import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  grid-area: header;
  background: #fff;
  padding: 20px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

export const Navbar = styled.nav`
  height: 100%;
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
