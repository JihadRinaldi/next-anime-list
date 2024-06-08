/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    ANIME_BASE_URL: process.env.ANIME_BASE_URL,
  },
};

export default nextConfig;
