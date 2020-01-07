import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  justify-items: center;

  margin: 0 20px;

  max-width: 1200px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
