import {
  BotIcon,
  EyeOffIcon,
  FileTextIcon,
  LinkIcon,
  type LucideIcon,
  SearchCheckIcon,
} from 'lucide-react'

export type FeatureVisual =
  | 'prerender'
  | 'metadata'
  | 'structured-data'
  | 'og-images'
  | 'no-javascript'
  | 'presets'

export const features = {
  eyebrow: { icon: SearchCheckIcon, lead: 'The SEO', emphasis: 'Contract' },
  title: 'Everything A Landing Page Needs To Be Found',
  description:
    'Each promise maps to a test that runs in CI, so it stays true after you make the site your own.',
  items: [
    {
      visual: 'prerender',
      title: 'Prerendered, Every Route',
      description:
        'Every page is static HTML from the build. A dynamic API anywhere fails the build, not the crawl.',
    },
    {
      visual: 'metadata',
      title: 'Complete Metadata',
      description:
        'Titles, descriptions, canonicals, Open Graph and Twitter cards come from one helper, so no page ships half a head.',
    },
    {
      visual: 'structured-data',
      title: 'Structured Data That Matches',
      description:
        'JSON-LD is built from the same content as the page, and a test checks that the two agree.',
    },
    {
      visual: 'og-images',
      title: 'Generated Open Graph Images',
      description:
        'Every page type gets a 1200x630 card, drawn at build time from the same theme tokens as the site.',
    },
    {
      visual: 'no-javascript',
      title: 'Readable Without JavaScript',
      description:
        'Every section and every FAQ answer is in the HTML. Playwright checks the page with JavaScript switched off.',
    },
    {
      visual: 'presets',
      title: 'One Preset Restyles It All',
      description:
        'Colors, radius and fonts come from shadcn theme tokens, so `shadcn apply` restyles every section at once.',
    },
  ] satisfies { visual: FeatureVisual; title: string; description: string }[],
  extras: [
    {
      icon: FileTextIcon,
      title: 'Sitemap, Robots And RSS',
      description: 'Generated from the route list, with real dates.',
    },
    {
      icon: EyeOffIcon,
      title: 'Previews Stay Out Of Search',
      description: 'noindex in the meta tag and the header, never in robots.txt.',
    },
    {
      icon: LinkIcon,
      title: 'Clone-Safe URLs',
      description: 'A fresh deploy points its canonicals at its own domain.',
    },
    {
      icon: BotIcon,
      title: 'Built For Coding Agents',
      description: 'AGENTS.md and skills keep new pages on the same patterns.',
    },
  ] satisfies { icon: LucideIcon; title: string; description: string }[],
}
