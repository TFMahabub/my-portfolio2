import React from 'react';
// import LoadingSpinner from '../ReuseableComponents/LoadingSpinner';

const WebsiteFullViewModal = ({children, setModalControl}) => {
    return (
        <div 
        onClick={()=>setModalControl("")}
        className='h-screen opacity-control z-30 bg-[#000000ae] flex justify-center items-center duration-500 '>
            <div className='h-screen w-full opacity-control z-40 bg-[#00000000] flex justify-center items-center duration-500 '>
            </div>
            <div className='main-modal full-modal2 absolute  z-40 w-[80%] md:w-[60%] lg:w-[85%] xl:w-[870px] 2xl:w-[870px] font-roboto bg-white overflow-hidden'>
                {/* <RiCloseFill
                onClick={()=>setModalControl("")}
                className='text-[28px] rounded-md p-[2px] font-extralight text-primary border border-primary cursor-pointer absolute z-20 right-2 top-2 hover:bg-aide-gray duration-300 bg-white' /> */}
                <div className="overflow-y-auto h-[82vh] modal-scrollbar modal-scrollbar-mozila border border-third bg-white">
                    <div className='bg-white w-full h-full relative'>
                        {/* <LoadingSpinner/> */}
                        {children}
                        <div
                        className='h-full w-full flex items-center justify-center'
                        >
                        <div class="w-12 h-12 rounded-full animate-spin
                        border-4 border-solid border-third border-t-white z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteFullViewModal;