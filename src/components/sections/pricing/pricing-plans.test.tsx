import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { PricingPlans } from '@/components/sections/pricing/pricing-plans'
import { pricing } from '@/content/pricing'

describe('PricingPlans', () => {
  it('switches every plan to the yearly price and back', async () => {
    const user = userEvent.setup()
    render(<PricingPlans plans={pricing.plans} />)

    await user.click(screen.getByRole('button', { name: 'Yearly' }))

    for (const plan of pricing.plans) {
      expect(screen.getByText(`$${plan.prices.yearly}`)).toBeInTheDocument()
    }
    expect(screen.getAllByText('/year')).toHaveLength(pricing.plans.length)

    await user.click(screen.getByRole('button', { name: 'Monthly' }))

    expect(screen.getAllByText('/month')).toHaveLength(pricing.plans.length)
  })

  it('keeps a period chosen when the active one is pressed again', async () => {
    const user = userEvent.setup()
    render(<PricingPlans plans={pricing.plans} />)

    await user.click(screen.getByRole('button', { name: 'Monthly' }))

    expect(screen.getByRole('button', { name: 'Monthly' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getAllByText('/month')).toHaveLength(pricing.plans.length)
  })
})
