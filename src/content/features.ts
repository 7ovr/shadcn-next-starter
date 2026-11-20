import {
  GitCommitHorizontalIcon,
  ImageIcon,
  LayersIcon,
  LinkIcon,
  type LucideIcon,
  MoonStarIcon,
} from 'lucide-react'

import { siteConfig } from '@/config/site'

export type FeatureVisual =
  | 'prerender'
  | 'metadata'
  | 'quality'
  | 'no-javascript'
  | 'content'
  | 'presets'

type FeatureItem = {
  visual: FeatureVisual
  title: string
  description: string
  link?: { label: string; href: string }
}

export const features = {
  eyebrow: { icon: LayersIcon, lead: 'Everything', emphasis: 'Already Wired' },
  title: 'Everything The Template Ships, Wired And Tested',
  description:
    'Start with prerendered pages, editable content, and checks that run against the production build.',
  items: [
    {
      visual: 'prerender',
      title: 'Static And Fast By Default',
      description:
        'The site prerenders to HTML at build time. CI checks the homepage against Lighthouse performance and accessibility budgets.',
    },
    {
      visual: 'metadata',
      title: 'Tested Search Metadata',
      description:
        'The template generates titles, canonical URLs, social cards and a sitemap. Playwright checks production metadata and preview noindex directives.',
    },
    {
      visual: 'quality',
      title: 'Tested On Every Push',
      description:
        'Vitest, Playwright and Lighthouse run in CI beside lint, format and type checks, so what works today keeps working.',
      link: { label: 'View CI Checks', href: siteConfig.links.ci },
    },
    {
      visual: 'no-javascript',
      title: 'Accessible By Default',
      description:
        'One h1 per page, a skip link, visible focus and reduced motion, and every section stays readable with JavaScript off.',
    },
    {
      visual: 'content',
      title: 'Every Word In One Place',
      description:
        'All the copy lives in typed files under `src/content/`, one per section, so a new headline never means touching a component.',
    },
    {
      visual: 'presets',
      title: 'One Preset Restyles It All',
      description:
        'Colors, radius and fonts come from shadcn theme tokens, so `shadcn apply` restyles every section, in light and dark.',
    },
  ] satisfies FeatureItem[] as FeatureItem[],
  extras: [
    {
      icon: ImageIcon,
      title: 'Share Cards For Every Page',
      description: "Open Graph images drawn at build time in your theme's colors.",
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
