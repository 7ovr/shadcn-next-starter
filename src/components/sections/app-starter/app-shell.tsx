import { ChartColumnIcon, HouseIcon, type LucideIcon, SettingsIcon, TableIcon } from 'lucide-react'

import { LogoMark } from '@/components/icons'
import { cn } from '@/lib/utils'

const NAV: { icon: LucideIcon; width: string }[] = [
  { icon: HouseIcon, width: 'w-10' },
  { icon: TableIcon, width: 'w-12' },
  { icon: ChartColumnIcon, width: 'w-9' },
  { icon: SettingsIcon, width: 'w-11' },
]

const ROWS = ['w-20', 'w-16', 'w-24', 'w-14']

function Bar({ className }: { className?: string }) {
  return <span className={cn('block h-1.5 rounded-full bg-foreground/15', className)} />
}

// A small app shell, the kind of screen the App Starter begins with.
export function AppShell() {
  return (
    <div className="flex w-full max-w-md overflow-hidden rounded-xl border bg-background shadow-lg">
      <div className="hidden w-32 shrink-0 flex-col gap-1 border-r p-3 sm:flex">
        <span className="mb-2 flex items-center gap-1.5 text-xs font-semibold">
          <LogoMark className="size-3.5" />
          7Ovr
        </span>
        {NAV.map((item, index) => (
          <span
            key={item.width}
            className={cn(
              'flex items-center gap-2 rounded-md px-2 py-1.5',
              index === 1 && 'bg-foreground/5',
            )}
          >
            <item.icon className="size-3.5 shrink-0 text-muted-foreground" />
            <Bar className={item.width} />
          </span>
        ))}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <Bar className="h-2 w-20 bg-foreground/60" />
          <span className="h-5 w-12 rounded-md bg-primary" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['w-8', 'w-10', 'w-6'].map((width) => (
            <span key={width} className="flex flex-col gap-1.5 rounded-lg border p-2">
              <Bar className="w-3/4" />
              <Bar className={cn('h-2 bg-foreground/40', width)} />
            </span>
          ))}
        </div>
        <div className="relative rounded-lg border p-1.5">
          {ROWS.map((width) => (
            <span key={width} className="flex h-6 items-center gap-2 px-1.5">
              <span className="size-3.5 shrink-0 rounded-full bg-foreground/15" />
              <Bar className={width} />
              <span className="ml-auto h-3.5 w-9 rounded-full border" />
            </span>
          ))}
          {/* One highlight for all four 1.5rem rows, so animate-hop-rows can walk it down the table. */}
          <span className="absolute inset-x-1.5 top-1.5 h-6 animate-hop-rows rounded-md bg-foreground/5 motion-reduce:animate-none" />
        </div>
      </div>
    </div>
  )
}
