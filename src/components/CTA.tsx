'use client';

import Link from 'next/link';

export const CTA = () => {
  return (
    <>
      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
          <div className='mx-auto max-w-screen-sm text-center'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white'>
              Time to build your iOS App?
            </h2>
            <p className='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
              ShipiOS provides you SwiftUI boilerplate, How-to Guides,
              Components Library and extra rewards!
            </p>
            <Link
              href='/#pricing'
              className='text-white bg-indigo-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'
            >
              Get ShipiOS Package
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
