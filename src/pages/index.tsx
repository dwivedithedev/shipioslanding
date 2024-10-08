import Head from 'next/head';
import Script from 'next/script';

import { Case } from '../components/Case';
import { Faq } from '../components/FAQ';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/NavBar';
import { Pricing } from '../components/Pricing';
import { Cover } from '../components/ui/cover';

export default function Home() {
  return (
    <>
      <Script
        id='lemon-squeezy-config'
        strategy='lazyOnload'
        dangerouslySetInnerHTML={{
          __html: `
            window.lemonSqueezyAffiliateConfig = { store: "selftalk" };
          `,
        }}
      />
      <Script src='https://lmsqueezy.com/affiliate.js' strategy='lazyOnload' />
      <Head>
        <title>ShipiOS.App - More Than Just A SwiftUI Boilerplate</title>
        <meta
          name='description'
          content={`
          A ready-to-use starter template for building fast and modern web applications.
          Includes basic configurations and optimizations for
          optimal performance and development experience.
        `}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />

        <meta property='og:url' content='https://www.shipios.app/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='ShipiOS - More Than a SwiftUI Boilerplate'
        />
        <meta
          property='og:description'
          content='ShipiOS simplifies iOS app development with a feature-rich boilerplate and some amazing extra perks!'
        />
        <meta
          property='og:image'
          content='https://sp-production-image.s3.amazonaws.com/1440092/73279ff1-c0a4-47c4-8be7-143c33e1c1f5.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='ShipiOS - More Than a SwiftUI Boilerplate'
        />
        <meta
          name='twitter:description'
          content='ShipiOS simplifies iOS app development with a feature-rich boilerplate and some amazing extra perks!'
        />
        <meta
          name='twitter:image'
          content='https://sp-production-image.s3.amazonaws.com/1440092/73279ff1-c0a4-47c4-8be7-143c33e1c1f5.png'
        />
        <script
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='7e364dd5-e4fa-464d-8870-5bb8a3a59705'
        ></script>
        <script defer src='https://cdn.paritydeals.com/banner.js'></script>
      </Head>

      <div className='isolate bg-white'>
        <Navbar />
        <main>
          <div className='relative px-6 lg:px-8'>
            <div className='mx-auto max-w-3xl py-32'>
              <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                <div className='relative rounded-full bg-white bg-opacity-70 py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                  Rated 5 stars ⭐️{' '}
                  <span className='font-semibold text-indigo-600'>
                    <span className='absolute inset-0' aria-hidden='true' />
                    by Makers
                    {/* <span aria-hidden='true'>&rarr;</span> */}
                  </span>
                </div>
              </div>
              <div className='text-center'>
                <h1 className='text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl'>
                  Ship Your First iOS App <Cover>Super-Duper Fast!</Cover>
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  Ready-to-use SwiftUI boilerplate for building modern iOS
                  applications
                  <br /> + Save time and effort with additional perks!
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                  <a
                    href='#pricing'
                    className='rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Get ShipiOS
                  </a>
                  <a
                    href='#case'
                    className='text-base font-semibold leading-7 text-gray-900'
                  >
                    See example <span aria-hidden='true'>→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
              <svg
                className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
                viewBox='0 0 1155 678'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
                  fillOpacity='.3'
                  d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
                />
                <defs>
                  <linearGradient
                    id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                    x1='1155.49'
                    x2='-78.208'
                    y1='.177'
                    y2='474.645'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#9089FC' />
                    <stop offset={1} stopColor='#FF80B5' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </main>
      </div>

      <div id='features'>
        <Features />
      </div>

      <div id='case'>
        <Case />
      </div>

      <div id='pricing'>
        <Pricing />
      </div>
      <div id='faq'>
        <Faq />
      </div>
      <Footer />
    </>
  );
}
