import React from 'react';

const SingleProject = ({project}) => {
  const {img, name, title, toolkit, links} = project;
  return (
    <div className=''>
      <img className='border border-primary duration-300 hover:scale-105' src={img} alt="" />
      <h4 className='mt-3 text-xl text-secondary text-center'>{name}</h4>
      <h5 className='text-center text-md'>{title}</h5>
      <h5 className='text-center text-sm'>{toolkit}</h5>
      {links?.liveSite && links?.clientSiteGitRepo && links?.serverSiteGitRepo?
        <div className='text-center text-sm'>
        <a href={links?.liveSite} target='_blank' className='hover:text-primary duration-300'>LiveLink</a>
         {" "}|{" "}
         <a href={links?.clientSiteGitRepo} target='_blank' className='hover:text-primary duration-300'>ClientSite Git Repo</a>
         {" "}|{" "}
         <a href={links?.serverSiteGitRepo} target='_blank' className='hover:text-primary duration-300'>ServerSite Git Repo</a>
      </div>
      :
      ""
      }
    </div>
  );
};

export default SingleProject;