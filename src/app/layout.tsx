import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import type { Viewport } from 'next'
import { Geist_Mono, Oxanium } from 'next/font/google'

import './globals.css'
import { JsonLd } from '@/components/json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThemeProvider } from '@/components/theme-provider'
import { createMetadata } from '@/lib/metadata'
import { siteSchemas } from '@/lib/structured-data'
import { readRootTokens, toHex } from '@/lib/theme-tokens'
import { cn } from '@/lib/utils'

const oxanium = Oxanium({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

// Site-wide defaults with no canonical, so a page that forgets its own metadata never claims to be the home page.
export const metadata = createMetadata({})

export async function generateViewport(): Promise<Viewport> {
  const css = await readFile(join(process.cwd(), 'src/app/globals.css'), 'utf8')
  return {
    viewportFit: 'cover',
    themeColor: ([':root', '.dark'] as const).map((selector) => {
      const background = readRootTokens(css, selector).background
      return {
        media: `(prefers-color-scheme: ${selector === ':root' ? 'light' : 'dark'})`,
        color: toHex(background) ?? background,
      }
    }),
  }
}

// Every route prerenders; a Request-time API anywhere fails the build instead of the crawl.
export const dynamic = 'error'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('antialiased', fontMono.variable, 'font-sans', oxanium.variable)}
    >
      <body>
        <JsonLd data={siteSchemas()} />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only rounded-md bg-background text-sm font-medium shadow-md ring-2 ring-ring focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2"
          >
            Skip To Content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
