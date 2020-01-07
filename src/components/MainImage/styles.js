import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 500px;
  padding: 0 20px;

  font-size: 30px;

  background-color: #ccc;

  @media (max-width: 480px) {
    height: 400px;
    font-size: 24px;
  }
`;

export const Box = styled.div`
  text-align: center;

  padding: 30px;
  border-radius: 5px;

  color: #fff;
  background-color: rgba(16, 52, 166, 0.6);

  h1 {
    font-size: 80px;
    letter-spacing: 10px;
  }

  h2 {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 50px;
      letter-spacing: 4px;
    }

    h2 {
      font-size: 30px;
    }
  }
`;
