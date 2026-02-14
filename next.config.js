/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mir-s3-cdn-cf.behance.net', 'a5.behance.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.behance.net',
      },
    ],
  },
}

module.exports = nextConfig
