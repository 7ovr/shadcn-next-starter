import { TagIcon } from 'lucide-react'

export type BillingPeriod = 'monthly' | 'yearly'

export type Plan = {
  name: string
  description: string
  prices: Record<BillingPeriod, number>
  features: string[]
  action: { label: string; href: string }
  featured?: boolean
}

export const billingPeriods: { value: BillingPeriod; label: string; suffix: string }[] = [
  { value: 'monthly', label: 'Monthly', suffix: '/month' },
  { value: 'yearly', label: 'Yearly', suffix: '/year' },
]

// Sample plans that show the section; the server renders the first period, so crawlers see real prices.
export const pricing = {
  eyebrow: { icon: TagIcon, lead: 'Sample Plans,', emphasis: 'Monthly Or Yearly' },
  title: 'Pricing That Renders On The Server',
  description:
    'Swap these sample plans for yours in `src/content/pricing.ts`. The default period is in the HTML, and the toggle only changes what is on screen.',
  plans: [
    {
      name: 'Hobby',
      description: 'For a first launch page.',
      prices: { monthly: 0, yearly: 0 },
      features: ['One landing page', 'Blog with RSS', 'Community support'],
      action: { label: 'Start Free', href: '#pricing' },
    },
    {
      name: 'Growth',
      description: 'For a product that is finding its audience.',
      prices: { monthly: 19, yearly: 190 },
      features: ['Unlimited pages', 'Custom domain', 'Email support', 'Preview deploys'],
      action: { label: 'Choose Growth', href: '#pricing' },
      featured: true,
    },
    {
      name: 'Scale',
      description: 'For teams running several sites.',
      prices: { monthly: 49, yearly: 490 },
      features: ['Everything in Growth', 'Five team seats', 'Priority support'],
      action: { label: 'Choose Scale', href: '#pricing' },
    },
  ] satisfies Plan[],
}
