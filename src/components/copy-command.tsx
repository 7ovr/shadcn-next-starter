'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

export function CopyCommand({ command, highlight }: { command: string; highlight?: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const copied = status === 'copied'

  useEffect(() => {
    if (!copied) return
    const timeout = setTimeout(() => setStatus('idle'), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  const start = highlight ? command.lastIndexOf(highlight) : -1

  return (
    <div className="flex max-w-full min-w-0 flex-col gap-2">
      <div className="flex h-9 w-fit max-w-full items-center gap-2 rounded-lg border bg-linear-to-br from-muted to-background pr-1 pl-3 font-mono text-xs max-lg:h-11 pointer-coarse:h-11">
        <span aria-hidden="true" className="text-muted-foreground select-none">
          $
        </span>
        <code translate="no" title={command} className="min-w-0 flex-1 truncate text-left">
          {highlight && start > -1 ? (
            <>
              <span className="text-muted-foreground">{command.slice(0, start)}</span>
              {/* shimmer comes from shadcn's stylesheet and already stops under reduced motion. */}
              <span className="shimmer font-bold whitespace-nowrap shimmer-color-muted-foreground">
                {highlight}
              </span>
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
            if (!navigator.clipboard) {
              setStatus('failed')
              return
            }
            void navigator.clipboard.writeText(command).then(
              () => setStatus('copied'),
              () => setStatus('failed'),
            )
          }}
        >
          {copied ? <CheckIcon aria-hidden="true" /> : <CopyIcon aria-hidden="true" />}
        </Button>
      </div>
      <span role="status" className={status === 'failed' ? 'text-xs text-foreground' : 'sr-only'}>
        {copied ? 'Copied' : status === 'failed' ? 'Copy failed. Select and copy the command.' : ''}
      </span>
    </div>
  )
}
