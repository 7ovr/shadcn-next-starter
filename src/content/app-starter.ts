import { AppWindowIcon } from 'lucide-react'

import { siteConfig } from '@/config/site'

const appRepository = 'https://github.com/7ovr/shadcn-vite-starter'

export const appStarter = {
  eyebrow: { icon: AppWindowIcon, lead: 'Also From', emphasis: '7Ovr' },
  title: 'Building An App, Not A Landing Page?',
  description:
    'The 7Ovr App Starter puts the same shadcn/ui and Base UI stack on Vite, with TanStack Router, Query, Form and Table, strict TypeScript and Vitest already wired. Clone it and start on the product.',
  action: { label: 'Explore The App Starter', href: siteConfig.links.appStarter },
  command: `git clone ${appRepository}`,
  commandHighlight: appRepository.split('/').pop(),
}
