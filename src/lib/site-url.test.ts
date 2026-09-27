import { describe, expect, it } from 'vitest'

import { getSiteUrl } from '@/lib/site-url'

describe('getSiteUrl', () => {
  it('prefers SITE_URL and drops a trailing slash', () => {
    expect(
      getSiteUrl({
        SITE_URL: 'https://example.com/',
        VERCEL_PROJECT_PRODUCTION_URL: 'example.vercel.app',
      }),
    ).toBe('https://example.com')
  })

  it("falls back to Vercel's production domain", () => {
    expect(getSiteUrl({ VERCEL_PROJECT_PRODUCTION_URL: 'example.vercel.app' })).toBe(
      'https://example.vercel.app',
    )
  })

  it('uses localhost when nothing is set', () => {
    expect(getSiteUrl({})).toBe('http://localhost:3000')
  })
})
