/** @type {import('next').NextConfig} */
const nextConfig = {
  //basePath: '/pages',
  //output: 'export',
  optimizeFonts: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
