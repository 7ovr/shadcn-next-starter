import type { Metadata } from 'next'
import { Geist_Mono, Oxanium } from 'next/font/google'

import './globals.css'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const oxanium = Oxanium({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn('antialiased', fontMono.variable, 'font-sans', oxanium.variable)}
    >
      <body>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only rounded-md bg-background px-3 py-2 text-sm font-medium shadow-md ring-2 ring-ring focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
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
