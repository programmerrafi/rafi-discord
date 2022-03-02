/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "cdn.sanity.io",
      "www.apkmirror.com",
    ],
  },
};

module.exports = nextConfig;
