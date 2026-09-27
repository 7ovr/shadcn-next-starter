import { QuoteIcon } from 'lucide-react'

export type Testimonial = { quote: string; name: string; role: string }

// Samples that show the layout. Replace them with real quotes, used with permission.
export const testimonials = {
  eyebrow: { icon: QuoteIcon, lead: 'Sample Quotes,', emphasis: 'Swap In Yours' },
  title: 'Ready For Real Quotes',
  description:
    'These quotes are samples. Replace them in `src/content/testimonials.ts` with real ones, used with permission; they stay plain text and never become review markup.',
  items: [
    {
      quote:
        'We shipped the launch page in an afternoon, and the preview deploys never showed up in search.',
      name: 'Maya Chen',
      role: 'Founder, Example Labs',
    },
    {
      quote:
        'Restyling it for our brand was one preset code. Every section followed, the pricing toggle included.',
      name: 'Tom Okafor',
      role: 'Designer, Sample Studio',
    },
    {
      quote:
        'Our agent added a new section and the SEO tests told it what it missed before the pull request.',
      name: 'Lena Novak',
      role: 'Engineer, Placeholder Inc.',
    },
  ] satisfies Testimonial[],
}
