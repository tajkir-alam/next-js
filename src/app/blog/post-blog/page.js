'use client'
import Image from 'next/legacy/image';
import React, { useRef, useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const Page = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const inputCoverImg = useRef(null);

    const handleUploadButton = () => {
        inputCoverImg.current.click();
    };

    const handleCoverImgChange = e => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        if (selectedFile) {
            setSelectedImg(URL.createObjectURL(selectedFile));
        }
    }

    return (
        <section className='mt-12 pb-28'>
            {/* upload cover image */}
            <div className='px-2'>
                <input type="file" accept='image/*' ref={inputCoverImg} onChange={handleCoverImgChange} hidden />
                <div onClick={handleUploadButton} className='border-[5px] border-[#9de1fe] rounded-xl'>
                    {!selectedImg ?
                        <div className='text-[#717379] flex flex-col items-center py-16 cursor-pointer'>
                            <FaCloudUploadAlt className='text-7xl ' />
                            <h1>Click here to upload cover photo</h1>
                        </div>
                        :
                        <div className='relative w-full h-72'>
                            <Image
                                src={selectedImg}
                                alt='blog cover'
                                layout='fill'
                                priority={true}
                                className='rounded-lg object-cover object-center'
                            />
                            <div className='cursor-pointer text-slate-300 absolute inset-0 flex flex-col items-center justify-center bg-black/25 rounded-lg'>
                                <FaCloudUploadAlt className='text-7xl ' />
                                <h1>Click here to change the cover photo</h1>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Page;