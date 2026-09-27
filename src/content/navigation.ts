import { siteConfig } from '@/config/site'

export type NavLink = { label: string; href: string; external?: boolean }

export const headerNav: NavLink[] = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Starter',
    links: [
      { label: 'Source', href: siteConfig.links.repository, external: true },
      { label: 'Use This Template', href: siteConfig.links.template, external: true },
      { label: 'Report An Issue', href: siteConfig.links.issues, external: true },
    ],
  },
  {
    title: 'On This Page',
    links: headerNav,
  },
  {
    title: '7Ovr',
    links: [
      { label: 'App Starter', href: siteConfig.links.appStarter, external: true },
      { label: 'Blocks', href: siteConfig.links.blocks, external: true },
      { label: 'X', href: siteConfig.links.x, external: true },
    ],
  },
]
