// src/pages/blog/[slug].js
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

import { CTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/NavBar';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

// Step 1: Get the static paths (slugs) for each post
export async function getStaticPaths() {
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.mdx$/, ''),
    },
  }));

  return { paths, fallback: false };
}

// Step 2: Get static props for each blog post (MDX content + metadata)
export async function getStaticProps({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter: data,
      mdxSource,
    },
  };
}

const BlogPost = ({ frontMatter, mdxSource }) => {
  return (
    <>
      <div>
        <Head>
          <title>
            {frontMatter.title} in iOS 18 and Xcode 16 | ShipiOS.App
          </title>
          <meta
            name='description'
            content={`
          Learn to add ${frontMatter.title} with Xcode 16 and iOS 18 support for your iOS App. ShipiOS.app is a ready-to-use SwiftUI boilerplate for building fast and modern web applications.
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
            content={`Tutorial for ${frontMatter.title} | Free SwiftUI Component Library | ShipiOS.App`}
          />
          <meta
            property='og:description'
            content={`
              Learn to add ${frontMatter.title} with Xcode 16 and iOS 18 support for your iOS App. ShipiOS.app is a ready-to-use SwiftUI boilerplate for building fast and modern web applications.
              Includes basic configurations and optimizations for
              optimal performance and development experience.
            `}
          />
          <meta
            property='og:image'
            content='https://sp-production-image.s3.amazonaws.com/1440092/6f0e0b2b-4035-42b3-b23c-513033421cbe.png'
          />

          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='twitter:title'
            content={`${frontMatter.title} | Free SwiftUI Component Library | ShipiOS.App`}
          />
          <meta
            name='twitter:description'
            content={`
              Learn to add ${frontMatter.title} with Xcode 16 and iOS 18 support for your iOS App. ShipiOS.app is a ready-to-use SwiftUI boilerplate for building fast and modern web applications.
              Includes basic configurations and optimizations for
              optimal performance and development experience.
            `}
          />
          <meta
            name='twitter:image'
            content='https://sp-production-image.s3.amazonaws.com/1440092/6f0e0b2b-4035-42b3-b23c-513033421cbe.png'
          />
        </Head>
        <Navbar />
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10'>
          <div className='mb-10 md:mx-auto sm:text-center md:mb-12'>
            <div>
              <Link href='/components'>
                <div className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wideruppercase text-white rounded-full bg-indigo-600'>
                  Component
                </div>
              </Link>
            </div>
            <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
              {frontMatter.title}
            </h1>
            <h4 className='text-md leading-9 tracking-tight text-gray-900'>
              Learn to add {frontMatter.title} to your iOS App (Supports Xcode
              16 and iOS 18)
            </h4>
            <div className='relative flex items-center justify-between'>
              <Image
                src={
                  frontMatter.image
                    ? frontMatter.image
                    : `https://public-files.gumroad.com/3h7yz8wytu833fra5t513q9kttky`
                }
                className='w-full my-5 max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md'
                alt={frontMatter.title}
                width={250}
                height={300}
              />
            </div>
          </div>
          <article className='prose prose-sm lg:prose-lg mx-auto'>
            <MDXRemote {...mdxSource} />
          </article>
        </div>
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
