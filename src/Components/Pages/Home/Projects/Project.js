import React from 'react';
import ComingSoon from '../../../../Assets/Projects/COMING SOON.jpg';
import DailyDealCars from '../../../../Assets/Projects/Daily-Deal-Cars.jpg';
import MakeMyTrip from '../../../../Assets/Projects/Make-My-Trip.jpg';
import EcoNotesAdminPanel from '../../../../Assets/Projects/eco-notes-admin-panel.png';
import EcoNotes from '../../../../Assets/Projects/eco-notes.png';
import ImageEditApp from '../../../../Assets/Projects/image-edit-app.jpg';
import ReplicEcommerce from '../../../../Assets/Projects/replic-ecommerce.png';
import SpicyHut from '../../../../Assets/Projects/spicy-hut.jpg';
import TitleText from '../../../ReuseableComponents/TitleText';
import SingleProject from './SingleProject';

const Project = ({setModalControl}) => {
  const projects = [
    { 
      id: 1,
      name: 'Eco-Notes',
      img: EcoNotes,
      title: 'A Blog posting web application',
      toolkit: 'Tailwind | Next.js | Redux | Express | mongoDB',
      links: {
        liveSite: "https://eco-notes.vercel.app/",
        clientSiteGitRepo: "https://github.com/TFMahabub/eco-notes",
        serverSiteGitRepo: "https://github.com/TFMahabub/eco-notes-server",
      }
    },
    { 
      id: 2,
      name: 'Eco-Notes-Admin-Panel',
      img: EcoNotesAdminPanel,
      title: 'A small Admin Panel CLI',
      toolkit: 'Tailwind | React.js | Redux | Express | mongoDB',
      links: {
        liveSite: "https://eco-notes-admin-panel.netlify.app/",
        clientSiteGitRepo: "https://github.com/TFMahabub/eco-notes-admin-cli",
        serverSiteGitRepo: "https://github.com/TFMahabub/eco-notes-server",
      }
    },
    { 
      id: 3,
      name: 'Replic-Ecommerce',
      img: ReplicEcommerce,
      title: 'A small e-commerce application ',
      toolkit: 'Tailwind | React.js | Redux | Express | mongoDB',
      links: {
        liveSite: "https://replic-ecommerce.netlify.app/",
        clientSiteGitRepo: "https://github.com/TFMahabub/Replic-Ecommerce",
        serverSiteGitRepo: "",
      }
    },
    { 
      id: 4,
      name: 'Spicy-Hut',
      img: SpicyHut,
      title: 'A Japanese restaurant web app',
      toolkit: 'Tailwind | Next.js | Redux | Express | mongoDB',
      links: {
        liveSite: "https://spicy-hut.vercel.app/",
        clientSiteGitRepo: "https://github.com/TFMahabub/spicy-hut",
        serverSiteGitRepo: "https://github.com/TFMahabub/spicy-hut-server",
      }
    },
    { 
      id: 5,
      name: 'Image-Edit-App',
      img: ImageEditApp,
      title: 'A simple image edit app',
      toolkit: 'Tailwind | React.js',
      links: {
        liveSite: "https://image-edite-app.netlify.app/",
        clientSiteGitRepo: "https://github.com/TFMahabub/image-editing-app",
      }
    },
    { 
      id: 6,
      name: 'Daily-Deal-Cars',
      img: DailyDealCars,
      title: 'Old car reselling website',
      toolkit: 'Tailwind | React | Express | mongoDB'
    },
    {
      id: 7,
      name: 'Make-My-Trip',
      img: MakeMyTrip,
      title: 'Tour Guide website',
      toolkit: 'Tailwind | React | Express | mongoDB'
    },
    {
      id: 8,
      img: ComingSoon,
    },
    {
      id: 9,
      img: ComingSoon,
    },
    {
      id: 10,
      img: ComingSoon,
    },
  ]
  return (
    <section id='projects'>
      <div className='max-w-[910px] px-3 lg:px-0 mx-auto py-7 lg:py-[80px]'>
        <TitleText>Projects</TitleText>
        <div className='mt-16 grid grid-cols-1 lg:grid-cols-2 gap-[65px] lg:gap-32'>

          {
            projects?.map(project=><SingleProject
              key={project?.id}
              setModalControl={setModalControl}
              project={project}
            />)
          }
          
        </div>
      </div>
    </section>
  );
};

export default Project;