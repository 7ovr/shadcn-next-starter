import {
  BracesIcon,
  EyeOffIcon,
  FileCheckIcon,
  type LucideIcon,
  ScanSearchIcon,
} from 'lucide-react'

import { siteConfig } from '@/config/site'

export const cta = {
  eyebrow: { lead: 'Open Source,', emphasis: 'MIT Licensed' },
  title: 'Ship A Landing Page That Gets Found',
  description:
    'Clone the starter, make the words yours and deploy. The SEO is already done, and the tests keep it that way.',
  primaryAction: { label: 'Get The Starter', href: siteConfig.links.repository },
  secondaryAction: { label: 'Use This Template', href: siteConfig.links.template },
  cards: [
    { icon: FileCheckIcon, title: 'sitemap.xml', detail: 'Every route, with real dates' },
    { icon: ScanSearchIcon, title: 'robots.txt', detail: 'Search bots welcome' },
    { icon: BracesIcon, title: 'JSON-LD', detail: 'Organization and WebSite' },
    { icon: EyeOffIcon, title: 'Preview Deploy', detail: 'noindex, still crawlable' },
  ] satisfies { icon: LucideIcon; title: string; detail: string }[],
}
