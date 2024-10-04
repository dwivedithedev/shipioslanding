import Image from 'next/image';

export const Case = () => {
  return (
    <div
      id='case'
      className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'
    >
      <div className='flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8'>
        <h2 className='max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group'>
          <span className='inline-block mb-1 sm:mb-4'>
            From 0 to App Store
            <br className='hidden md:block' />
            in 50 days: A case study
          </span>
          <div className='h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100' />
        </h2>
        <p className='text-gray-700 lg:text-sm lg:max-w-md'>
          My name is Vaibhav. I started learning SwiftUI in July, and within a
          little over 50 days, I shipped my first app called Kataru, from idea
          to the App Store. The Kataru app now has 5-star rating and is
          approaching 100+ users.
          <br />
          <br />
          With ShipiOS, I'm excited to help you turn your app ideas into
          reality!
        </p>
      </div>
      <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
        <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
          <Image
            className='object-cover w-full'
            src='https://www.kataru.app/_next/image?url=%2FLearn-SS1.jpg&w=640&q=75'
            alt=''
            width={640}
            height={300}
          />
        </div>

        <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
          <Image
            className='object-cover w-full'
            src='https://www.kataru.app/_next/image?url=%2FPractice-SS2.jpg&w=640&q=75'
            alt=''
            width={640}
            height={300}
          />
        </div>

        <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
          <Image
            className='object-cover w-full'
            src='https://www.kataru.app/_next/image?url=%2FRevise-SS3.jpg&w=640&q=75'
            alt=''
            width={640}
            height={300}
          />
        </div>

        <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
          <Image
            className='object-cover w-full'
            src='https://www.kataru.app/_next/image?url=%2FConvo-SS4.jpg&w=640&q=75'
            alt=''
            width={640}
            height={300}
          />
        </div>
      </div>
      <div className='text-center'>
        <a
          href='https://www.kataru.app/'
          aria-label=''
          className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
        >
          View Kataru App
          <svg
            className='inline-block w-3 ml-2'
            fill='currentColor'
            viewBox='0 0 12 12'
          >
            <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
          </svg>
        </a>
      </div>
    </div>
  );
};
