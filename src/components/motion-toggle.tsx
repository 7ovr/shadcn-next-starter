'use client'

import { PauseIcon, PlayIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

export function MotionToggle() {
  const [paused, setPaused] = useState(false)
  const label = paused ? 'Resume Animations' : 'Pause Animations'

  return (
    <span data-motion-control className="motion-reduce:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={label}
        aria-pressed={paused}
        title={label}
        onClick={() => {
          const next = !paused
          document.documentElement.toggleAttribute('data-motion-paused', next)
          setPaused(next)
        }}
      >
        {paused ? <PlayIcon aria-hidden="true" /> : <PauseIcon aria-hidden="true" />}
      </Button>
    </span>
  )
}
