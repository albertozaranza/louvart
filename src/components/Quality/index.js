import React from 'react';

import concept from '~/assets/concept.svg';
import box from '~/assets/box-delivery.svg';
import medal from '~/assets/medal.svg';

import { Container, Item } from './styles';

export default function Quality() {
  const qualities = [
    {
      icon: box,
      description: 'Serviço com entrega rápida',
    },
    {
      icon: medal,
      description: 'Produtos de qualidade',
    },
    {
      icon: concept,
      description: 'Cortes personalizados e inovadores',
    },
  ];
  return (
    <Container>
      <div>
        {qualities.map(quality => (
          <Item>
            <img src={quality.icon} alt="icon" />
            <span>{quality.description}</span>
          </Item>
        ))}
      </div>
    </Container>
  );
}
