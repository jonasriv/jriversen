import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '185.35.185.149',
        port: '3000',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
