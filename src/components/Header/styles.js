import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1034a6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  height: 100px;
  width: 100%;

  color: #fff;

  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px 0;

    width: 100%;
    max-width: 1200px;

    ul {
      display: flex;
      flex-direction: row;

      a {
        color: #fff;
        padding: 8px 20px;

        border: 1px solid #fff;
        border-radius: 8px;

        transition: all 0.5s;

        &:not(:last-child) {
          margin-right: 20px;
        }

        &:hover {
          color: #1034a6;
          background-color: #fff;
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

    @media (max-width: 1200px) {
      padding: 20px;
    }
  }

  button {
    display: none;
    background: none;
    border: 0;
    padding: 10px;

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

export const RowNav = styled.div`
  display: none;

  width: 100%;

  color: #fff;
  background-color: #1034a6;

  a {
    color: #fff;
  }

  li {
    padding: 15px 20px;

    &:hover {
      background-color: #000080;
    }
  }

  @media (max-width: 767px) {
    display: inline-block;
  }
`;
