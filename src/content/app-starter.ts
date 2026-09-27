import { siteConfig } from '@/config/site'
import appStarterDark from '@/content/images/app-starter-dark.webp'
import appStarterLight from '@/content/images/app-starter-light.webp'

export const appStarter = {
  title: 'The Perfect Start For Your Frontend',
  description:
    'Building an app, not a landing page? The 7Ovr App Starter is an open-source Vite and React starter on the same shadcn/ui and Base UI stack, with TanStack and strict TypeScript already wired. Clone it and write product code, not config.',
  highlights: [
    'Routing, data, forms and tables wired and tested',
    'Add any 7Ovr block with one shadcn command',
    'MIT licensed, frontend only, any backend',
  ],
  action: { label: 'Explore The App Starter', href: siteConfig.links.appStarter },
  images: { light: appStarterLight, dark: appStarterDark },
}
