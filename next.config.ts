import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/openclaw-marketing',
  assetPrefix: '/openclaw-marketing/',
};

export default nextConfig;
