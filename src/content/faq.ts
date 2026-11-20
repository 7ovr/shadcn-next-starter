import { MessageCircleQuestionMarkIcon } from 'lucide-react'

import { siteConfig } from '@/config/site'

export type Faq = { question: string; answer: string }

// Plain strings, so the section and its FAQPage JSON-LD read one source. Backticks render as inline code.
export const faq = {
  eyebrow: { icon: MessageCircleQuestionMarkIcon, lead: 'Before You', emphasis: 'Clone It' },
  title: 'Questions & Answers',
  description: 'What ships in the starter, what it costs, and how it fits your stack.',
  contact: {
    title: 'Still have a question?',
    action: { label: 'Ask On GitHub', href: siteConfig.links.issues },
  },
  items: [
    {
      question: 'What is the 7Ovr Landing Starter?',
      answer:
        'A free, open-source Next.js 16 starter for landing pages, built on shadcn/ui and Base UI. It includes a prerendered example page, editable sections and automated checks for metadata and accessibility.',
    },
    {
      question: 'Is it free for commercial projects?',
      answer:
        'Yes. The MIT license allows commercial use. Keep the copyright and license notice with copies or substantial portions of the source.',
    },
    {
      question: 'What do I need installed?',
      answer:
        'Node 24 or newer and pnpm 12 or newer. There is no global CLI to install and no account to create.',
    },
    {
      question: 'What does tested mean here?',
      answer:
        'Playwright checks the built site for metadata, landmarks, readable content with JavaScript off, and noindex on preview deploys. CI also runs Lighthouse, unit tests, and lint, format and type checks.',
    },
    {
      question: 'Does the page work without JavaScript?',
      answer:
        'Yes. Every section and FAQ answer is in the server-rendered HTML. Interactive controls and optional analytics use JavaScript.',
    },
    {
      question: 'Where do I change the copy?',
      answer:
        'Site-wide details live in `src/config/site.ts`, and the copy lives in `src/content/`, one file per section. The sections only render what they are given.',
    },
    {
      question: 'Does it include auth, a database or analytics?',
      answer:
        'Vercel Web Analytics is included and off by default. Enable it in your Vercel project and set `ENABLE_VERCEL_ANALYTICS=true` for Production. Authentication and a database are up to your app.',
    },
    {
      question: 'How do I restyle it?',
      answer:
        'Build a preset on ui.shadcn.com/create and run `pnpm exec shadcn apply <code>`. Colors, radius and fonts all come from shadcn theme tokens, so every section follows.',
    },
    {
      question: 'Can I add 7Ovr blocks to it?',
      answer:
        'Yes. It is a standard shadcn/ui project, so all 540+ blocks install straight into it, source included: free ones with `pnpm exec shadcn add @7ovr/<name>`, Pro ones from `@7ovr-pro` with a license key.',
    },
    {
      question: 'Does it work with coding agents?',
      answer:
        'Yes. `CLAUDE.md` holds every convention and `AGENTS.md` points to it, so Claude Code, Codex and Cursor keep new pages and sections on the same patterns.',
    },
    {
      question: 'Where can I deploy it?',
      answer:
        'Vercel works with no setup. It is a standard Next.js app, so any host that runs `next start` works too; there, set `SITE_URL` and `SITE_ENV=production` before you build, so canonicals and indexing are right.',
    },
    {
      question: 'How do I keep it updated?',
      answer:
        'It is source you own, so nothing updates behind your back. Renovate keeps the dependencies current, and you pull in the upstream changes you want.',
    },
  ] satisfies Faq[],
}
