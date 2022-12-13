import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';

const Home = () => {
  return (
    <section className='relative'>
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
    </section>
  );
};

export default Home;