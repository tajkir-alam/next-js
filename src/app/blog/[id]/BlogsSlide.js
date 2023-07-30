import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import Spinner from '@/components/Spinner';
import { FaRegEye } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/legacy/image';

const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
};

const BlogsSlide = ({ category }) => {
    const { data: blogs } = useSWR(`/api/blogs?category=${category}`, fetcher);
    
    return (
        <Swiper
            slidesPerView={3.7}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
        >
            {blogs ?
                blogs.map(blog =>
                    <SwiperSlide key={blog._id}>
                        <div className={'card card-compact rounded-xl w-fit bg-base-100'}>
                            <figure className='m-2 h-[150px] relative'>
                                <Image
                                    src={blog.image} alt=""
                                    className={'rounded-xl'}
                                    layout='fill'
                                />
                            </figure>
                            <div className="card-body">
                                <div className='grid grid-cols-5 gap-1 items-center'>
                                    <div className='uppercase py-[0.1rem] rounded-full text-white text-xs text-center bg-[#319DFF]'>
                                        <p className='text-[8px] tracking-widest'>{blog.category}</p>
                                    </div>
                                    <div>
                                        <h4 className='uppercase font-semibold text-xs'>{blog.authorName}</h4>
                                    </div>
                                    <div className='col-span-2 text-right text-xs'>
                                        {blog.date}
                                    </div>
                                    <div className='flex items-center justify-self-end gap-1 text-[#606060]'>
                                        <p>
                                            <FaRegEye />
                                        </p>
                                        <p className='text-xs'>
                                            {blog.views < 1000
                                                ? `${blog.views}`
                                                : blog.views < 1000000
                                                    ? `${(blog.views / 1000).toFixed(1)}K`
                                                    : `${(blog.views / 1000000).toFixed(1)}M`}
                                        </p>
                                    </div>
                                </div>
                                <h2 className="card-title text-[#606060] font-normal">
                                    <Link href={`/blog/${blog._id}`} as={`/blog/${blog._id}`} className='hover:text-[#319DFF]/75 duration-300'>
                                        {blog.title}
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                )
                : <Spinner />
            }
        </Swiper>
    );
};

export default BlogsSlide;