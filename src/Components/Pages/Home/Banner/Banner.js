import React from 'react';
import BannerImg from '../../../../Assets/Banner Logo.png';

const Banner = () => {
  return (
    <section className='bg-primary flex items-center justify-center min-h-screen'>
      <div 
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500" 
        className='max-w-[910px] mx-auto flex justify-center px-3 lg:px-0 '
        >
      <img className='lg:w-2/4 w-2/3' src={BannerImg} alt="" />
      </div>
    </section>
  );
};

export default Banner;