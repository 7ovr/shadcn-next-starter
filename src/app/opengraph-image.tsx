import { siteConfig } from '@/config/site'
import { OG_CONTENT_TYPE, OG_SIZE, createOgImage } from '@/lib/og'

export const alt = `${siteConfig.name}: ${siteConfig.title}`
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return createOgImage({
    title: 'The Next.js landing page starter with a robust foundation to build on',
    eyebrow: 'Free And Open Source',
    description: 'Static pages, complete SEO, accessibility, preset theming and tests, wired.',
  })
}
