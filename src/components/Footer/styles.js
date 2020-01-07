import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px 0 0;

  color: #fff;
  background-color: #1034a6;

  img {
    height: 100px;
  }

  @media (max-width: 480px) {
    img {
      height: 60px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  padding: 0 20px;
  margin-top: 30px;

  p {
    width: 300px;
  }

  @media (max-width: 480px) {
    h1 {
      display: none;
    }

    flex-direction: column;
  }
`;

export const Passage = styled.div`
  p {
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const Contact = styled.div`
  h1 {
    font-weight: normal;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    align-items: center;

    margin-bottom: 16px;
  }

  img {
    height: 24px;
    margin-right: 10px;
  }
`;

export const Copyright = styled.div`
  text-align: center;

  width: 100%;

  padding: 10px;

  background-color: #000080;
`;
