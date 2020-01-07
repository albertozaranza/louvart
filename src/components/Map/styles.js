import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px 0;

  iframe {
    width: 100%;
    max-width: 1200px;
    height: 450px;
    border: 0;
  }

  @media (max-width: 1200px) {
    padding: 0;
  }
`;
