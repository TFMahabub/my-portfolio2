import React from 'react';

const SingleProject = ({project}) => {
  const {img, name, title, toolkit} = project;
  return (
    <div>
      <img className='border border-[#d8d8d8]' src={img} alt="" />
      <h4 className='mt-3 text-xl text-secondary text-center'>{name}</h4>
      <h5 className='text-center text-md'>{title}</h5>
      <h5 className='text-center text-sm'>{toolkit}</h5>
    </div>
  );
};

export default SingleProject;