import { SectionHeading } from '@/components/section-heading'
import { PricingPlans } from '@/components/sections/pricing/pricing-plans'
import { pricing } from '@/content/pricing'

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          titleId="pricing-title"
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
        />
        <PricingPlans plans={pricing.plans} />
      </div>
    </section>
  )
}
