import { BookOpenCheckIcon, BotIcon, CircleCheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

// A hand-drawn arrow between two stops, mirrored when the path swings back left.
function LooseArrow({ flip = false, className }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('my-1 h-10 w-16 text-muted-foreground', flip && '-scale-x-100', className)}
    >
      <circle cx="8" cy="4" r="1.75" fill="currentColor" stroke="none" />
      <path d="M8 4C10 24 34 20 58 34" />
      <path d="M52.5 26.9 58 34 49.1 32.7" />
    </svg>
  )
}

function Stop({
  icon: Icon,
  label,
  detail,
  className,
}: {
  icon: React.ComponentType<{ className?: string }>
  label?: string
  detail: string
  className?: string
}) {
  return (
    <span
      className={cn(
        'flex items-center gap-2.5 rounded-lg border bg-linear-to-b from-card to-muted/40 px-3 py-2.5 shadow-sm',
        className,
      )}
    >
      <Icon className="size-4 shrink-0" />
      {label ? (
        <span className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium">{label}</span>
          <span className="truncate font-mono text-xs text-muted-foreground">{detail}</span>
        </span>
      ) : (
        <span className="text-sm">{detail}</span>
      )}
    </span>
  )
}

// The agent's turn, one stop at a time: animate-stop-2 and animate-stop-3 hold each part back until its cue.
export function AgentSession() {
  return (
    <div className="relative flex w-full max-w-xs flex-col items-start">
      <Stop icon={BotIcon} label="Your Agent" detail="“Add a changelog page”" />
      <div className="ml-6 flex flex-col items-start">
        <LooseArrow className="animate-stop-2 motion-reduce:animate-none" />
        <Stop
          icon={BookOpenCheckIcon}
          label="AGENTS.md"
          detail="content file, page, test"
          className="animate-stop-2 motion-reduce:animate-none"
        />
      </div>
      <div className="flex flex-col items-start">
        <LooseArrow flip className="ml-12 animate-stop-3 motion-reduce:animate-none" />
        <Stop
          icon={CircleCheckIcon}
          detail="Added /changelog, every check passes"
          className="animate-stop-3 motion-reduce:animate-none"
        />
      </div>
    </div>
  )
}
