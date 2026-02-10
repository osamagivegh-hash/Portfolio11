/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed for Vercel standard deployment
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://portfolio22-api.osamashaer66.workers.dev'
  }
}

module.exports = nextConfig
