import React from 'react';

import Header from '~/components/Header';
import MainImage from '~/components/MainImage';
import Services from '~/components/Services';
import SubImage from '~/components/SubImage';
import Projects from '~/components/Projects';
import About from '~/components/About';
import Footer from '~/components/Footer';
import Map from '~/components/Map';
import Quality from '~/components/Quality';

export default function Home() {
  return (
    <>
      <Header />
      <MainImage />
      <Quality />
      <Services />
      <SubImage />
      <Projects />
      <About />
      <Map />
      <Footer />
    </>
  );
}
