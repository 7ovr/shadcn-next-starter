import { CheckIcon, PencilIcon } from 'lucide-react'

import { GitHubIcon, VercelIcon } from '@/components/icons'
import { siteConfig } from '@/config/site'
import type { StepVisual as StepVisualName } from '@/content/steps'
import { cn } from '@/lib/utils'

function Frame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('rounded-xl border bg-background shadow-lg', className)}>{children}</div>
  )
}

function Clone() {
  const repository = siteConfig.links.repository.split('/').slice(-2).join('/')

  return (
    <Frame className="w-full max-w-56 p-3">
      <div className="flex items-center gap-2.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-lg border bg-muted/40">
          <GitHubIcon className="size-4" />
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="truncate text-xs font-semibold">{repository}</span>
          <span className="text-xs text-muted-foreground">Public Template</span>
        </span>
      </div>
      <span className="mt-3 flex h-7 animate-press items-center justify-center rounded-md bg-primary text-xs font-medium text-primary-foreground motion-reduce:animate-none">
        Use This Template
      </span>
    </Frame>
  )
}

const FILES = [
  { folder: 'config/', name: 'site.ts' },
  { folder: 'content/', name: 'hero.ts' },
  { folder: 'content/', name: 'features.ts' },
  { folder: 'content/', name: 'faq.ts' },
]

function Content() {
  return (
    <Frame className="relative w-full max-w-56 p-2 font-mono text-xs">
      <ul>
        {FILES.map((file) => (
          <li key={file.name} className="flex h-6 items-center px-2">
            <span className="text-muted-foreground">src/{file.folder}</span>
            {file.name}
          </li>
        ))}
      </ul>
      {/* One highlight for all four 1.5rem rows, so animate-hop-rows can walk it down the list. */}
      <span className="absolute inset-x-2 top-2 flex h-6 animate-hop-rows items-center justify-end rounded-md border border-foreground/25 bg-foreground/5 pr-2 motion-reduce:animate-none">
        <PencilIcon className="size-3" />
      </span>
    </Frame>
  )
}

const SWATCHES = [
  'bg-primary delay-0',
  'bg-chart-2 delay-350',
  'bg-chart-3 delay-700',
  'bg-chart-4 delay-1050',
  'bg-chart-5 delay-1400',
]

function Preset() {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="flex -space-x-2">
        {SWATCHES.map((swatch) => (
          <span
            key={swatch}
            className={cn(
              'size-9 animate-wave rounded-full ring-2 ring-background motion-reduce:animate-none',
              swatch,
            )}
          />
        ))}
      </span>
      <Frame className="px-3 py-1.5 font-mono text-xs">
        <span className="text-muted-foreground">shadcn apply </span>b4Wm
      </Frame>
    </div>
  )
}

function Deploy() {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="relative grid size-12 place-items-center rounded-xl border bg-background shadow-lg">
        <span className="absolute inset-0 animate-beacon rounded-xl border border-foreground/40 opacity-0 motion-reduce:animate-none" />
        <VercelIcon className="size-5" />
      </span>
      <Frame className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs">
        <span className="size-1.5 rounded-full bg-foreground" />
        your-domain.com
        <span className="flex items-center gap-1 text-muted-foreground">
          <CheckIcon className="size-3" />
          Indexable
        </span>
      </Frame>
    </div>
  )
}

const VISUALS = {
  clone: Clone,
  content: Content,
  preset: Preset,
  deploy: Deploy,
} satisfies Record<StepVisualName, () => React.ReactNode>

export function StepVisual({ name }: { name: StepVisualName }) {
  const Visual = VISUALS[name]
  return <Visual />
}
