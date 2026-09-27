import {
  DownloadIcon,
  type LucideIcon,
  PaletteIcon,
  PencilLineIcon,
  RocketIcon,
  RouteIcon,
} from 'lucide-react'

export const steps = {
  eyebrow: { icon: RouteIcon, lead: 'From Clone', emphasis: 'To Indexed' },
  title: 'Make It Yours In Four Steps',
  description:
    'The starter does the SEO plumbing once, so a new site is a config file, a content folder and a deploy.',
  items: [
    {
      icon: DownloadIcon,
      title: 'Clone The Starter',
      description: 'Use the GitHub template or clone the repository, then run `pnpm install`.',
      result: { label: 'Ready', detail: 'pnpm dev' },
    },
    {
      icon: PencilLineIcon,
      title: 'Make It Yours',
      description:
        'Set the name and links in `src/config/site.ts`, and every word on the page in `src/content/`.',
      result: { label: 'Content', detail: 'src/content/' },
    },
    {
      icon: PaletteIcon,
      title: 'Restyle With A Preset',
      description:
        'Build a preset on ui.shadcn.com/create and apply its code. Every section follows the new tokens.',
      result: { label: 'Theme', detail: 'shadcn apply <code>' },
    },
    {
      icon: RocketIcon,
      title: 'Deploy And Get Found',
      description:
        'Deploy to Vercel. The site URL resolves from the deployment, so canonicals, the sitemap and JSON-LD point at your domain.',
      result: { label: 'Indexable', detail: 'your-domain.com' },
    },
  ] satisfies {
    icon: LucideIcon
    title: string
    description: string
    result: { label: string; detail: string }
  }[],
}
