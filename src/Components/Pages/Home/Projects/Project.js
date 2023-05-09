import React from 'react';
import ComingSoon from '../../../../Assets/Projects/COMING SOON.jpg';
import DailyDealCars from '../../../../Assets/Projects/Daily-Deal-Cars.jpg';
import MakeMyTrip from '../../../../Assets/Projects/Make-My-Trip.jpg';
import SpicyHut from '../../../../Assets/Projects/spicy-hut.jpg';
import TitleText from '../../../ReuseableComponents/TitleText';
import SingleProject from './SingleProject';

const Project = () => {
  const projects = [
    { 
      id: 1,
      name: 'Spicy-Hut',
      img: SpicyHut,
      title: 'A Japanese Resturent web app',
      toolkit: 'Tailwind | Nex.js | Redux | Express | mongoDB',
      links: {
        liveSite: "https://spicy-hut.vercel.app/",
        clientSiteGitRepo: "https://github.com/TFMahabub/spicy-hut",
        serverSiteGitRepo: "https://github.com/TFMahabub/spicy-hut-server",
      }
    },
    { 
      id: 2,
      name: 'Daily-Deal-Cars',
      img: DailyDealCars,
      title: 'Old car reselling website',
      toolkit: 'Tailwind | React | Express | mongoDB'
    },
    {
      id: 3,
      name: 'Make-My-Trip',
      img: MakeMyTrip,
      title: 'Tour Guide website',
      toolkit: 'Tailwind | React | Express | mongoDB'
    },
    {
      id: 4,
      img: ComingSoon,
    },
    {
      id: 5,
      img: ComingSoon,
    },
    {
      id: 6,
      img: ComingSoon,
    },
  ]
  return (
    <section id='projects' className=''>
      <div className='max-w-[910px] px-3 lg:px-0 mx-auto py-7 lg:py-[80px]'>
        <TitleText>Projects</TitleText>
        <div className='mt-16 grid grid-cols-1 lg:grid-cols-2 gap-[65px] lg:gap-32'>

          {
            projects?.map(project=><SingleProject
              key={project?.id}
              project={project}
            />)
          }
          
        </div>
      </div>
    </section>
  );
};

export default Project;