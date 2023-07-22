"use client";
import Image from 'next/legacy/image';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import styles from '@/styles/blogTab.module.css';
import 'react-tabs/style/react-tabs.css';

const Blog = () => {
  return (
    <section className='mt-12'>
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
        <h3 className='text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ACBFF] from-25% to-[#166BFF] to-70%'>
          LATEST BLOG
        </h3>

        <div>
          <Tabs >
            <TabList>
              <Tab >All</Tab>
              <Tab >Artificial Intelligence</Tab>
              <Tab >Business</Tab>
              <Tab >Technology</Tab>
            </TabList>


            <TabPanel >
              <p>
                <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                  Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                released
              </p>
              <p>
                Source:{' '}
                <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                  Wikipedia
                </a>
              </p>
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