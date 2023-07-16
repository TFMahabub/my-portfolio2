import React, { useEffect } from 'react';
import "./nav.css";

const Nav = () => {

  useEffect(()=>{
    const scrollline = document.querySelector('.scroll-line');
      function fillscrollline(){
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrolled = window.scrollY;
        const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
        scrollline.style.width = percentScrolled + '%';
      };
      window.addEventListener('scroll', fillscrollline);
  },[])

  return (
    <header className='fixed w-full top-0 z-10'>
      <div className='bg-secondary relative'>
      <nav className='max-w-[910px] p-3 lg:px-0 lg:py-5 mx-auto lg:flex items-center justify-between text-center'>
        <h2 className='text-white text-xl lg:text-2xl font font-semibold tracking-wider'>Mahabub Alam</h2>
          <ul className='mt-1 lg:mt-0 lg:space-x-8 space-x-4 tracking-wider font-medium'>
            <a href="#about" className='no-underline text-white hover:text-primary duration-150 lg:text-lg'>About</a>
            <a href="#skills" className='no-underline text-white hover:text-primary duration-150 lg:text-lg'>Skills</a>
            <a href="#projects" className='no-underline text-white hover:text-primary duration-150 lg:text-lg'>Projects</a>
            <button className=' mt-2 md:mt-0'>
              <a href="https://drive.google.com/file/d/1hdg3nZYn5RvpDq5hrrFB-l5jMMQDFCUr/view?usp=sharing" target='_blank' className='text-secondary bg-primary py-1 px-4 rounded-md lg:text-lg'>Get Resume</a>
            </button>
          </ul>
        </nav>
        <div className="scroll-line"></div>
      </div>
    </header>
  );
};

export default Nav;