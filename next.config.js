/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    /* first method */
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'media-cdn.tripadvisor.com',
    //     // port: '',
    //     // pathname: '/my-bucket/**',
    //   },
    // ],

    /* second method */
    unoptimized: true

    // loader: 'default',
    // path: '/_next/image',
    // domains: ["res.cloudinary.com"]
  },
  compiler: {
    reactRemoveProperties: { properties: ['^data-testId$'] },
    // removeConsole: true,
  },
  eslint: {
    dirs: ['pages', 'components']
  },
  // experimental: {
  //   runtime: 'experimental-edge', // 'node.js' (default) | 'experimental-edge'
  //   appDir: true
  // },

  // webpack: (config) => {
  //   config.plugins.push(
  //     new CopyPlugin({
  //       patterns: [
  //         {
  //           from: 'node_modules/leaflet/dist/images',
  //           to: path.resolve(__dirname, 'public', 'leaflet', 'images')
  //         },
  //       ],
  //     }),
  //   )
  //   return config
  // }
}

module.exports = nextConfig 
