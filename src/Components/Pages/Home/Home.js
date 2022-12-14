import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';
import Skills from './Skills/Skills';

const Home = () => {
  return (
    <section className='relative'>
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
    </section>
  );
};

export default Home;