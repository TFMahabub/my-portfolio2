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

          <p className='text-lg text-secondary '>
          Mahabub is a Front End web developer who creates good looking modern and high-performance web-applications for any kind of business.
          </p>
          <p className='text-lg text-secondary '>
          <br /> Mahabub specializes in ReactJS and Redux but is not limited to them.
          </p>
          <p className='text-lg text-secondary '>
          <br /> Mahabub understands how important is UX design for a web application, and how to create a web application from sketch and implement it.
          </p>
          <p className='text-lg text-secondary '>
          <br /> He also knows how to create a pixel-perfect website exactly by design, also web application created by mahabub are fully responsive(for computers, tablets, mobile devices) and user-oriented.
          </p>
          <p className='text-lg text-secondary '>
          <br /> Mahabub Alam loves challenges and believes in lifelong learning.
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