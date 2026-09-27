const repository = 'https://github.com/7ovr/shadcn-next-starter'

export const siteConfig = {
  name: '7Ovr Landing Starter',
  description:
    'A free Next.js landing page starter on shadcn/ui and Base UI, with SEO done right and a test for every promise.',
  author: { name: '7Ovr', url: 'https://7ovr.com' },
  links: {
    repository,
    template: 'https://github.com/new?template_name=shadcn-next-starter&template_owner=7ovr',
    issues: `${repository}/issues`,
    github: 'https://github.com/7ovr',
    x: 'https://x.com/7ovrui',
    appStarter: 'https://starter.7ovr.com',
    blocks: 'https://7ovr.com/blocks',
    presets: 'https://ui.shadcn.com/create',
  },
} as const
