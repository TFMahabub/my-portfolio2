import React from 'react';
import BannerImg from '../../../../Assets/Banner Logo.png'

const Banner = () => {
  return (
    <section className='bg-primary min-h-screen flex items-center justify-center'>
      <div className='max-w-[910px] mx-auto flex justify-center px-3 lg:px-0'>
      <img className='lg:w-2/4 w-2/3' src={BannerImg} alt="" />
      </div>
    </section>
  );
};

export default Banner;