import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import logo from '~/assets/logo-small.svg';
import menu from '~/assets/menu.svg';

import { Container, RowNav } from './styles';

export default function Header() {
  const [visible, setVisible] = useState(false);

  function handleMenu() {
    setVisible(!visible);
  }

  return (
    <Container>
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <button onClick={handleMenu} type="button">
          <img src={menu} alt="logo" />
        </button>

        <ul>
          <Link to="/">
            <li>Início</li>
          </Link>
          <Link to="/about">
            <li>Sobre</li>
          </Link>
          <Link to="/services">
            <li>Serviços</li>
          </Link>
        </ul>
      </nav>
      {visible ? (
        <RowNav>
          <ul>
            <Link to="/">
              <li>Início</li>
            </Link>
            <Link to="/about">
              <li>Sobre</li>
            </Link>
            <Link to="/services">
              <li>Serviços</li>
            </Link>
          </ul>
        </RowNav>
      ) : (
        <></>
      )}
    </Container>
  );
}
