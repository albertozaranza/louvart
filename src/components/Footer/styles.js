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
    height: 80px;
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
  align-items: flex-start;

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

    p {
      width: auto;
    }
  }
`;

export const Passage = styled.div`
  text-align: justify;

  p {
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const Contact = styled.div`
  h1 {
    font-size: 22px;
    font-weight: normal;

    margin-bottom: 10px;
    padding-bottom: 5px;

    border-bottom: 1px solid #fff;
  }

  div {
    display: flex;
    align-items: center;

    margin-bottom: 16px;
  }

  img {
    height: 20px;
    margin-right: 10px;
  }
`;

export const Copyright = styled.div`
  font-size: 10px;
  text-align: center;

  width: 100%;

  padding: 8px;

  background-color: #000080;
`;
