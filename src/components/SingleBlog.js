import React from 'react';
import blogStyle from '@/styles/blogs.module.css';
import { FaRegEye } from 'react-icons/fa';

const SingleBlog = ({ blog, index }) => {
    console.log(blog);
    const { title, authorName, category, date, image, views } = blog;


    return (
        <div className={`card card-compact rounded-xl w-fit bg-base-100 shadow-xl ${blogStyle.cardIs}`}>
            <figure className='p-2'>
                <img src={image} alt="Shoes" className={`rounded-xl ${(index+1) % 2 !== 0 ? 'h-[300px]' :'h-[150px]'} w-full`} />
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
                        <div>
                            <FaRegEye />
                        </div>
                        <p className='text-xs'>
                            {views}
                        </p>
                    </div>
                </div>
                <h2 className="card-title text-[#606060] font-normal">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default SingleBlog;