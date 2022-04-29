/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

module.exports = {
  images: {
    domains: ['media.graphassets.com'],
    formats: ['image/avif', 'image/webp'],
    },
  }
