/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  compiler: {
    reactRemoveProperties: { properties: ['^data-testId$'] },
  },
  eslint: {
    dirs: ['pages', 'components']
  },
}

module.exports = nextConfig 
