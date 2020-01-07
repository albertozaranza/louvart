import React from 'react';

import GlobalStyle from '~/styles/global';

import Header from '~/components/Header';
import MainImage from '~/components/MainImage';
import Services from '~/components/Services';
import SubImage from '~/components/SubImage';
import Projects from '~/components/Projects';
import About from '~/components/About';
import Footer from '~/components/Footer';
import Map from '~/components/Map';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainImage />
      <Services />
      <SubImage />
      <Projects />
      <About />
      <Map />
      <Footer />
    </>
  );
}
