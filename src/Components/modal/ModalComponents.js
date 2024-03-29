import React, { useEffect, useState } from 'react';
// full-image from assates-
import DailyDealCars from '../../Assets/Projects/Daily-Deal-Cars-full-page-low-regulation.jpg';
import makeMyTrip from '../../Assets/Projects/Make-My-Trip-full-page-low-regulation.jpg';
import EcoNotesAdminPanel from '../../Assets/Projects/eco-notes-admin-panel.png';
import ecoNotes from '../../Assets/Projects/eco-notes.png';
import ImageEditApp from '../../Assets/Projects/image-edit-app.jpg';
import replicEcommerce from '../../Assets/Projects/replic-ecommerce.png';
import spicyHut from '../../Assets/Projects/spicy-hut-full-page-low-regulation.jpg';

const ModalComponents = ({modalControl}) => {
    //state-
    const [rederedImageLink, setRederedImageLink] = useState("")

    useEffect(()=>{
        if(modalControl==="Eco-Notes"){
            setRederedImageLink(ecoNotes)
        }
        if(modalControl==="Eco-Notes-Admin-Panel"){
            setRederedImageLink(EcoNotesAdminPanel)
        }
        if(modalControl==="Replic-Ecommerce"){
            setRederedImageLink(replicEcommerce)
        }
        if(modalControl==="Spicy-Hut"){
            setRederedImageLink(spicyHut)
        }
        if(modalControl==="Daily-Deal-Cars"){
            setRederedImageLink(DailyDealCars)
        }
        if(modalControl==="Make-My-Trip"){
            setRederedImageLink(makeMyTrip)
        }
        if(modalControl==="Image-Edit-App"){
            setRederedImageLink(ImageEditApp)
        }
    },[modalControl])
    return (
        <img className='absolute z-10 w-full' src={rederedImageLink} alt="" />
    );
};

export default ModalComponents;