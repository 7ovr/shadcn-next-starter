import { describe, expect, it } from 'vitest'

import { siteConfig } from '@/config/site'
import { createMetadata } from '@/lib/metadata'

describe('createMetadata', () => {
  it('gives the home page the site title and every other page a titled suffix', () => {
    expect(createMetadata({ path: '/' }).title).toBe(`${siteConfig.title} - ${siteConfig.name}`)
    expect(createMetadata({ title: 'Blog', path: '/blog' }).title).toBe(`Blog - ${siteConfig.name}`)
  })

  it('points the canonical at the page and keeps a noindex page without one', () => {
    expect(createMetadata({ title: 'Blog', path: '/blog' }).alternates?.canonical).toBe('/blog')
    expect(
      createMetadata({ title: 'Page Not Found', path: '', noIndex: true }).alternates?.canonical,
    ).toBeNull()
  })

  it('tells robots to stay away from a page marked noindex', () => {
    expect(createMetadata({ path: '/', noIndex: true }).robots).toMatchObject({
      index: false,
      follow: false,
    })
  })
})
