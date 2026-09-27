import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

// Each row prints 250ms after the one before, in step with the illus-feed cover that reveals it.
const STEPS = [
  { action: 'Read', target: 'AGENTS.md', detail: '', delay: 'delay-0', tick: 'delay-100' },
  {
    action: 'Create',
    target: 'src/content/changelog.ts',
    detail: '+18',
    delay: 'delay-250',
    tick: 'delay-350',
  },
  {
    action: 'Create',
    target: 'src/app/changelog/page.tsx',
    detail: '+31',
    delay: 'delay-500',
    tick: 'delay-600',
  },
  {
    action: 'Edit',
    target: 'src/content/navigation.ts',
    detail: '+2',
    delay: 'delay-750',
    tick: 'delay-850',
  },
  {
    action: 'Run',
    target: 'pnpm test',
    detail: '26 passed',
    delay: 'delay-1000',
    tick: 'delay-1100',
  },
  {
    action: 'Run',
    target: 'pnpm lint',
    detail: '0 problems',
    delay: 'delay-1250',
    tick: 'delay-1350',
  },
  {
    action: 'Run',
    target: 'pnpm build',
    detail: '/changelog prerendered',
    delay: 'delay-1500',
    tick: 'delay-1600',
  },
]

export function AgentSession() {
  return (
    <div className="@container w-full overflow-hidden rounded-xl border bg-background text-xs shadow-md">
      <div className="flex h-7 items-center gap-3 border-b px-3">
        <span className="flex gap-1">
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
        </span>
        <span className="font-mono text-muted-foreground">~/shadcn-next-starter</span>
        <span className="ml-auto text-muted-foreground">Agent</span>
      </div>
      <div className="flex flex-col gap-2 px-3 pt-3 pb-2">
        <p className="flex items-center gap-2 rounded-md border bg-card px-3 py-2 shadow-xs">
          <span className="font-mono text-muted-foreground">&gt;</span>
          Add a changelog page
        </p>
        <div className="relative overflow-hidden font-mono">
          <ol className="animate-illus-clear motion-reduce:animate-none">
            {STEPS.map((step) => (
              <li
                key={step.target}
                className={cn(
                  'flex h-5.5 animate-illus-rise items-center gap-2 motion-reduce:animate-none',
                  step.delay,
                )}
              >
                <span
                  className={cn(
                    'grid size-4 shrink-0 animate-illus-pop place-items-center motion-reduce:animate-none',
                    step.tick,
                  )}
                >
                  <CheckIcon className="size-3.5" strokeWidth={2.5} />
                </span>
                <span className="w-12 shrink-0 text-muted-foreground @max-md:hidden">
                  {step.action}
                </span>
                <span className="shrink-0">{step.target}</span>
                {step.detail ? (
                  <span
                    className={cn(
                      'ml-auto min-w-0 truncate pl-3 text-muted-foreground',
                      step.detail.startsWith('+') && '@max-md:hidden',
                    )}
                  >
                    {step.detail}
                  </span>
                ) : null}
              </li>
            ))}
            <li className="flex h-5.5 animate-illus-rise items-center gap-2 font-sans delay-1750 motion-reduce:animate-none">
              <span className="grid size-4 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <CheckIcon className="size-2.5" strokeWidth={3.5} />
              </span>
              <span className="font-medium">Done</span>
              <span className="truncate text-muted-foreground">/changelog is live.</span>
            </li>
          </ol>
          <div className="absolute inset-0 animate-illus-feed bg-background opacity-0 motion-reduce:animate-none">
            <p className="flex h-5.5 items-center gap-2 text-muted-foreground">
              <span className="grid size-4 place-items-center">
                <span className="size-2 animate-pulse rounded-full bg-foreground motion-reduce:animate-none" />
              </span>
              Working…
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
