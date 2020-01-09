import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  color: #1034a6;

  padding: 20px;

  width: 100%;

  div {
    max-width: 1200px;
  }

  h1 {
    margin-bottom: 20px;
  }
`;

export const HistoryContainer = styled.div`
  div {
    height: 300px;
    width: 300px;
    background-color: #ccc;
    margin: 0 20px 20px 0;

    float: left;
  }

  p {
    text-align: justify;
  }

  @media (max-width: 480px) {
    div {
      height: 200px;
      width: 200px;
    }
  }
`;
