import React, { useState } from 'react';
// images
import image1 from '../../../../Assets/1.jpg';
import image2 from '../../../../Assets/2.jpg';
import image3 from '../../../../Assets/3.jpg';
import image4 from '../../../../Assets/4.jpg';
import image5 from '../../../../Assets/5.jpg';

const CustomSwiperImage = () => {
    const [singleImage, setSingleImage] = useState(0)
    const images = [ image1, image2, image3, image4, image5 ];

    //setTimeout
    setTimeout(()=>{
        if(singleImage<images?.length-1){
            setSingleImage(singleImage+1)
        }else{
            setSingleImage(0)
        }
    }, 3000)
    return (
        <>
            <img src={images[singleImage]} alt='image' />
        </>
    );
};

export default CustomSwiperImage;