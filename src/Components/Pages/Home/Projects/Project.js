import React from 'react';
import TitleText from '../../../ReuseableComponents/TitleText';
import ComingSoon from '../../../../Assets/Projects/COMING SOON.jpg'
import DailyDealCars from '../../../../Assets/Projects/Daily-Deal-Cars.jpg'
import MakeMyTrip from '../../../../Assets/Projects/Make-My-Trip.jpg'
import SingleProject from './SingleProject';

const Project = () => {
  const projects = [
    { 
      id: 1,
      name: 'Daily-Deal-Cars',
      img: DailyDealCars,
      title: 'Old car reselling website',
      toolkit: 'Tailwind | React | Express | mongoDB'
    },
    {
      id: 2,
      name: 'Make-My-Trip',
      img: MakeMyTrip,
      title: 'Tour Guide website',
      toolkit: 'Tailwind | React | Express | mongoDB'
    },
    {
      id: 3,
      img: ComingSoon,
    },
    {
      id: 4,
      img: ComingSoon,
    },
    {
      id: 5,
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