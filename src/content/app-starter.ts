import { siteConfig } from '@/config/site'
import appStarterDark from '@/content/images/app-starter-dark.webp'
import appStarterLight from '@/content/images/app-starter-light.webp'

export const appStarter = {
  title: 'Building The App Behind Your Landing Page?',
  description:
    'Give it a modern frontend from the 7Ovr App Starter: a free Vite and React starter on the same shadcn/ui and Base UI stack, with TanStack Router, Query, Form and Table and strict TypeScript already wired.',
  highlights: [
    'One preset styles the app and its landing page alike',
    'Routing, data, forms and tables wired and tested',
    'Free, MIT licensed and ready for any backend',
  ],
  action: { label: 'Explore The App Starter', href: siteConfig.links.appStarter },
  images: { light: appStarterLight, dark: appStarterDark },
}
