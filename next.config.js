/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'startup-template-sage.vercel.app',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  experimental: {
    // Remove turbopack since it might cause instability
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
};

module.exports = nextConfig; 