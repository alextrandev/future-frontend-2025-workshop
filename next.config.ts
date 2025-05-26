import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: '**',
        pathname: '/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;
