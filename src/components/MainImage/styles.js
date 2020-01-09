import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 500px;
  margin-top: 100px;
  padding: 0 20px;

  font-size: 30px;

  background-color: #ccc;

  @media (max-width: 480px) {
    height: 400px;
    font-size: 24px;
  }

  @media (max-width: 320px) {
    height: 300px;
    font-size: 20px;
  }
`;

export const Box = styled.div`
  text-align: center;

  padding: 30px;
  border-radius: 5px;

  color: #fff;
  background-color: rgba(16, 52, 166, 0.6);

  -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.4);

  h1 {
    font-size: 80px;
    font-weight: normal;
    letter-spacing: 10px;
  }

  h2 {
    font-weight: normal;
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

  @media (max-width: 320px) {
    h1 {
      font-size: 40px;
      letter-spacing: 2px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;
