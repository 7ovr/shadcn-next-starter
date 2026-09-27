import { type Page, expect, test } from '@playwright/test'

import { siteConfig } from '@/config/site'

// A production build minifies React's messages, so the error codes are what give a hydration failure away.
const HYDRATION = /hydrat|didn't match|#(418|423|425)/i

function collectErrors(page: Page) {
  const errors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  return errors
}

for (const reducedMotion of ['no-preference', 'reduce'] as const) {
  test(`the page hydrates without errors with reduced motion ${reducedMotion}`, async ({
    browser,
  }) => {
    const context = await browser.newContext({ reducedMotion })
    const page = await context.newPage()
    const errors = collectErrors(page)

    await page.goto('/')
    await page.mouse.wheel(0, 20_000)
    await page.waitForTimeout(1500)

    expect(errors.filter((error) => HYDRATION.test(error))).toEqual([])
    expect(errors).toEqual([])
    await context.close()
  })
}

test('the theme toggle and the D key switch the theme', async ({ page }) => {
  await page.goto('/')
  const isDark = () => page.evaluate(() => document.documentElement.classList.contains('dark'))
  const startsDark = await isDark()

  await page.getByRole('button', { name: 'Toggle Theme' }).click()
  await expect.poll(isDark).toBe(!startsDark)

  await page.keyboard.press('d')
  await expect.poll(isDark).toBe(startsDark)
})

test('the logo scrolls back to the top of the home page', async ({ page }) => {
  await page.goto('/')
  await page.mouse.wheel(0, 3000)
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0)

  await page.getByRole('banner').getByRole('link', { name: siteConfig.name }).click()
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0)
})

test('the copy button copies the clone command', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/')
  await page.getByRole('button', { name: 'Copy Command' }).click()

  await expect(page.getByRole('button', { name: 'Copied' })).toBeVisible()
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    `git clone ${siteConfig.links.repository}`,
  )
})

test.describe('on a phone', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('the menu opens, links through and hands focus back', async ({ page }) => {
    await page.goto('/')
    const trigger = page.locator('button[aria-label="Open Menu"]')
    await trigger.click()

    const menu = page.getByRole('dialog', { name: 'Menu' })
    await expect(menu).toBeVisible()
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')

    await page.keyboard.press('Escape')
    await expect(menu).toBeHidden()
    await expect(trigger).toBeFocused()

    await trigger.click()
    await menu.getByRole('link', { name: 'FAQ' }).click()
    await expect(menu).toBeHidden()
    await expect(page).toHaveURL(/#faq$/)
  })
})
