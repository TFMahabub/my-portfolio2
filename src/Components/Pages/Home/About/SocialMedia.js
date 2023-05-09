import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { GrMail, GrTwitter } from "react-icons/gr";

const SocialMedia = () => {
  return (
    <div className='mt-10 lg:mt-32'>
      <h3 className='text-2xl font-semibold text-secondary text-center'>Contact By</h3>
      <div className='mt-2 lg:mt-3 text-secondary flex items-center justify-center space-x-4'>
        <a href="https://www.linkedin.com/in/tfmahabub/" target='_blank'>
          <AiFillLinkedin className='text-4xl hover:text-primary duration-300'/>
        </a>
        <a href="https://github.com/TFMahabub" target='_blank'>
        <AiFillGithub className='text-4xl hover:text-primary duration-300'/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100007620996842" target='_blank'>
          <AiFillFacebook className='text-4xl hover:text-primary duration-300'/>
        </a>
        <a href="https://www.instagram.com/tf_mahabub/" target='_blank'>
          <AiOutlineInstagram className='text-4xl hover:text-primary duration-300'/>
        </a>
        <a href="https://twitter.com/tf_mahabubb" target='_blank'>
          <GrTwitter className='text-[32px] hover:text-primary duration-300'/>
        </a>
        <a href="mailto://rjmahabub543@gmail.com" target='_blank'>
          <GrMail className='text-4xl hover:text-primary duration-300'/>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;