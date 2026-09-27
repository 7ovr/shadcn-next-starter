'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

export function CopyCommand({ command, highlight }: { command: string; highlight?: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timeout = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  const start = highlight ? command.lastIndexOf(highlight) : -1

  return (
    <div className="flex max-w-full items-center gap-2 rounded-lg border bg-card py-1 pr-1 pl-3 font-mono text-sm shadow-xs">
      <span aria-hidden="true" className="text-muted-foreground select-none">
        $
      </span>
      <code className="min-w-0 text-left wrap-anywhere">
        {highlight && start > -1 ? (
          <>
            <span className="text-muted-foreground">{command.slice(0, start)}</span>
            <span className="font-semibold">{highlight}</span>
            {command.slice(start + highlight.length)}
          </>
        ) : (
          command
        )}
      </code>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label={copied ? 'Copied' : 'Copy Command'}
        onClick={() => {
          // The clipboard API is missing outside secure contexts, and a refused write has nothing to show.
          navigator.clipboard?.writeText(command).then(
            () => setCopied(true),
            () => {},
          )
        }}
      >
        {copied ? <CheckIcon aria-hidden="true" /> : <CopyIcon aria-hidden="true" />}
      </Button>
      <span role="status" className="sr-only">
        {copied ? 'Copied' : ''}
      </span>
    </div>
  )
}
