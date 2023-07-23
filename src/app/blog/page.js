"use client";
import Image from 'next/legacy/image';
import Link from 'next/link';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import styles from '@/styles/blogTab.module.css';
// import 'react-tabs/style/react-tabs.css';
// import 'react-tabs/style/customdesign.css';

const Blog = () => {
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
          <Link href={'/blog'} className="flex gap-2 items-center border-2 border-[#319DFF] rounded-3xl px-3">
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
        </div>

        <div className='mt-5'>
          <Tabs>
            <TabList className='text-lg mb-8'>
              <Tab >All</Tab>
              <Tab >Artificial Intelligence</Tab>
              <Tab >Business</Tab>
              <Tab >Technology</Tab>
            </TabList>


            <TabPanel>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel >
              <p>
                ional Mushroom Kingdom, which is constantly under
                attack by Bowser. She often plays the damsel in distress role within the series and
                is the lead female. She is often portrayed as
              </p>
              <p>
                Source:{' '}
                <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                  Wikipedia
                </a>
              </p>
            </TabPanel>
            <TabPanel >
              <p>
                rld. Yoshi also appears in many of the Mario spin-off games, including
                Mario Party and Mario Kart, various Mario sports games, and which is
                characterized by their variety of colors.
              </p>
              <p>
                Source:{' '}
                <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
                  Wikipedia
                </a>
              </p>
            </TabPanel>
            <TabPanel >
              <p>
                loyal attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
                who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
                takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2,
              </p>
              <p>
                Source:{' '}
                <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
                  Wikipedia
                </a>
              </p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Blog;