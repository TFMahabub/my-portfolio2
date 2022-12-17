import React from 'react';

const SingleProject = ({project}) => {
  const {img, name, title, toolkit} = project;
  return (
    <div>
      <img className=' border-primary shadow-2xl shadow-[#6ef7bb] hover:scale-105 duration-200' src={img} alt="" />
      <h4 className='mt-3 text-xl text-secondary text-center'>{name}</h4>
      <h5 className='text-center text-md'>{title}</h5>
      <h5 className='text-center text-sm'>{toolkit}</h5>
    </div>
  );
};

export default SingleProject;