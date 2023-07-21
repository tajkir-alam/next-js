"use client";
import Image from 'next/legacy/image';

const Blog = () => {
  return (
    <section className='mt-12 relative'>
      {/* Title */}
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

      {/* Blog */}
      <div className='mt-16'>
        <h3 className='text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ACBFF] from-25% to-[#166BFF] to-70%'>
          LATEST BLOG
        </h3>

        
      </div>
    </section>
  );
};

export default Blog;