import { MessageCircleQuestionMarkIcon } from 'lucide-react'

import { siteConfig } from '@/config/site'

export type Faq = { question: string; answer: string }

// Plain strings, so the section and its FAQPage JSON-LD read one source. Backticks render as inline code.
export const faq = {
  eyebrow: { icon: MessageCircleQuestionMarkIcon, lead: 'Before You', emphasis: 'Clone It' },
  title: 'Frequently Asked Questions',
  description: 'What ships in the starter, what it costs, and how it fits your stack.',
  contact: {
    title: 'Still have a question?',
    action: { label: 'Ask On GitHub', href: siteConfig.links.issues },
  },
  items: [
    {
      question: 'What is the 7Ovr Landing Starter?',
      answer:
        'A free, open-source Next.js 16 starter for landing pages, built on shadcn/ui and Base UI. Every page is prerendered, and every SEO promise it makes is covered by a test.',
    },
    {
      question: 'Is it free for commercial projects?',
      answer:
        'Yes. It is MIT licensed, so you can use it for client work and commercial products, and you owe nothing back.',
    },
    {
      question: 'What does tested SEO mean here?',
      answer:
        'Each promise has a test: metadata and JSON-LD on every route, crawlable HTML with JavaScript off, valid robots, sitemap and feed files, and noindex on preview deploys. CI runs them on every push.',
    },
    {
      question: 'Does the page work without JavaScript?',
      answer:
        'Yes. Every section and every FAQ answer is in the server-rendered HTML. JavaScript only adds the theme switch, the mobile menu and the copy button.',
    },
    {
      question: 'How do I restyle it?',
      answer:
        'Build a preset on ui.shadcn.com/create and run `pnpm dlx shadcn@latest apply <code>`. Colors, radius and fonts all come from shadcn theme tokens, so every section follows.',
    },
    {
      question: 'Where do I change the copy?',
      answer:
        'Site-wide details live in `src/config/site.ts`, and every word on the page lives in `src/content/`. The sections only render what they are given.',
    },
    {
      question: 'Can I deploy it somewhere other than Vercel?',
      answer:
        'Yes. It is a standard Next.js app, so any host that runs `next start` works. Set `SITE_URL` and `SITE_ENV=production` so canonicals and indexing are right.',
    },
    {
      question: 'Does it include auth, a database or analytics?',
      answer:
        'No. It is a marketing site with no server code of its own. For an app, pair it with the 7Ovr App Starter; for a form or analytics, add your own.',
    },
    {
      question: 'Does it work with coding agents?',
      answer:
        'Yes. `AGENTS.md` holds every convention and `CLAUDE.md` imports it, so Claude Code, Codex and Cursor keep new pages and sections on the same SEO patterns.',
    },
    {
      question: 'Can I add 7Ovr blocks to it?',
      answer:
        'Yes. It is a standard shadcn/ui project, so `pnpm dlx shadcn@latest add @7ovr/<name>` installs a block straight into it.',
    },
  ] satisfies Faq[],
}
