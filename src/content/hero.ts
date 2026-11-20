import { siteConfig } from '@/config/site'

export const hero = {
  eyebrow: { lead: 'Free And', emphasis: 'Open Source' },
  title: 'A free Next.js landing page template with shadcn/ui.',
  titleEmphasis: 'with shadcn/ui.',
  description:
    'You are viewing the page you get when you use the template. Edit the copy and theme, then deploy with a sitemap and tests for canonical URLs and preview indexing.',
  command: `git clone ${siteConfig.links.repository}`,
  commandHighlight: siteConfig.links.repository.split('/').pop(),
  action: { label: 'Use This Template', href: siteConfig.links.template },
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
    'Oxc',
    'Lefthook',
    'Lucide',
  ],
} as const
