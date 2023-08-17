import React from 'react';
import TitleText from '../../../ReuseableComponents/TitleText';
import SocialMedia from './SocialMedia';
import SwiperImage from './SwiperImage';

const About = () => {
  return (
    <section id='about'>
      <div className='max-w-[910px] px-3 lg:px-0 mx-auto py-7 lg:py-[80px]'>
        <TitleText>About</TitleText>
        <div className='lg:flex lg:pt-4 lg:space-x-7 justify-between pt-2 mt-8'>
          <article className='lg:w-1/2'>
            <p className='text-secondary text-lg'>
            Mahabub is a Front End web developer who creates good looking modern and high-performance web-applications for any kind of business.
            </p>
            <p className='text-secondary text-lg'>
            <br /> Mahabub specializes in ReactJS, Next.js, Redux, etc, but is not limited to them.
            </p>
            <p className='text-secondary text-lg'>
            <br /> Mahabub understands how important is UX design for a web application, and how to create a web application from sketch and implement it. He also knows how to create a pixel-perfect website exactly by design, also web application created by mahabub are fully responsive(for computers, tablets, mobile devices) and user-oriented.
            </p>
            <p className='text-secondary text-lg'>
            <br /> Mahabub Alam loves challenges and believes in lifelong learning.
            </p>
          </article>
        <div className='lg:w-1/2 lg:mt-0 mt-8'>
          {/* <img src={img} alt="" /> */}
          <SwiperImage/>
        </div>
        </div>
        <SocialMedia />
      </div>
    </section>
  );
};

export default About;