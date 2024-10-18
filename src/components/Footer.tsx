import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='sm:col-span-2'>
          <Link
            href='/'
            aria-label='Go home'
            title='ShipiOS'
            className='inline-flex items-center'
          >
            <span className='text-xl font-bold tracking-wide text-gray-800 uppercase'>
              ShipiOS.App
            </span>
          </Link>
          <div className='mt-6 lg:max-w-sm'>
            <p className='text-sm text-gray-800'>
              I told you it's more than just a boilerplate :)
            </p>
            <p className='mt-4 text-sm text-gray-800'>Made with ❤️ on 🌍</p>
          </div>
        </div>
        <div className='space-y-2 text-sm'></div>
        <div>
          <p className='text-base font-bold tracking-wide text-gray-900'>
            Need help? Reach out on:
          </p>
          <div className='flex'>
            <a
              href='https://x.com/vaibhavThevedi'
              aria-label='X'
              title='X'
              className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              Twitter/X
            </a>
          </div>
          <div className='flex'>
            <a
              href='mailto:info@shipios.app'
              aria-label='Our email'
              title='Our email'
              className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              Email
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
        <p className='text-sm text-gray-600'>
          © Copyright 2024 ShipiOS.App - All rights reserved.
        </p>
        <ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
          <li>
            <a
              href='https://selftalk.lemonsqueezy.com/affiliates'
              className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Affiliates - Earn upto 50% per Sale
            </a>
          </li>
          <li>
            <a
              href='#faq'
              className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              F.A.Q
            </a>
          </li>
          <li>
            <Link
              href='/privacy'
              className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href='/tos'
              className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
