import { RouteIcon } from 'lucide-react'

export type StepVisual = 'clone' | 'content' | 'preset' | 'deploy'

export const steps = {
  eyebrow: { icon: RouteIcon, lead: 'From Clone', emphasis: 'To Indexed' },
  title: 'Make It Yours In Four Steps',
  description:
    'The starter does the plumbing once, so a new site is a config file, a content folder and a deploy.',
  items: [
    {
      visual: 'clone',
      title: 'Clone The Starter',
      description: 'Use the GitHub template or clone the repository, then run `pnpm install`.',
    },
    {
      visual: 'content',
      title: 'Make It Yours',
      description:
        'Set the name and links in `src/config/site.ts`, and the copy in `src/content/`, one file per section.',
    },
    {
      visual: 'preset',
      title: 'Restyle With A Preset',
      description:
        'Build a preset on ui.shadcn.com/create and apply its code. Every section follows the new tokens.',
    },
    {
      visual: 'deploy',
      title: 'Deploy And Get Found',
      description:
        'Deploy to Vercel. The site URL resolves from the deployment, so canonicals, the sitemap and JSON-LD point at your domain.',
    },
  ] satisfies { visual: StepVisual; title: string; description: string }[],
}
