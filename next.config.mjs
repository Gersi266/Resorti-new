/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove any experimental features that might be causing issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['placeholder.svg'],
  },
}

export default nextConfig
