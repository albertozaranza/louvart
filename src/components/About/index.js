import React from 'react';

import Grid from '~/components/Grid';

import { Container, GridItem } from './styles';

export default function About() {
  return (
    <Container>
      <Grid>
        <GridItem>
          <h1>Louvart</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          architecto magni in ad sequi, nemo libero dicta voluptatem quam amet
          rem deleniti. Excepturi enim aliquam rem ab similique possimus
          officia!
        </GridItem>
        <GridItem>
          <h1>Nossa loja</h1>
          <div />
        </GridItem>
      </Grid>
    </Container>
  );
}
