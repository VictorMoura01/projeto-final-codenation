import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5vh auto;
  grid-template-areas:
    'header'
    'main';
`;
