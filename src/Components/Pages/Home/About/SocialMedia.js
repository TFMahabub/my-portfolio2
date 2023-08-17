import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { GrMail, GrTwitter } from "react-icons/gr";

const SocialMedia = () => {
  return (
    <div className='lg:mt-32 mt-10'>
      <h3 className='text-secondary text-2xl font-semibold text-center'>Contact By</h3>
      <div className='lg:mt-3 text-secondary lg:gap-4 flex flex-wrap items-center justify-center gap-2 mt-2'>
        <a href="https://www.linkedin.com/in/tfmahabub/" target='_blank' rel="noreferrer">
          <AiFillLinkedin className='lg:text-4xl hover:text-primary text-2xl duration-300'/>
        </a>
        <a href="https://github.com/TFMahabub" target='_blank' rel="noreferrer">
        <AiFillGithub className='lg:text-4xl hover:text-primary text-2xl duration-300'/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100007620996842" target='_blank' rel="noreferrer">
          <AiFillFacebook className='lg:text-4xl hover:text-primary text-2xl duration-300'/>
        </a>
        <a href="https://www.instagram.com/tf_mahabub/" target='_blank' rel="noreferrer">
          <AiOutlineInstagram className='text-[26px] lg:text-4xl hover:text-primary duration-300'/>
        </a>
        <a href="https://twitter.com/tf_mahabubb" target='_blank' rel="noreferrer">
          <GrTwitter className='text-2xl lg:text-[32px] hover:text-primary duration-300'/>
        </a>
        <a href="mailto://rjmahabub543@gmail.com" target='_blank' rel="noreferrer">
          <GrMail className='lg:text-4xl hover:text-primary text-2xl duration-300'/>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;