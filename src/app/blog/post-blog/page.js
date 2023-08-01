'use client'
import React, { useRef } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const Page = () => {
    const inputCoverImg = useRef(null);

    const handleUploadButton = () => {
        inputCoverImg.current.click();
    };

    const handleCoverImgChange = e => {
        const selectedFile = e.target;
        console.log(selectedFile);
    }

    return (
        <section className='mt-12 pb-28'>
            {/* upload cover image */}
            <div>
                <input type="file" accept='image/*' ref={inputCoverImg} onChange={handleCoverImgChange} hidden />
                <div onClick={handleUploadButton} className='border-[5px] border-[#9de1fe] rounded-xl text-[#717379] flex flex-col items-center py-16'>
                    <FaCloudUploadAlt className='text-7xl ' />
                    <h1>Click here to upload cover photo</h1>
                </div>
            </div>
        </section>
    );
};

export default Page;