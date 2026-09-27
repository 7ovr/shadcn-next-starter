import type { NextConfig } from 'next'

import { responseHeaders } from '@/lib/headers'
import { isIndexable } from '@/lib/site-url'

const nextConfig: NextConfig = {
  // AGENTS.md holds the conventions, so next dev must not write its own block into it.
  agentRules: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [{ source: '/:path*', headers: responseHeaders({ indexable: isIndexable() }) }]
  },
}

export default nextConfig
