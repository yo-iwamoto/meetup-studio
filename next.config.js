/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  pageExtensions: ['page.tsx'],
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['pbs.twimg.com'],
  },
};
