import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { AppStarter } from '@/components/sections/app-starter/app-starter'
import { siteConfig } from '@/config/site'
import { appStarter } from '@/content/app-starter'

describe('AppStarter', () => {
  it('sends people building an app to the App Starter', () => {
    render(<AppStarter />)

    expect(screen.getByRole('link', { name: appStarter.action.label })).toHaveAttribute(
      'href',
      siteConfig.links.appStarter,
    )
    for (const highlight of appStarter.highlights) {
      expect(screen.getByText(highlight)).toBeInTheDocument()
    }
  })

  it('keeps the screenshots decorative', () => {
    const { container } = render(<AppStarter />)

    const images = [...container.querySelectorAll('img')]
    expect(images).toHaveLength(2)
    expect(images.filter((image) => image.getAttribute('alt') !== '')).toEqual([])
  })
})
