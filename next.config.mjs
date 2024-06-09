/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    ANIME_BASE_URL: process.env.ANIME_BASE_URL,
  },
  swcMinify: true,
  experimental: {
    workerThreads: true,
  },
};

export default nextConfig;
