/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: isProd ? 'https://i.328888.xyz' : '',

  images: {
    domains: ['i.328888.xyz'],
  },
};

module.exports = nextConfig;
