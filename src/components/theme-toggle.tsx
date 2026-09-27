'use client'

import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'

import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const THEMES = [
  { value: 'light', label: 'Light', icon: SunIcon },
  { value: 'dark', label: 'Dark', icon: MoonIcon },
  { value: 'system', label: 'System', icon: MonitorIcon },
]

function subscribe() {
  return () => {}
}

// False on the server and during hydration, which cannot know the stored theme; true after that.
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle Theme"
      aria-keyshortcuts="d"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {/* Both icons render and the dark variant picks one, so the server HTML and the first client render match. */}
      <SunIcon aria-hidden="true" className="hidden dark:block" />
      <MoonIcon aria-hidden="true" className="dark:hidden" />
    </Button>
  )
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const hydrated = useHydrated()

  return (
    <div className="rounded-lg border bg-card p-0.5 shadow-xs">
      <ToggleGroup
        aria-label="Theme"
        size="sm"
        value={hydrated && theme ? [theme] : []}
        onValueChange={([next]) => {
          // Pressing the active theme would clear the group; keep one chosen.
          if (typeof next === 'string') setTheme(next)
        }}
      >
        {THEMES.map((option) => (
          <ToggleGroupItem key={option.value} value={option.value} aria-label={option.label}>
            <option.icon aria-hidden="true" />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
