import { RouteIcon } from 'lucide-react'

import { siteConfig } from '@/config/site'

export type StepVisual = 'clone' | 'content' | 'preset' | 'deploy'

export const steps = {
  eyebrow: { icon: RouteIcon, lead: 'From Clone', emphasis: 'To Deploy' },
  title: 'Make It Yours In Four Steps',
  description:
    'Run the template locally, change the page and theme, then check your domain and search metadata on the deployed site.',
  primaryAction: { label: 'Browse Blocks', href: siteConfig.links.blocks },
  secondaryAction: { label: 'Explore Pro', href: siteConfig.links.pro },
  source: [
    { label: 'Quick Start', href: siteConfig.links.quickStart },
    { label: 'Site Config', href: `${siteConfig.links.repository}/blob/master/src/config/site.ts` },
    { label: 'Hero Copy', href: `${siteConfig.links.repository}/blob/master/src/content/hero.ts` },
    { label: 'SEO Tests', href: `${siteConfig.links.repository}/blob/master/e2e/seo.spec.ts` },
  ],
  items: [
    {
      visual: 'clone',
      title: 'Clone The Starter',
      description:
        'Use the GitHub template or clone the repository. With Node 24+ and pnpm 12+, run `pnpm install` and `pnpm dev`.',
    },
    {
      visual: 'content',
      title: 'Make It Yours',
      description:
        'Set the site name in `src/config/site.ts` and the headline in `src/content/hero.ts`. Each section has its own content file.',
    },
    {
      visual: 'preset',
      title: 'Restyle With A Preset',
      description:
        'Choose a shadcn preset and run `pnpm exec shadcn apply <code>` to change the colors, fonts and radius across the page.',
    },
    {
      visual: 'deploy',
      title: 'Deploy And Check Indexing',
      description:
        'Deploy and check that your canonical and `sitemap.xml` use your production domain. Preview deploys should return `noindex`.',
    },
  ] satisfies { visual: StepVisual; title: string; description: string }[],
}
