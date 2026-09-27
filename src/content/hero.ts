import { siteConfig } from '@/config/site'

export const hero = {
  eyebrow: { lead: 'Free And', emphasis: 'Open Source' },
  title: 'The Next.js landing page starter with the hard parts done.',
  titleEmphasis: 'the hard parts done.',
  description:
    'A free landing page starter on Next.js 16, shadcn/ui and Base UI. Static pages, complete SEO, accessible sections, preset theming and a full test suite come set up, so you start on the words, not the plumbing.',
  primaryAction: { label: 'Get The Starter', href: siteConfig.links.repository },
  command: `git clone ${siteConfig.links.repository}`,
  commandHighlight: siteConfig.links.repository.split('/').pop(),
}
