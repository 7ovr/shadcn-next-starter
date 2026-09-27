import { defineConfig, devices } from '@playwright/test'

// The suite checks a fresh production build, served as a production deploy, or as a preview with E2E_PREVIEW set.
const preview = Boolean(process.env.E2E_PREVIEW)
const port = preview ? 3101 : 3100
const baseURL = `http://localhost:${port}`

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: { baseURL, trace: 'on-first-retry' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `pnpm build && pnpm start --port ${port}`,
    url: baseURL,
    env: { SITE_ENV: preview ? '' : 'production', SITE_URL: baseURL },
    reuseExistingServer: false,
    timeout: 300_000,
  },
})
