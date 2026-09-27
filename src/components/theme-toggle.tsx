'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kbd'

function useToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme()
  return () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
}

// Both icons render and the dark variant picks one, so the server HTML and the first client render match.
function ThemeIcon() {
  return (
    <>
      <SunIcon aria-hidden="true" className="hidden dark:block" />
      <MoonIcon aria-hidden="true" className="dark:hidden" />
    </>
  )
}

export function ThemeToggle() {
  const toggleTheme = useToggleTheme()

  return (
    <Button variant="ghost" size="icon" aria-label="Toggle Theme" onClick={toggleTheme}>
      <ThemeIcon />
    </Button>
  )
}

export function FooterThemeToggle() {
  const toggleTheme = useToggleTheme()

  return (
    <Button variant="outline" aria-keyshortcuts="d" onClick={toggleTheme}>
      <ThemeIcon />
      Toggle Theme
      <Kbd>D</Kbd>
    </Button>
  )
}
