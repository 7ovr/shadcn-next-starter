const repository = 'https://github.com/7ovr/shadcn-next-starter'

// Tags links to the rest of 7Ovr, so their analytics credit the visit to this site.
function referral(url: string): string {
  const tagged = new URL(url)
  tagged.searchParams.set('utm_source', 'landing')
  tagged.searchParams.set('utm_medium', 'referral')
  return tagged.toString()
}

export const siteConfig = {
  name: '7Ovr Landing Starter',
  title: 'Free Next.js Landing Page Template With shadcn/ui',
  description:
    'Clone a free Next.js landing page template with shadcn/ui. Customize the design and deploy with a sitemap, tested canonical URLs, and preview indexing checks.',
  // The share image's line under the headline.
  tagline: 'Static pages, customizable themes and tested metadata.',
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
  lastUpdated: '2026-11-20',
  author: { name: '7Ovr', url: 'https://7ovr.com' },
  xHandle: '@7ovrui',
  links: {
    repository,
    template: `${repository}/generate`,
    issues: `${repository}/issues`,
    github: 'https://github.com/7ovr',
    x: 'https://x.com/7ovrui',
    email: 'mailto:hello@7ovr.com',
    home: referral('https://7ovr.com'),
    appStarter: referral('https://starter.7ovr.com'),
    blocks: referral('https://7ovr.com/blocks'),
    templates: referral('https://7ovr.com/templates'),
    pro: referral('https://7ovr.com/blocks?tier=pro'),
    docs: referral('https://7ovr.com/docs'),
    changelog: referral('https://7ovr.com/changelog'),
    presets: 'https://ui.shadcn.com/create',
    quickStart: `${repository}#quick-start`,
    ci: `${repository}/actions/workflows/ci.yml`,
  },
} as const
