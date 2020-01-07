import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1034a6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px;

    width: 100%;
    max-width: 1200px;

    ul {
      display: flex;
      flex-direction: row;

      li {
        cursor: pointer;

        &:not(:last-child) {
          margin-right: 20px;
        }
      }

      @media (max-width: 767px) {
        display: none;

        li {
          &:not(:last-child) {
            margin-right: 0;
          }
        }
      }
    }
  }

  button {
    display: none;
    background: none;
    border: 0;

    img {
      height: 30px;
    }

    @media (max-width: 767px) {
      display: inline-block;
    }
  }

  img {
    height: 50px;

    cursor: pointer;
  }
`;

export const VisibleNav = styled.div`
  display: none;

  width: 100%;

  color: #fff;
  background-color: #1034a6;

  li {
    cursor: pointer;

    padding: 10px 20px;

    &:hover {
      background-color: #000080;
    }
  }

  @media (max-width: 767px) {
    display: inline-block;
  }
`;
