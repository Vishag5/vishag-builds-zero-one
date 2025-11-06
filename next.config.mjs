/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  transpilePackages: ['lucide-react'],
  async rewrites() {
    return [
      // Serve a favicon to avoid 404s when browsers request /favicon.ico
      { source: '/favicon.ico', destination: '/icon.svg' },
    ];
  },
};

export default nextConfig;
