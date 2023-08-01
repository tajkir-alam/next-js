"use client"
import Spinner from '@/components/Spinner';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import useSWR from 'swr';
import BlogsSlide from './BlogsSlide';
import Image from 'next/legacy/image';
import useRole from '@/hooks/useRole';

const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
};

const Page = ({ params }) => {
    const [viewCount, setViewCount] = useState('');

    const role = useRole();

    const { data: blogs } = useSWR(`/api/blogs/${params.id}`, fetcher);

    const backgroundImageStyle = {
        backgroundImage: `url(${blogs && blogs.image})`,
    };


    // giving conditions so the views can show in K or M.
    useEffect(() => {
        if (blogs) {
            if (blogs.views < 1000) {
                setViewCount(blogs.views)
            }
            else if (blogs.views < 1000000) {
                const convertToK = `${(blogs.views / 1000).toFixed(1)}K`;
                setViewCount(convertToK);
            }
            else {
                const convertToK = `${(blogs.views / 1000000).toFixed(1)}M`;
                setViewCount(convertToK);
            }
        }
    }, [blogs])

    return (
        <div className='py-12'>
            {
                blogs ?
                    <>
                        <h1 className='ml-2 text-3xl text-[#404040]'> {blogs.title} </h1>
                        <div className='w-full h-72 bg-center bg-no-repeat my-10 rounded-3xl' style={backgroundImageStyle}></div>
                        <div className="flex justify-between ml-2">
                            <div>
                                <div className="flex gap-2 items-center">
                                    <div className='w-14 h-14 rounded-full border-2 border-[#319DFF] relative'>
                                        <Image
                                            src={blogs.authorImage} alt=""
                                            layout='fill'
                                            className='rounded-full'
                                        />
                                    </div>
                                    <div>
                                        <div className='flex gap-3 items-center'>
                                            <h4 className='text-[#202020]'>{blogs.authorName}</h4>
                                            <p className='text-[#606060] text-xs'>{blogs.date}</p>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <p className='badge bg-[#319DFF] text-white text-xs px-4 py-[0.7rem] uppercase'>{blogs.category}</p>
                                            <p className='text-[#606060] text-xs flex gap-1 items-center'>
                                                <FaRegEye /> {viewCount}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {role === 'writer' &&
                                    <Link href={'/blog/post-blog'} as={'/blog/post-blog'} className="flex gap-2 items-center border-2 border-[#319DFF] rounded-3xl px-3">
                                        <p className='text-[#319DFF] text-sm'>Write a blog</p>
                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path id="Vector" d="M12 20H21" stroke="#319DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path id="Vector_2" d="M16.5 3.50001C16.8978 3.10219 17.4374 2.87869 18 2.87869C18.2786 2.87869 18.5544 2.93356 18.8118 3.04017C19.0692 3.14677 19.303 3.30303 19.5 3.50001C19.697 3.697 19.8532 3.93085 19.9598 4.18822C20.0665 4.44559 20.1213 4.72144 20.1213 5.00001C20.1213 5.27859 20.0665 5.55444 19.9598 5.81181C19.8532 6.06918 19.697 6.30303 19.5 6.50001L7 19L3 20L4 16L16.5 3.50001Z" stroke="#319DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                        </div>
                                    </Link>
                                }
                            </div>
                        </div>
                        <p className="mt-8 mb-16 px-4">
                            {blogs.content}
                        </p>
                        <BlogsSlide category={blogs.category}></BlogsSlide>
                    </>
                    : <Spinner />
            }
        </div>
    );
};

export default Page;