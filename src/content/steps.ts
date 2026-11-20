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
  items: [
    {
      visual: 'clone',
      title: 'Clone The Starter',
      description:
        'Use the GitHub template or clone the repository, then run `pnpm install` and `pnpm dev`.',
      link: { label: 'Quick Start', href: siteConfig.links.quickStart },
    },
    {
      visual: 'content',
      title: 'Make It Yours',
      description:
        'Set the name and links in `src/config/site.ts`, and the copy in `src/content/`, one file per section.',
      link: {
        label: 'Site Config',
        href: `${siteConfig.links.repository}/blob/master/src/config/site.ts`,
      },
    },
    {
      visual: 'preset',
      title: 'Restyle With A Preset',
      description:
        'Run `pnpm exec shadcn apply <code>` to apply your preset. Every section follows the new theme.',
      link: { label: 'Create A Preset', href: siteConfig.links.presets },
    },
    {
      visual: 'deploy',
      title: 'Deploy And Check Indexing',
      description:
        'Deploy to Vercel. Canonicals and `sitemap.xml` point at your domain, and preview deploys stay `noindex`.',
      link: {
        label: 'SEO Tests',
        href: `${siteConfig.links.repository}/blob/master/e2e/seo.spec.ts`,
      },
    },
  ] satisfies {
    visual: StepVisual
    title: string
    description: string
    link: { label: string; href: string }
  }[],
}
