import React from 'react';

const SingleProject = ({project, setModalControl}) => {
  const {img, name, title, toolkit, links} = project;
  return (
    <div 
    className='cursor-pointer'>
      <div>
      <img 
      onClick={()=>{
        if(name){setModalControl(name)}
      }}
       className='border border-primary duration-300 hover:scale-105 object-cover h-[20rem] lg:h-[25rem] w-full bg-no-repeat object-top' src={img} alt="" />
      </div>
      <h4 className='mt-3 text-xl text-secondary text-center'>{name}</h4>
      <h5 className='text-center text-md'>{title}</h5>
      <h5 className='text-center text-sm'>{toolkit}</h5>
      {links ?
        <div className='text-center text-sm'>
        {
          links?.liveSite && <a href={links?.liveSite} target='_blank' className='hover:text-primary duration-300' rel="noreferrer">LiveLink</a>
        }
         
         {
          links?.clientSiteGitRepo &&<> {" "}|{" "} <a href={links?.clientSiteGitRepo} target='_blank' className='hover:text-primary duration-300' rel="noreferrer">ClientSite Git Repo</a> </> 
         }
         {
         
          links?.serverSiteGitRepo && <>{" "}|{" "} <a href={links?.serverSiteGitRepo} target='_blank' className='hover:text-primary duration-300' rel="noreferrer">ServerSite Git Repo</a></>
         }
      </div>
      :
      ""
      }
    </div>
  );
};

export default SingleProject;