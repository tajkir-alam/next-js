import React, { useEffect, useState } from 'react';
import blogStyle from '@/styles/blogs.module.css';
import { FaRegEye } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/legacy/image';

const SingleBlog = ({ blog, index }) => {
    const [viewCount, setViewCount] = useState('');

    const { _id, title, authorName, category, date, image, views } = blog;


    // giving conditions so the views can show in K or M.
    useEffect(() => {
        if (views < 1000) {
            setViewCount(views)
        }
        else if (views < 1000000) {
            const convertToK = `${(views / 1000).toFixed(1)}K`;
            setViewCount(convertToK);
        }
        else {
            const convertToK = `${(views / 1000000).toFixed(1)}M`;
            setViewCount(convertToK);
        }
    }, [views])

    // Updating views +1. 
    const handleUpdateViews = (id) => {
        fetch(`/api/blogs`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        })
            .then((res) => res.json())
            // .then((data) => console.log(data))
            .catch((error) => console.error('Error updating views:', error));
    }

    return (
        <div className={`card card-compact rounded-xl w-fit bg-base-100 shadow-[8px_7px_23px_0px_rgba(0,0,0,0.09)] hover:shadow-[0px_0px_4px_6px_rgba(0,0,0,0.15)]  duration-300 ${blogStyle.cardIs}`}>
            <figure className={`relative ${(index + 1) % 2 !== 0 ? 'h-[300px]' : 'h-[150px]'} m-2`}>
                <Image
                    src={image} alt=""
                    className={`rounded-xl `}
                    layout='fill'
                />
            </figure>
            <div className="card-body">
                <div className='grid grid-cols-5 gap-1 items-center'>
                    <div className='uppercase py-[0.1rem] rounded-full text-white text-xs text-center bg-[#319DFF]'>
                        <p className='text-[8px] tracking-widest'>{category}</p>
                    </div>
                    <div>
                        <h4 className='uppercase font-semibold text-xs'>{authorName}</h4>
                    </div>
                    <div className='col-span-2 text-right text-xs'>
                        {date}
                    </div>
                    <div className='flex items-center justify-self-end gap-1 text-[#606060]'>
                        <p>
                            <FaRegEye />
                        </p>
                        <p className='text-xs'>
                            {viewCount}
                        </p>
                    </div>
                </div>
                <h2 onClick={() => handleUpdateViews(_id)} className="card-title text-[#606060] font-normal">
                    <Link href={`/blog/${_id}`} as={`/blog/${_id}`} className='hover:text-[#319DFF]/75 duration-300'>
                        {title}
                    </Link>
                </h2>
            </div>
        </div>
    );
};

export default SingleBlog;