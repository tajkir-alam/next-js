import React from 'react';

const page = () => {
    const backgroundImageStyle = {
        backgroundImage: "url('/authenticationBG.jpg')"
    };
    const bgOverlayStyle = {
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.42%, rgba(0, 0, 0, 0.50) 100%)'
    }

    return (
        <div className='w-full h-[40rem] bg-center bg-no-repeat my-10 rounded-3xl relative' style={backgroundImageStyle}>
            <div className='absolute inset-0 bg-[rgba(0,0,0,0.3)]'></div>
        </div>
    );
};

export default page;