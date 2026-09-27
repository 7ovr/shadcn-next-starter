import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Stack } from '@/components/sections/stack/stack'
import { stack } from '@/content/hero'

describe('Stack', () => {
  it('lists every tool once, keeping the marquee copy from screen readers', () => {
    render(<Stack />)

    const items = within(screen.getByRole('list')).getAllByRole('listitem')
    expect(items.map((item) => item.textContent)).toEqual([...stack.items])
  })
})
