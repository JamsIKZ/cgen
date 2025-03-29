import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['startup-template-sage.vercel.app'],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  experimental: {
    // Remove turbopack since it might cause instability
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
};

export default nextConfig;
