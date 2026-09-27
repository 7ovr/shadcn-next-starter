import { siteConfig } from '@/config/site'

export const hero = {
  eyebrow: { lead: 'Free And', emphasis: 'Open Source' },
  title: 'The Next.js landing page starter with a robust foundation to build on.',
  titleEmphasis: 'a robust foundation to build on.',
  description:
    'A free landing page starter on Next.js 16, shadcn/ui and Base UI. Static pages, complete SEO, accessible sections, preset theming and a full test suite come set up, so you start on the words, not the plumbing.',
  primaryAction: { label: 'Get The Starter', href: siteConfig.links.repository },
  command: `git clone ${siteConfig.links.repository}`,
  commandHighlight: siteConfig.links.repository.split('/').pop(),
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
