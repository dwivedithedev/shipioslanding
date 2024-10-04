/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Assuming your images are served over HTTPS
        hostname: 'images.pexels.com', // Existing allowed host
      },
      {
        protocol: 'https', // Assuming your images are served over HTTPS
        hostname: 'www.kataru.app', // New allowed host
      },
    ],
  },
});
