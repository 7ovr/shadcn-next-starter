import {
  GitCommitHorizontalIcon,
  LayersIcon,
  LinkIcon,
  type LucideIcon,
  MoonStarIcon,
  PencilLineIcon,
} from 'lucide-react'

export type FeatureVisual =
  | 'prerender'
  | 'metadata'
  | 'quality'
  | 'no-javascript'
  | 'stack'
  | 'presets'

export const features = {
  eyebrow: { icon: LayersIcon, lead: 'Everything', emphasis: 'Already Wired' },
  title: 'Everything A Landing Page Needs, Already Done',
  description:
    'Speed, search, accessibility, design and tests are handled from the first commit, and CI keeps each of them true after you make the site your own.',
  items: [
    {
      visual: 'prerender',
      title: 'Static And Fast By Default',
      description:
        'Every route prerenders to static HTML at build time. A dynamic API anywhere fails the build, and Lighthouse budgets in CI keep every page fast.',
    },
    {
      visual: 'metadata',
      title: 'Complete SEO On Every Page',
      description:
        'Titles, canonicals, Open Graph cards, JSON-LD and a sitemap come from one helper, so no page ships half a head.',
    },
    {
      visual: 'quality',
      title: 'Tested On Every Push',
      description:
        'Vitest, Playwright and Lighthouse run in CI beside lint, format and type checks, so what works today keeps working.',
    },
    {
      visual: 'no-javascript',
      title: 'Accessible By Default',
      description:
        'One h1 per page, a skip link, visible focus and reduced motion, and every section stays readable with JavaScript off.',
    },
    {
      visual: 'stack',
      title: 'Built On Tools You Know',
      description:
        'Current versions of the stack you already use, configured to work together from the first `pnpm dev`.',
    },
    {
      visual: 'presets',
      title: 'One Preset Restyles It All',
      description:
        'Colors, radius and fonts come from shadcn theme tokens, so `shadcn apply` restyles every section, in light and dark.',
    },
  ] satisfies { visual: FeatureVisual; title: string; description: string }[],
  extras: [
    {
      icon: PencilLineIcon,
      title: 'Every Word In One Place',
      description: 'Copy lives in typed content files, one per section.',
    },
    {
      icon: MoonStarIcon,
      title: 'Dark Mode Without A Flash',
      description: 'Light, dark and system themes, set before the first paint.',
    },
    {
      icon: GitCommitHorizontalIcon,
      title: 'Guarded Commits',
      description: 'Git hooks format and lint staged files on every commit.',
    },
    {
      icon: LinkIcon,
      title: 'Clone-Safe URLs',
      description: 'A fresh deploy points its canonicals at its own domain.',
    },
  ] satisfies { icon: LucideIcon; title: string; description: string }[],
}
