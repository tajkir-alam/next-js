import Image from 'next/legacy/image';
import React from 'react';

const Blog = () => {
  return (
    <section className='mt-12 relative w-full h-52 blur-[2.5px]'>
        <Image
          src="/titleBanner.png"
          alt="Title background"
          // width={100}
          // height={0}
          layout='fill'
          sizes='100'
          priority={true}
        />
    </section>
  );
};

export default Blog;