type Env = Record<string, string | undefined>

// SITE_URL wins, then Vercel's production domain, so a fresh clone never points at the demo.
export function getSiteUrl(env: Env = process.env): string {
  if (env.SITE_URL) return env.SITE_URL.replace(/\/+$/, '')
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  return 'http://localhost:3000'
}

// Only production belongs in search: Vercel's production deploys, or any host that sets SITE_ENV=production.
export function isIndexable(env: Env = process.env): boolean {
  return env.SITE_ENV === 'production' || env.VERCEL_ENV === 'production'
}
