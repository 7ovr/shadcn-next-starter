import { describe, expect, it } from 'vitest'

import { cta } from '@/content/cta'
import { faq } from '@/content/faq'
import { features } from '@/content/features'
import { hero, stack } from '@/content/hero'
import { footerColumns, headerNav } from '@/content/navigation'
import { billingPeriods, pricing } from '@/content/pricing'
import { steps } from '@/content/steps'
import { testimonials } from '@/content/testimonials'

// Built from code points, so the rule against dashes holds in this file too.
const DASHES = new RegExp(`[${String.fromCharCode(0x2013, 0x2014)}]`)

// Every string in a piece of content, however deeply it is nested.
function strings(value: unknown): string[] {
  if (typeof value === 'string') return [value]
  if (Array.isArray(value)) return value.flatMap(strings)
  if (value && typeof value === 'object') return Object.values(value).flatMap(strings)
  return []
}

const sections = [hero, stack, features, steps, testimonials, pricing, faq, cta]

const labels = [
  ...sections.flatMap((section) => ('title' in section ? [section.title] : [])),
  ...sections.flatMap((section) =>
    'eyebrow' in section ? [section.eyebrow.lead, section.eyebrow.emphasis] : [],
  ),
  hero.primaryAction.label,
  hero.secondaryAction.label,
  cta.primaryAction.label,
  cta.secondaryAction.label,
  faq.contact.action.label,
  ...features.items.map((item) => item.title),
  ...features.extras.map((item) => item.title),
  ...steps.items.flatMap((step) => [step.title, step.result.label]),
  ...pricing.plans.flatMap((plan) => [plan.name, plan.action.label]),
  ...billingPeriods.map((period) => period.label),
  ...headerNav.map((link) => link.label),
  ...footerColumns.flatMap((column) => [column.title, ...column.links.map((link) => link.label)]),
].filter((label) => label !== hero.title)

describe('content', () => {
  it('never uses an em dash or an en dash', () => {
    const offenders = strings([...sections, headerNav, footerColumns]).filter((text) =>
      DASHES.test(text),
    )
    expect(offenders).toEqual([])
  })

  it('writes every label in Title Case', () => {
    const offenders = labels.filter((label) => label.split(' ').some((word) => /^[a-z]/.test(word)))
    expect(offenders).toEqual([])
  })

  it('prices every plan for every billing period', () => {
    const unpriced = pricing.plans.flatMap((plan) =>
      billingPeriods
        .filter((period) => typeof plan.prices[period.value] !== 'number')
        .map((period) => `${plan.name} ${period.value}`),
    )
    expect(unpriced).toEqual([])
  })

  it('keeps FAQ questions unique, because each one is its accordion value', () => {
    const questions = faq.items.map((item) => item.question)
    expect(new Set(questions).size).toBe(questions.length)
  })
})
