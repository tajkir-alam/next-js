import React from 'react';

const page = () => {
    const backgroundImageStyle = {
        backgroundImage: "url('/authenticationBG.png')"
    };
    const bgOverlayStyle = {
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.42%, rgba(0, 0, 0, 0.50) 100%)'
    }

    return (
        <div className='w-full h-screen bg-center bg-no-repeat bg-cover rounded-3xl relative' style={backgroundImageStyle}>
            <div className="lg:mx-44 lg:py-32 grid grid-cols-3 z-20">
                <div className='bg-[#319DFF] '>
<h1>Welcome Back</h1>
                </div>
                <div className='col-span-2'>
dsf
                </div>
            </div>
        </div>
    );
};

export default page;