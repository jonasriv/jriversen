import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gamlevegen.no',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
