import React, { useEffect, useState } from 'react';
// full-image from assates-
// import DailyDealCars from '../../Assets/Projects/Daily-Deal-Cars-fullPage.png';
// import makeMyTrip from '../../Assets/Projects/Make-My-Trip-FullPage.png';
// import spicyHut from '../../Assets/Projects/spicy-hut-fullPage.png';

const ModalComponents = ({modalControl}) => {
    //state-
    const [rederedImageLink, setRederedImageLink] = useState("")

    



    useEffect(()=>{
        if(modalControl==="Spicy-Hut"){
            setRederedImageLink("https://i.ibb.co/K5SQQm0/spicy-hut-full-page-low-regulation.jpg")
        }
        if(modalControl==="Daily-Deal-Cars"){
            setRederedImageLink("https://i.ibb.co/BgQ56Dv/Daily-Deal-Cars-full-page-low-regulation.jpg")
        }
        if(modalControl==="Make-My-Trip"){
            setRederedImageLink("https://i.ibb.co/r65cW34/Make-My-Trip-full-page-low-regulation.jpg")
        }
    },[modalControl])
    return (
        <img className='w-full' src={rederedImageLink} alt="" />
    );
};

export default ModalComponents;