import React, { useState } from 'react';
import ModalComponents from '../../modal/ModalComponents';
import WebsiteFullViewModal from '../../modal/WebsiteFullViewModal';
import About from './About/About';
import SocialMedia from './About/SocialMedia';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';
import Project from './Projects/Project';
import Skills from './Skills/Skills';

const Home = () => {
  const [modalControl, setModalControl] = useState("")

  return (
    <section className='relative'>
      <Nav />
      <Banner />
      <About />
      <Skills />
      <Project 
        setModalControl={setModalControl}
      />
      {modalControl !== "" && (
        <div className=" fixed top-0 left-0 right-0 z-40">
            <WebsiteFullViewModal setModalControl={setModalControl}>
              {modalControl !== "" && <ModalComponents modalControl={modalControl} />}
              </WebsiteFullViewModal>
        </div>
      )}
      <SocialMedia />
    </section>
  );
};

export default Home;