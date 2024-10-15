// src/pages/blog/index.js
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import path from 'path';

import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/NavBar';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export async function getStaticProps() {
  // Read all the MDX files in the posts directory
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Extract metadata from the front matter using gray-matter
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function BlogIndex({ posts }) {
  return (
    <div>
      <Head>
        <title>Free SwiftUI Component Library | ShipiOS.App</title>
        <meta
          name='description'
          content={`
          A ready-to-use SwiftUI Boilerplate for building fast and modern web applications.
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
          content='Free SwiftUI Component Library | ShipiOS.App'
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
          content='Free SwiftUI Component Library | ShipiOS.App'
        />
        <meta
          name='twitter:description'
          content='ShipiOS simplifies iOS app development with a feature-rich boilerplate and some amazing extra perks!'
        />
        <meta
          name='twitter:image'
          content='https://sp-production-image.s3.amazonaws.com/1440092/73279ff1-c0a4-47c4-8be7-143c33e1c1f5.png'
        />
      </Head>
      <div className=''>
        <Navbar />
        <main>
          <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10'>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-8'>
              {/* <div>
                <div className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-indigo-600'>
                  Brand new
                </div>
              </div> */}
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
                Free SwiftUI Component Library
              </h2>
              <div className='text-base text-gray-700 md:text-lg'>
                Discover, copy and paste these SwiftUI components in your Xcode
                project. From buttons to navigation bars, you'll find the
                perfect component here with a few clicks.
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
          {posts.map((blog) => (
            <div
              className='p-8 bg-white border rounded shadow-sm'
              key={blog.slug}
            >
              <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
                {/* <a
                  href='/'
                  className='transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
                  aria-label='Category'
                >
                  weekend
                </a>{' '} */}
                <span className='text-gray-600'>{blog.date}</span>
              </p>
              <a
                href={`/components/${blog.slug}`}
                aria-label='Component'
                title={`${blog.title}`}
                className='inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400'
              >
                {blog.title}
              </a>
              <p className='mb-5 text-gray-700'>
                Learn to add a {blog.title} button to your iOS App
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/components/${post.slug}`}>
              {post.title} - {post.date}
            </Link>
          </li>
        ))}
      </ul> */}
      <Footer />
    </div>
  );
}
