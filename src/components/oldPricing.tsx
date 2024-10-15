export const Pricing = () => {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-lg px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-5xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            Not like the rest, It's faster, It's smarter, It's better!
          </h2>

          <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
            For an unbelievable price, you'll get the whole package to ship your
            first iOS application. <br />
            Ready to bring your idea to light?
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-0'>
          <div className='w-full rounded-lg bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3'>
            <div className='mb-4'>
              <h3 className='text-2xl font-semibold text-gray-100 sm:text-3xl'>
                Other Boilerplate
              </h3>
              {/* <p className='text-gray-300'>Boilerplate</p> */}
            </div>

            <div className='mb-4 space-x-2'>
              {/* <span className='text-4xl font-bold text-gray-100'>$29</span> */}
              <span className='text-2xl text-gray-300'>$199</span>
            </div>

            <ul className='mb-6 space-y-2 text-gray-300'>
              <li className='flex items-center gap-1.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>

                <span>Boilerplate Code</span>
              </li>

              <li className='flex items-center gap-1.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>

                <span>Limited support</span>
              </li>

              <li className='flex items-center gap-1.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>

                <span>Limited updates</span>
              </li>
            </ul>

            <a
              href='#'
              className='block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base'
            >
              Absolutely, not worth it.
            </a>
          </div>

          <div className='w-full rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-400 p-6 shadow-xl sm:w-1/2 sm:p-8'>
            <div className='mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row'>
              <div>
                <h3 className='text-2xl font-semibold text-white sm:text-3xl'>
                  ShipiOS Package
                </h3>
                <p className='text-indigo-100'>One Time Payment</p>
              </div>

              <span className='order-first inline-block rounded-full bg-indigo-200 bg-opacity-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white lg:order-none'>
                5 Spots Left
              </span>
            </div>

            <div className='mb-4 space-x-2'>
              <span className='text-4xl font-bold text-white'>$99</span>
              <span className='text-2xl text-indigo-100 line-through'>
                $149
              </span>
            </div>

            <ul className='mb-6 space-y-2 text-indigo-100'>
              <li className='flex items-center gap-1.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>

                <span>Boilerplate Code</span>
              </li>

              <li className='flex items-center gap-1.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>How-to Guides</span>
              </li>

              <li className='flex items-center gap-1.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>

                <span>Exclusive Rewards (worth $265)</span>
              </li>

              <li className='flex items-center gap-1.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>

                <span>Components Library</span>
              </li>

              <li className='flex items-center gap-1.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 shrink-0'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>

                <span>Private Community + Cohorts (Soon)</span>
              </li>
            </ul>

            <a
              href='https://selftalk.lemonsqueezy.com/buy/a2cf9233-0549-4786-9431-12b5d42e0603'
              className='block rounded-lg bg-indigo-200 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-300 focus-visible:ring active:bg-indigo-400 md:text-base'
            >
              Get the ShipiOS Bundle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};