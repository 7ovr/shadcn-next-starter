import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/config/site'
import { headerNav } from '@/content/navigation'

describe('SiteHeader', () => {
  it('links the brand home and every nav entry to its section', () => {
    render(<SiteHeader />)

    expect(screen.getByRole('link', { name: siteConfig.name })).toHaveAttribute('href', '/')
    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of headerNav) {
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('sends Get The Starter to the repository', () => {
    render(<SiteHeader />)

    expect(screen.getByRole('link', { name: 'Get The Starter' })).toHaveAttribute(
      'href',
      siteConfig.links.repository,
    )
  })
})
