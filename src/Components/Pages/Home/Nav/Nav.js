import React from 'react';

const Nav = () => {
  return (
    <header className='bg-secondary border-b-4 border-third absolute w-full top-0'>
      <nav className='max-w-[910px] py-3 px-3 lg:px-0 lg:py-5 mx-auto lg:flex items-center justify-between text-center'>
        <h2 className='text-white text-2xl font font-semibold tracking-wider'>Mahabub Alam</h2>
        <ul className='lg:space-x-8 space-x-4 tracking-wider font-medium'>
          <a href="#about" className='no-underline text-white hover:text-primary'>About</a>
          <a href="#skills" className='no-underline text-white hover:text-primary'>Skills</a>
          <a href="#about" className='no-underline text-white hover:text-primary'>Works</a>
          <button className='text-secondary bg-primary py-1 px-4 rounded-md mt-2 lg:mt-0'>Get Resume</button>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;