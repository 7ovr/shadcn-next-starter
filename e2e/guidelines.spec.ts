import { expect, test } from '@playwright/test'

for (const width of [320, 390]) {
  test(`the menu label stays clear of its close button at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 })
    await page.goto('/')
    await page.getByRole('button', { name: 'Open Menu' }).click()
    const menu = page.getByRole('dialog', { name: 'Menu', exact: true })
    const label = await menu.getByText('Landing', { exact: true }).boundingBox()
    const close = await menu.getByRole('button', { name: 'Close', exact: true }).boundingBox()
    expect(label).not.toBeNull()
    expect(close).not.toBeNull()
    expect((label?.x ?? 0) + (label?.width ?? 0) + 12).toBeLessThanOrEqual(close?.x ?? 0)
  })
}

test('mobile controls have generous targets without overflowing the page', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  const undersized = () =>
    page.locator('a[href], button').evaluateAll((controls) =>
      controls.flatMap((control) => {
        const box = control.getBoundingClientRect()
        if (!box.width || !box.height || control.classList.contains('sr-only')) return []
        return box.width < 44 || box.height < 44
          ? [
              {
                name: control.getAttribute('aria-label') ?? control.textContent,
                width: box.width,
                height: box.height,
              },
            ]
          : []
      }),
    )
  expect(await undersized()).toEqual([])
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  await page.getByRole('button', { name: 'Open Menu' }).click()
  await expect(page.getByRole('dialog', { name: 'Menu', exact: true })).toBeVisible()
  expect(await undersized()).toEqual([])
})

test('controls only transition explicit properties', async ({ page }) => {
  await page.goto('/')
  const broad = () =>
    page.locator('a, button').evaluateAll((controls) =>
      controls.flatMap((control) => {
        const style = getComputedStyle(control)
        return style.transitionProperty === 'all' && style.transitionDuration !== '0s'
          ? [control.getAttribute('aria-label') ?? control.textContent]
          : []
      }),
    )
  expect(await broad()).toEqual([])
  await page.setViewportSize({ width: 390, height: 844 })
  await page.getByRole('button', { name: 'Open Menu' }).click()
  await expect(page.getByRole('dialog', { name: 'Menu', exact: true })).toBeVisible()
  expect(await broad()).toEqual([])
})

test('a keyboard control pauses and resumes every decorative loop', async ({ page }) => {
  await page.goto('/')
  const toggle = page.getByRole('button', { name: 'Pause Animations' })
  await toggle.focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('button', { name: 'Resume Animations' })).toHaveAttribute(
    'aria-pressed',
    'true',
  )

  const runningLoops = () =>
    page.evaluate(
      () =>
        document
          .getAnimations()
          .filter(
            (animation) =>
              animation.effect?.getTiming().iterations === Number.POSITIVE_INFINITY &&
              animation.playState === 'running',
          ).length,
    )
  await expect.poll(runningLoops).toBe(0)
  await page.keyboard.press('Enter')
  await expect(toggle).toHaveAttribute('aria-pressed', 'false')
  await expect.poll(runningLoops).toBeGreaterThan(0)
})

test('reduced motion stops animation without hiding meaningful content', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  expect(
    await page.evaluate(
      () =>
        document.getAnimations().filter((animation) => animation.playState === 'running').length,
    ),
  ).toBe(0)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Pause Animations' })).toBeHidden()
})

test('the theme shortcut is scoped to its focused control', async ({ page }) => {
  await page.goto('/')
  const theme = () => page.evaluate(() => document.documentElement.classList.contains('dark'))
  const initial = await theme()
  await page.keyboard.press('d')
  expect(await theme()).toBe(initial)
  await page.getByRole('button', { name: 'Toggle Theme' }).focus()
  await page.keyboard.press('d')
  await expect.poll(theme).toBe(!initial)
})

test('the browser theme color follows a manual theme change', async ({ page }) => {
  await page.goto('/')
  const colors = () =>
    page
      .locator('meta[name="theme-color"]')
      .evaluateAll((nodes) => nodes.map((node) => node.getAttribute('content')))
  const initial = await colors()
  expect(initial.length).toBeGreaterThan(0)
  await page.getByRole('button', { name: 'Toggle Theme' }).click()
  await expect.poll(colors).not.toEqual(initial)
})

test('commands stay verbatim when browser translation is enabled', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('code').first()).toHaveAttribute('translate', 'no')
})

test('an expanded FAQ can be shared and restored with Back', async ({ page }) => {
  await page.goto('/')
  const questions = page.locator('#faq').getByRole('button')
  await questions.nth(1).click()
  const sharedUrl = page.url()
  expect(new URL(sharedUrl).hash).toContain('#faq-')
  await page.reload()
  await expect(questions.nth(1)).toHaveAttribute('aria-expanded', 'true')
  await questions.nth(2).click()
  await page.goBack()
  await expect(questions.nth(1)).toHaveAttribute('aria-expanded', 'true')
})
