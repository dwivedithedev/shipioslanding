/* eslint-disable import/no-extraneous-dependencies */
import withBundleAnalyzer from '@next/bundle-analyzer';
import withMDX from '@next/mdx';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

// Bundle Analyzer setup
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// MDX setup
const mdx = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm], // Add remark-gfm here
    rehypePlugins: [rehypePrism],
  },
});

export default mdx(
  bundleAnalyzer({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // Add .mdx to page extensions
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'www.kataru.app',
        },
        {
          protocol: 'https',
          hostname: 'dev-to-uploads.s3.amazonaws.com',
        },
      ],
    },
  }),
);
