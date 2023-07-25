"use client"
import Spinner from '@/components/Spinner';
import Image from 'next/legacy/image';
import React from 'react';
import useSWR from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
};

const page = ({ params }) => {
    const { data: blogs } = useSWR(`/api/blogs/${params.id}`, fetcher);

    console.log(blogs);

    return (
        <div className='py-12'>
            {
                blogs ?
                    <>
                        <h1 className='ml-2 text-3xl text-[#404040]'> {blogs.title} </h1>
                        <Image 
                            src={blogs.image}
                            layout='fill'
                        />
                    </>
                    : <Spinner />
            }
        </div>
    );
};

export default page;