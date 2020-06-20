import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;

  ${({ drawer }) =>
    drawer &&
    css`
      &:before {
        backface-visibility: visible;
        background: radial-gradient(ellipse at center, #7a7a7a 0, #000 100%);
        bottom: 0;
        content: '';
        height: 100vh;
        opacity: 0.75;
        pointer-events: all;
        position: fixed;
        right: 0;
        visibility: visible;
        width: 100vw;
        z-index: 2;
      }
    `}
`;
