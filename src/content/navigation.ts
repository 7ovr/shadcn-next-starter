import { siteConfig } from '@/config/site'

export type NavLink = { label: string; href: string }

// The one action the header offers, beside the menu on phones.
export const headerAction = { label: 'Get The Starter', href: siteConfig.links.repository }

export const headerNav: NavLink[] = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Coding Agents', href: '/#agents' },
  { label: 'Vite Starter', href: '/#vite-starter' },
  { label: 'Questions & Answers', href: '/#faq' },
]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Starter',
    links: [
      { label: 'Source', href: siteConfig.links.repository },
      { label: 'Use This Template', href: siteConfig.links.template },
      { label: 'Report An Issue', href: siteConfig.links.issues },
    ],
  },
  {
    title: 'On This Page',
    links: headerNav,
  },
  {
    title: '7Ovr',
    links: [
      { label: 'Vite Starter', href: siteConfig.links.appStarter },
      { label: 'Blocks', href: siteConfig.links.blocks },
      { label: 'X', href: siteConfig.links.x },
    ],
  },
]

export const footerNote = { credit: 'Built by', license: 'MIT licensed' }
