import type { NextConfig } from 'next'

import { isIndexable } from '@/lib/site-url'

const nextConfig: NextConfig = {
  // AGENTS.md holds the conventions, so next dev must not write its own block into it.
  agentRules: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Previews and local builds say noindex in a header too, not only in the page's meta tag.
  async headers() {
    if (isIndexable()) return []
    return [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex' }] }]
  },
}

export default nextConfig
