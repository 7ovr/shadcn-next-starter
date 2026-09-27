const repository = 'https://github.com/7ovr/shadcn-next-starter'

export const siteConfig = {
  name: '7Ovr Landing Starter',
  // The search result title and snippet, kept near 60 and 155 characters so neither truncates.
  title: 'Next.js Landing Page Template With shadcn/ui',
  description:
    'A free, open-source Next.js landing page template on shadcn/ui and Base UI, with static pages, complete SEO, accessibility, theming and tests wired.',
  keywords: [
    '7Ovr',
    'Next.js landing page template',
    'Next.js landing page starter',
    'shadcn/ui landing page',
    'shadcn/ui template',
    'Next.js template',
    'landing page template',
    'Base UI',
    'Tailwind CSS',
  ],
  // Bump when the page copy changes; the sitemap reports it as lastmod.
  lastUpdated: '2026-09-27',
  author: { name: '7Ovr', url: 'https://7ovr.com' },
  xHandle: '@7ovrui',
  links: {
    repository,
    template: `${repository}/generate`,
    issues: `${repository}/issues`,
    github: 'https://github.com/7ovr',
    x: 'https://x.com/7ovrui',
    appStarter: 'https://starter.7ovr.com',
    blocks: 'https://7ovr.com/blocks',
    presets: 'https://ui.shadcn.com/create',
  },
} as const
