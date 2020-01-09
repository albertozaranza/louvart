import React from 'react';
import { Link } from 'react-router-dom';

import box from '~/assets/box.jpg';
import gate from '~/assets/gate.jpg';
import home from '~/assets/home.jpg';
import glass from '~/assets/glass.jpg';

import { Container, Grid, GridItem } from './styles';

export default function Projects() {
  return (
    <Container>
      <h1>Nossos trabalhos</h1>
      <Grid>
        <GridItem>
          <img src={glass} alt="glass" />
          <span>Vidro</span>
        </GridItem>
        <GridItem>
          <img src={box} alt="box" />
          <span>Box</span>
        </GridItem>
        <GridItem>
          <img src={home} alt="home" />
          <span>Residência</span>
        </GridItem>
        <GridItem>
          <img src={gate} alt="gate" />
          <span>Portões</span>
        </GridItem>
      </Grid>
      <Link to="/services">
        <button type="button">Ver mais</button>
      </Link>
    </Container>
  );
}
