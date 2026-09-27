import { siteConfig } from '@/config/site'
import heroDark from '@/content/images/hero-dark.jpg'
import heroLight from '@/content/images/hero-light.jpg'

export const hero = {
  eyebrow: { lead: 'Free And Open Source,', emphasis: 'Built To Be Found' },
  title: 'The Next.js landing page starter with SEO done right. Tested, not promised.',
  titleEmphasis: 'Tested, not promised',
  description:
    'A free landing page starter on shadcn/ui and Base UI. Every page is prerendered with complete metadata, structured data and Open Graph images, and a test proves each of them, including crawlability with JavaScript off.',
  primaryAction: { label: 'Get The Starter', href: siteConfig.links.repository },
  command: `git clone ${siteConfig.links.repository}`,
  commandHighlight: siteConfig.links.repository.split('/').pop(),
  images: { light: heroLight, dark: heroDark },
}

export const stack = {
  caption: 'Built on the stack you already use',
  items: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'shadcn/ui',
    'Base UI',
    'Vercel',
    'Vitest',
    'Playwright',
    'Lighthouse',
    'pnpm',
    'Node.js',
    'Zod',
    'MDX',
    'Oxc',
    'Lefthook',
    'Lucide',
  ],
} as const
