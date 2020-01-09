import React from 'react';

import door from '~/assets/door.svg';
import gate from '~/assets/gate.svg';
import glass from '~/assets/glass.svg';
import window from '~/assets/window.svg';

import Grid from '~/components/Grid';

import { Container, Info, GridItem } from './styles';

export default function Services() {
  return (
    <Container>
      <h1>Conheça algumas de nossas atividades</h1>
      <Grid>
        <GridItem>
          <img src={gate} alt="gate" />
          <Info>
            <h3>Portões</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            quibusdam ducimus ipsa. Iste possimus sunt voluptatum reiciendis
            sapiente sint, laborum harum sit voluptate quas, vel veritatis
            commodi explicabo blanditiis vitae!
          </Info>
        </GridItem>
        <GridItem>
          <img src={glass} alt="glass" />
          <Info>
            <h3>Vidros e espelhos</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            quibusdam ducimus ipsa. Iste possimus sunt voluptatum reiciendis
            sapiente sint, laborum harum sit voluptate quas, vel veritatis
            commodi explicabo blanditiis vitae!
          </Info>
        </GridItem>
        <GridItem>
          <img src={door} alt="door" />
          <Info>
            <h3>Box</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            quibusdam ducimus ipsa. Iste possimus sunt voluptatum reiciendis
            sapiente sint, laborum harum sit voluptate quas, vel veritatis
            commodi explicabo blanditiis vitae!
          </Info>
        </GridItem>
        <GridItem>
          <img src={window} alt="window" />
          <Info>
            <h3>Alumínio</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            quibusdam ducimus ipsa. Iste possimus sunt voluptatum reiciendis
            sapiente sint, laborum harum sit voluptate quas, vel veritatis
            commodi explicabo blanditiis vitae!
          </Info>
        </GridItem>
      </Grid>
    </Container>
  );
}
