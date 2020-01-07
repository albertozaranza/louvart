import React from 'react';

import { Container } from './styles';

export default function Map() {
  return (
    <Container>
      <iframe
        title="Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.5694027354114!2d-37.770753899418516!3d-4.569066409923455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b9b37e48677c93%3A0x8e5a09d572c267fa!2sLouvart%20Vidra%C3%A7aria%20aracati%20-%20ce!5e0!3m2!1spt-BR!2sbr!4v1578401151617!5m2!1spt-BR!2sbr"
        frameBorder="0"
        allowFullScreen=""
      />
    </Container>
  );
}
