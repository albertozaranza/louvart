import React, { useState } from 'react';

import logo from '~/assets/logo-small.svg';
import menu from '~/assets/menu.svg';

import { Container, VisibleNav } from './styles';

export default function Header() {
  const [visible, setVisible] = useState(false);

  function handleMenu() {
    setVisible(!visible);
  }

  return (
    <Container>
      <nav>
        <img src={logo} alt="logo" />

        <button onClick={handleMenu} type="button">
          <img src={menu} alt="logo" />
        </button>

        <ul>
          <li>Início</li>
          <li>Sobre</li>
          <li>Serviços</li>
        </ul>
      </nav>
      {visible ? (
        <VisibleNav>
          <ul>
            <li>Início</li>
            <li>Sobre</li>
            <li>Serviços</li>
          </ul>
        </VisibleNav>
      ) : (
        <></>
      )}
    </Container>
  );
}
