import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  position: fixed;
  height: 5vh;
  width: 100%;
  grid-area: header;
  background: #fff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

export const Navbar = styled.nav`
  height: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const NavLogo = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #000;
  font-weight: 600;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
  transition: opacity 0.2s ease-in-out;

  & + & {
    margin-left: 10px;
  }

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
