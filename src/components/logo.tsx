import { Syne } from 'next/font/google'

import { LogoMark } from '@/components/icons'
import { cn } from '@/lib/utils'

// Syne is loaded here for the wordmark alone, so a preset's font change leaves the brand as it is.
const wordmark = Syne({ subsets: ['latin'], weight: '700' })

export function Logo() {
  return (
    <span className="flex items-center gap-2 text-foreground">
      <LogoMark className="size-6 shrink-0" />
      <span className={cn(wordmark.className, 'text-2xl leading-none tracking-tight')}>7Ovr</span>
      <span aria-hidden="true" className="text-sm text-muted-foreground">
        /
      </span>
      <span className="text-sm font-medium text-muted-foreground">Landing</span>
    </span>
  )
}
