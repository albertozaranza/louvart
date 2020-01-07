import React from 'react';

import Grid from '~/components/Grid';

import { Container, GridItem } from './styles';

export default function Projects() {
  return (
    <Container>
      <h1>Últimos projetos</h1>
      <Grid>
        <GridItem>
          <div>Vidro</div>
        </GridItem>
        <GridItem>
          <div>Box</div>
        </GridItem>
        <GridItem>
          <div>Residência</div>
        </GridItem>
        <GridItem>
          <div>Portões</div>
        </GridItem>
      </Grid>
    </Container>
  );
}
