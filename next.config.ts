import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  //trailingSlash: true,
  //basePath: '/test',
  //assetPrefix: '/test/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
