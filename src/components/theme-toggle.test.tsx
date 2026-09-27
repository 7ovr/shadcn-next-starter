import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'

import { ThemeProvider } from '@/components/theme-provider'
import { FooterThemeToggle } from '@/components/theme-toggle'

afterEach(() => {
  localStorage.clear()
  document.documentElement.className = ''
})

describe('FooterThemeToggle', () => {
  it('switches between light and dark, and names its keyboard shortcut', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <FooterThemeToggle />
      </ThemeProvider>,
    )
    const toggle = screen.getByRole('button', { name: /Toggle Theme/ })

    expect(toggle).toHaveAttribute('aria-keyshortcuts', 'd')
    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    await user.click(toggle)
    expect(document.documentElement).toHaveClass('light')
  })
})
