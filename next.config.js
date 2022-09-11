/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
// const withCss = require("@zeit/next-css");
// const withPurgeCss = require("next-purgecss");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, stream: false, constants: false };
    return config;
  },
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ['workspace.vmeals.ae', 'i0.wp.com', 'vmeals.ae', 'lh3.googleusercontent.com', 'www.ardb.com.kh'],
  },
}

module.exports = nextTranslate(nextConfig)
