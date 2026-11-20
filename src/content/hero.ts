import { siteConfig } from '@/config/site'

export const hero = {
  eyebrow: { lead: 'Free And', emphasis: 'Open Source' },
  title: 'The free Next.js landing page template with shadcn/ui, SEO and tests built in.',
  titleEmphasis: 'shadcn/ui, SEO and tests built in.',
  description:
    'A landing page template on Next.js 16, shadcn/ui and Base UI, and this page is exactly what you clone. Edit the copy, apply a preset and deploy with metadata, a sitemap and preview noindex already tested.',
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
