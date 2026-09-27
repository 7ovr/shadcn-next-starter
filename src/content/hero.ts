import { siteConfig } from '@/config/site'

export const hero = {
  eyebrow: { lead: 'Free And Open Source,', emphasis: 'Built To Be Found' },
  title: 'The Next.js landing page starter with SEO done right.',
  titleEmphasis: 'Tested, not promised.',
  description:
    'A free landing page starter on shadcn/ui and Base UI. Every page is prerendered with complete metadata, structured data and Open Graph images, and a test proves each of them, including crawlability with JavaScript off.',
  primaryAction: { label: 'Get The Starter', href: siteConfig.links.repository },
  secondaryAction: { label: 'Use This Template', href: siteConfig.links.template },
  command: `git clone ${siteConfig.links.repository}`,
}

export const stack = {
  caption: 'Built on the stack you already use',
  items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Base UI', 'Vercel'],
} as const
