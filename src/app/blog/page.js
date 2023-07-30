"use client";
import Image from 'next/legacy/image';
import Link from 'next/link';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import 'react-tabs/style/customdesign.css';
import blogStyle from '@/styles/blogs.module.css';
import Spinner from '@/components/Spinner';
import useSWR from 'swr';
import { useState } from 'react';
import SingleBlog from './SingleBlog';
import useRole from '@/hooks/useRole';



const fetcher = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const Blog = () => {
  const [category, setCategory] = useState('');
  const role = useRole();

  const { data: blogs } = useSWR(`/api/blogs?category=${category}`, fetcher);

  return (
    <section className='mt-12 pb-96'>
      {/* Title */}
      <div className="relative">
        <div>
          <div className='relative w-full h-52 blur-[2.5px]'>
            <Image
              src="/titleBanner.png"
              alt="Title background"
              layout='fill'
              sizes='100'
              priority={true}
            />
          </div>
          <div className='uppercase absolute top-1/4 w-full text-center'>
            <h1 className='text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ACBFF] from-25% to-[#166BFF] to-70%'>
              Our Blogs
            </h1>
            <h3 className='text-[#166BFF] font-semibold text-md md:text-lg my-2'>
              Uncover a World of Stories and Knowledge
            </h3>
            <p className='text-[#4A4A4A] text-sm md:text-md'>
              Be the first to receive our latest news, guides, discounts, and offers.
            </p>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className='mt-16'>
        <div className="flex justify-between">
          <h3 className='text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ACBFF] from-25% to-[#166BFF] to-70%'>
            LATEST BLOG
          </h3>
          { role === 'writer' &&
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

        <div className='mt-5'>
          <Tabs>
            <TabList className='text-lg mb-8'>
              <Tab onClick={() => setCategory('')}>All</Tab>
              <Tab onClick={() => setCategory('Artificial Intelligence')}>Artificial Intelligence</Tab>
              <Tab onClick={() => setCategory('Business')}>Business</Tab>
              <Tab onClick={() => setCategory('Technology')}>Technology</Tab>
            </TabList>


            <TabPanel>
              {blogs ?
                <div className={blogStyle.masonry}>
                  {
                    blogs.map((blog, index) => <SingleBlog key={index} blog={blog} index={index}></SingleBlog>)
                  }
                </div>
                :
                <Spinner></Spinner>
              }
            </TabPanel>
            <TabPanel>
              {blogs ?
                <div className={blogStyle.masonry}>
                  {
                    blogs.map((blog, index) => <SingleBlog key={index} blog={blog} index={index}></SingleBlog>)
                  }
                </div>
                :
                <Spinner></Spinner>
              }
            </TabPanel>
            <TabPanel>
              {blogs ?
                <div className={blogStyle.masonry}>
                  {
                    blogs.map((blog, index) => <SingleBlog key={index} blog={blog} index={index}></SingleBlog>)
                  }
                </div>
                :
                <Spinner></Spinner>
              }
            </TabPanel>
            <TabPanel>
              {blogs ?
                <div className={blogStyle.masonry}>
                  {
                    blogs.map((blog, index) => <SingleBlog key={index} blog={blog} index={index}></SingleBlog>)
                  }
                </div>
                :
                <Spinner></Spinner>
              }
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Blog;