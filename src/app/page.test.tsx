import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Home from '@/app/page'
import { faq } from '@/content/faq'
import { hero } from '@/content/hero'
import { headerNav } from '@/content/navigation'
import { stripInlineCode } from '@/lib/inline-code'

describe('home page', () => {
  it('has one h1 and never skips a heading level', () => {
    render(<Home />)

    const levels = screen.getAllByRole('heading').map((heading) => Number(heading.tagName[1]))
    const steps = levels.slice(1).map((level, index) => level - levels[index]!)
    expect(levels.filter((level) => level === 1)).toHaveLength(1)
    expect(Math.max(...steps)).toBeLessThanOrEqual(1)
  })

  it('reads the hero headline as one sentence around its emphasis', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.title)
  })

  it('has a section for every link in the header', () => {
    const { container } = render(<Home />)

    const missing = headerNav.filter((link) => !container.querySelector(link.href.slice(1)))
    expect(missing).toEqual([])
  })

  it('keeps every FAQ answer in the HTML, with closed ones hidden until found', () => {
    render(<Home />)

    const panels = faq.items.map((item) => {
      const answer = screen.getByText(
        (_, element) =>
          element?.tagName === 'P' && element.textContent === stripInlineCode(item.answer),
      )
      return answer.closest('[data-slot="accordion-content"]')?.getAttribute('hidden')
    })
    expect(panels).toEqual(faq.items.map((_, index) => (index === 0 ? null : 'until-found')))
  })
})
