/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  experimental: {
    workerThreads: true,
    cpus: 4,
    sharedPool: true,
  },
};

export default nextConfig;
