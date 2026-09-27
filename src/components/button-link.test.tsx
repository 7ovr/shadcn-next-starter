import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ButtonLink } from '@/components/button-link'

describe('ButtonLink', () => {
  it('opens an external link in a new tab without a referrer', () => {
    render(<ButtonLink href="https://github.com/7ovr">Source</ButtonLink>)

    const link = screen.getByRole('link', { name: 'Source' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('keeps an internal link in the same tab', () => {
    render(<ButtonLink href="/#pricing">Pricing</ButtonLink>)

    const link = screen.getByRole('link', { name: 'Pricing' })
    expect(link).toHaveAttribute('href', '/#pricing')
    expect(link).not.toHaveAttribute('target')
  })

  it("keeps the outline variant's border instead of the transparent base one", () => {
    render(
      <ButtonLink href="/" variant="outline">
        Home
      </ButtonLink>,
    )

    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toHaveClass('border-border')
    expect(link).not.toHaveClass('border-transparent')
  })
})
