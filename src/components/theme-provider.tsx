'use client'

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import * as React from 'react'

function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeColor />
      {children}
    </NextThemesProvider>
  )
}

function ThemeColor() {
  const { resolvedTheme } = useTheme()
  const colors = React.useRef<Record<string, string>>({})

  React.useEffect(() => {
    if (!resolvedTheme) return
    const metas = document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    if (Object.keys(colors.current).length === 0) {
      for (const meta of metas) colors.current[meta.media] = meta.content
    }
    const color = colors.current[`(prefers-color-scheme: ${resolvedTheme})`]
    if (color) for (const meta of metas) meta.content = color
  }, [resolvedTheme])

  return null
}

export { ThemeProvider }
