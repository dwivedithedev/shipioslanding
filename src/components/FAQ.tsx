import { useState } from 'react';

interface ItemProps {
  title: string;
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b'>
      <button
        type='button'
        aria-label='Open item'
        title='Open item'
        className='flex items-center justify-between w-full p-4 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='text-lg font-medium'>{title}</p>
        <svg
          viewBox='0 0 24 24'
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <polyline
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeMiterlimit='10'
            points='2,7 12,17 22,7'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      {isOpen && (
        <div className='p-4 pt-0'>
          <p className='text-gray-700'>{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
      <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <div>
            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
              Get your answers
            </p>
          </div>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            Frequently Asked Questions
          </h2>
          <p className='text-base text-gray-700 md:text-lg '>
            If you have a different question, please feel free to reach out to
            me directly.
          </p>
        </div>
        <div className='space-y-4'>
          <Item title='What is the compatiblity here?'>
            Xcode 16 and iOS 18.
          </Item>
          <Item title='What if this is my first time?'>
            Don't worry. The documents are written in simple language for your
            to follow through. Also, you can join Cohorts where like-minded
            folks would be willing to help you out.
          </Item>
          <Item title='Do you offer any discounts?'>
            If you are a student or have a special case, please write to me.
            I'll try my best to help :)
          </Item>
          <Item title='Can I get a refund?'>
            Due to the nature of the product, once you have it, it's yours. so
            it can't be refunded.
          </Item>
        </div>
      </div>
    </div>
  );
};
