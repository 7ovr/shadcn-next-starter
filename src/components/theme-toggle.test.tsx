import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderToString } from 'react-dom/server'
import { afterEach, describe, expect, it } from 'vitest'

import { ThemeProvider } from '@/components/theme-provider'
import { ThemeSwitcher } from '@/components/theme-toggle'

afterEach(() => {
  localStorage.clear()
  document.documentElement.className = ''
})

describe('ThemeSwitcher', () => {
  it('switches to the theme you pick and marks it as chosen', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Dark' }))

    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: 'Dark' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'System' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('keeps one theme chosen when the active one is pressed again', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Light' }))
    await user.click(screen.getByRole('button', { name: 'Light' }))

    expect(screen.getByRole('button', { name: 'Light' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('marks no theme on the server, which cannot know the stored one', () => {
    const html = renderToString(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>,
    )

    expect(html).not.toContain('aria-pressed="true"')
  })
})
