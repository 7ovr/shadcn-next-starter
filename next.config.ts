import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // AGENTS.md holds the conventions, so next dev must not write its own block into it.
  agentRules: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
