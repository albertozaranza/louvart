import React from 'react';

import logo from '~/assets/logo-small.svg';
import call from '~/assets/call.svg';
import phone from '~/assets/phone.svg';
import email from '~/assets/email.svg';
import local from '~/assets/local.svg';

import { Container, Info, Passage, Contact, Copyright } from './styles';

export default function Footer() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Info>
        <Passage>
          <p>
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            animi magnam quaerat, aliquam cum, tenetur officiis nemo quia ab
            obcaecati tempora eum nobis nostrum fugit et quibusdam, magni ullam
            explicabo.&quot;
          </p>
          <span>Mt. (1, 1-5)</span>
        </Passage>
        <Contact>
          <h1>Contatos</h1>
          <div>
            <img src={local} alt="" />
            Av. Pedro Bento
          </div>
          <div>
            <img src={call} alt="" />
            (88) 99999-0000
          </div>
          <div>
            <img src={phone} alt="" />
            (88) 99999-0000
          </div>
          <div>
            <img src={email} alt="" />
            exemplo@email.com
          </div>
        </Contact>
      </Info>
      <Copyright>
        Copyright &copy; by Louvart <br /> Designed by Alberto Zaranza
      </Copyright>
    </Container>
  );
}
