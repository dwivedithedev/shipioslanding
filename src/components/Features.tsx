export const Features = () => {
  return (
    <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='mb-10 md:mb-16'>
        <h1 className='mb-4 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl'>
          More Than Just A Boilerplate
        </h1>

        <p className='mx-auto max-w-screen-sm text-center text-gray-500 md:text-md'>
          Packed with the core features needed to ship your app with additional
          perks to assist!
        </p>
      </div>
      <div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
          <div className='p-5'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
              <svg
                className='w-6 h-6 text-deep-purple-accent-400'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
              </svg>
            </div>
            <p className='mb-2 font-bold'>Authentication</p>
            <p className='text-sm leading-5 text-gray-900'>
              Firebase based Google and Apple Sign in with Account Deletion, Log
              out and State management.
            </p>
          </div>
          <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
        </div>
        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
          <div className='p-5'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6 text-deep-purple-accent-400'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5'
                />
              </svg>
            </div>
            <p className='mb-2 font-bold'>Onboarding</p>
            <p className='text-sm leading-5 text-gray-900'>
              From Single screen to multiple pages flow, fully configurable, out
              of the box.
            </p>
          </div>
          <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
        </div>
        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
          <div className='p-5'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6 text-deep-purple-accent-400'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z'
                />
              </svg>
            </div>
            <p className='mb-2 font-bold'>Analytics</p>
            <p className='text-sm leading-5 text-gray-900'>
              PostHog integration for logging events, tracking key metrics like
              application opened or downloads.
            </p>
          </div>
          <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
        </div>
        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
          <div className='p-5'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6 text-deep-purple-accent-400'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'
                />
              </svg>
            </div>
            <p className='mb-2 font-bold'>A.I.</p>
            <p className='text-sm leading-5 text-gray-900'>
              Choose from OpenAI, Gemini or Claude* for integrating popular AI
              services. Templates provided.
            </p>
          </div>
          <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
        </div>
        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
          <div className='p-5'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6 text-deep-purple-accent-400'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5'
                />
              </svg>
            </div>
            <p className='mb-2 font-bold'>Notifications</p>
            <p className='text-sm leading-5 text-gray-900'>
              Permission management, Custom notification flow and Requestreview
              with configurations.
            </p>
          </div>
          <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
        </div>
        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
          <div className='p-5'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6 text-deep-purple-accent-400'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                />
              </svg>
            </div>
            <p className='mb-2 font-bold'>Animations</p>
            <p className='text-sm leading-5 text-gray-900'>
              Support for Lottie animations with integration provided for plug
              and play use.
            </p>
          </div>
          <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
        </div>
        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
          <div className='p-5'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6 text-deep-purple-accent-400'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002'
                />
              </svg>
            </div>
            <p className='mb-2 font-bold'>Haptics</p>
            <p className='text-sm leading-5 text-gray-900'>
              Experience enhanced engagement through light haptics with editable
              settings.
            </p>
          </div>
          <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
        </div>
        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
          <div className='p-5'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6 text-deep-purple-accent-400'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
                />
              </svg>
            </div>
            <p className='mb-2 font-bold'>Documentation</p>
            <p className='text-sm leading-5 text-gray-900'>
              Learn how to make the Boilerplate yours and scale accordingly
              whenever you want.
            </p>
          </div>
          <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
        </div>
      </div>
      <div className='mb-20 md:mb-16'>
        <h1 className='mt-10 mb-0 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl'>
          And there's more...
        </h1>
      </div>
      <div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
          <div className='p-5'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6 text-deep-purple-accent-400'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z'
                />
              </svg>
            </div>
            <p className='mb-2 font-bold'>Library</p>
            <p className='text-sm leading-5 text-gray-900'>
              Native and Custom, Drag-n-Drop iOS App Components (Just Copy and
              Paste)
            </p>
          </div>
          <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
        </div>
        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
          <div className='p-5'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6 text-deep-purple-accent-400'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122'
                />
              </svg>
            </div>
            <p className='mb-2 font-bold'>Guides</p>
            <p className='text-sm leading-5 text-gray-900'>
              From learning 'enough' Swift for beginners to personal notes on
              getting App Store approval.
            </p>
          </div>
          <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
        </div>
        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
          <div className='p-5'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6 text-deep-purple-accent-400'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z'
                />
              </svg>
            </div>
            <p className='mb-2 font-bold'>Community</p>
            <p className='text-sm leading-5 text-gray-900'>
              Lifetime Access to a private group to share progress and
              accountability with Cohorts!
            </p>
          </div>
          <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
        </div>
        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
          <div className='p-5'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6 text-deep-purple-accent-400'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z'
                />
              </svg>
            </div>
            <p className='mb-2 font-bold'>Rewards</p>
            <p className='text-sm leading-5 text-gray-900'>
              1-Year Access to{' '}
              <a className='text-indigo-600' href='http://selftalk.ing/'>
                Selftalk.ing
              </a>{' '}
              (Valued at $240) +{' '}
              <a className='text-indigo-600' href='https://gum.co/psychology'>
                The Psych Handbook
              </a>{' '}
              eBook (Valued at $25)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
