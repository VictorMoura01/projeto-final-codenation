import styled, { css } from 'styled-components';

export const Container = styled.header`
  background: #fff;
  padding: 0 10px;
`;

export const Content = styled.nav`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
