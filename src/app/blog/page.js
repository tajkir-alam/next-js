import Image from 'next/legacy/image';
import React from 'react';

const Blog = () => {
  return (
    <section className='mt-12 relative'>
      <div className='relative w-full h-52 blur-[2.5px]'>
        <Image
          src="/titleBanner.png"
          alt="Title background"
          // width={100}
          // height={0}
          layout='fill'
          sizes='100'
          priority={true}
        />
      </div>
      <div className='uppercase absolute top-1/4 w-full text-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ACBFF] from-25% to-[#166BFF] to-70% z-50'>
            Our Blogs
          </h1>
          <h3 className='text-[#166BFF] font-semibold text-md md:text-lg my-2'>
            Uncover a World of Stories and Knowledge
          </h3>
          <p className='text-[#4A4A4A] text-sm md:text-md'>
            Be the first to receive our latest news, guides, discounts, and offers.
          </p>
      </div>
    </section>
  );
};

export default Blog;