'use client'
import dynamic from 'next/dynamic';
import Image from 'next/legacy/image';
import React, { useRef, useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
// import ReactQuill from 'react-quill';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const Page = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [value, setValue] = useState('');
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

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            ['bold', 'italic', 'underline'],
            [{ 'align': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            ['image']
        ],
    }

    return (
        <section className='mt-12 pb-28 px-2'>
            <form>
                {/* upload cover image */}
                <input type="file" accept='image/*' name='coverImg' ref={inputCoverImg} onChange={handleCoverImgChange} hidden />
                <div onClick={handleUploadButton} className='border-[5px] border-[#9de1fe] rounded-xl bg-white/25'>
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

                {/* Blog Writing text area */}
                <h3 className='text-[#525258]/75 text-lg ml-1 mt-6 mb-2 font-semibold tracking-wider'>Blog Title</h3>
                <div className="grid lg:grid-cols-3 lg:gap-20">
                    <div className='col-span-2'>
                        <input type="text" placeholder="Type here" name='blogTitle' className="input border-[4px] border-[#9de1fe] input-accent w-full focus:outline-none bg-white/25" />
                    </div>
                    <div>
                        <select name='blogCategory' className="select select-accent w-full focus:outline-none bg-white/25 border-[4px] border-[#9de1fe]">
                            <option>Dark mode or light mode?</option>
                            <option>Auto</option>
                            <option>Dark mode</option>
                            <option>Light mode</option>
                        </select>
                    </div>
                </div>

                {/* Write Blog */}
                <h3 className='text-[#525258]/75 text-lg ml-1 mt-6 mb-2 font-semibold tracking-wider'>Blog</h3>
                {/* <div className='border-[4px] border-[#9de1fe] rounded-xl'> */}
                    {/* <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                        modules={modules}
                        className='h-[700px] '
                    /> */}
                {/* </div> */}
            </form>
        </section>
    );
};

export default Page;