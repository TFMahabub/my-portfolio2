import React from 'react';
import TitleText from '../../../ReuseableComponents/TitleText';
import img from '../../../../Assets/About Image.jpg'
import SocialMedia from './SocialMedia';

const About = () => {
  return (
    <section id='about' className=''>
      <div className='max-w-[910px] px-3 lg:px-0 mx-auto py-7 lg:py-[80px]'>
        <TitleText>About</TitleText>
        <div className='lg:flex justify-between pt-2 lg:pt-4 lg:space-x-7'>
        <article className='lg:w-1/2'>
          <p className='text-md text-secondary tracking-wider'>
          Mahabub is a Front End web developer. I love to do coding. My favorite thing about coding is always
          trying to learn something new, explore new logic and apply this to web projects. I will always be comfortable
          working with a team.
          </p>
        </article>
        <div className='lg:w-1/2 mt-8 lg:mt-0'>
          <img src={img} alt="" />
        </div>
        </div>
        <SocialMedia></SocialMedia>
      </div>
    </section>
  );
};

export default About;