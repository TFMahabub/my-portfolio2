import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className='mt-10 lg:mt-32'>
      <h3 className='text-2xl font-semibold text-secondary text-center'>Contact By</h3>
      <div className='mt-2 lg:mt-3 text-secondary flex items-center justify-center space-x-4'>
        <a href="https://www.linkedin.com/in/tfmahabub/" target='_blank'>
          <AiFillLinkedin className='text-4xl'/>
        </a>
        <a href="https://github.com/TFMahabub" target='_blank'>
        <AiFillGithub className='text-4xl'/>
        </a>
        <a href="rjmahabub543@gmail.com" target='_blank'>
          <AiOutlineMail className='text-4xl'/>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;