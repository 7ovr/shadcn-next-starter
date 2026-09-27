'use client'

import { CheckIcon } from 'lucide-react'
import { useState } from 'react'

import { ButtonLink } from '@/components/button-link'
import { Badge } from '@/components/ui/badge'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { type BillingPeriod, type Plan, billingPeriods } from '@/content/pricing'
import { cn } from '@/lib/utils'

function isBillingPeriod(value: unknown): value is BillingPeriod {
  return billingPeriods.some((period) => period.value === value)
}

export function PricingPlans({ plans }: { plans: Plan[] }) {
  const [period, setPeriod] = useState<BillingPeriod>(billingPeriods[0].value)
  const suffix = billingPeriods.find((option) => option.value === period)?.suffix

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="rounded-lg border bg-card p-1 shadow-xs">
        <ToggleGroup
          aria-label="Billing Period"
          value={[period]}
          onValueChange={(value) => {
            // Pressing the active option would clear the group; keep one period chosen.
            const [next] = value
            if (isBillingPeriod(next)) setPeriod(next)
          }}
        >
          {billingPeriods.map((option) => (
            <ToggleGroupItem key={option.value} value={option.value}>
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <ul className="grid w-full gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <li
            key={plan.name}
            className={cn(
              'flex reveal flex-col gap-6 rounded-2xl border bg-card p-6',
              plan.featured && 'shadow-xl ring-1 ring-foreground/15',
            )}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-heading text-lg font-semibold">{plan.name}</h3>
                {plan.featured ? <Badge>Most Popular</Badge> : null}
              </div>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>
            <p className="flex items-baseline gap-1">
              <span className="font-heading text-4xl font-bold tracking-tight">
                ${plan.prices[period]}
              </span>
              <span className="text-sm text-muted-foreground">{suffix}</span>
            </p>
            <ButtonLink
              href={plan.action.href}
              variant={plan.featured ? 'default' : 'outline'}
              size="lg"
            >
              {plan.action.label}
            </ButtonLink>
            <ul className="flex flex-col gap-2.5 border-t pt-6 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5">
                  <CheckIcon aria-hidden="true" className="size-4 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
