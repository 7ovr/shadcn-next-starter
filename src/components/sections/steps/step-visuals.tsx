import { CheckIcon } from 'lucide-react'

import { VercelIcon } from '@/components/icons'
import { siteConfig } from '@/config/site'
import type { StepVisual as StepVisualName } from '@/content/steps'
import { cn } from '@/lib/utils'

function Panel({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('overflow-hidden rounded-lg border bg-background shadow-sm', className)}>
      {children}
    </div>
  )
}

function WindowBar({
  title,
  status,
  className,
}: {
  title: string
  status?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex h-6 items-center gap-2 border-b px-3', className)}>
      <span className="flex gap-1">
        <span className="size-1.5 rounded-full bg-muted-foreground/30" />
        <span className="size-1.5 rounded-full bg-muted-foreground/30" />
        <span className="size-1.5 rounded-full bg-muted-foreground/30" />
      </span>
      <span className="text-muted-foreground">{title}</span>
      {status}
    </div>
  )
}

function Prompt() {
  return <span className="text-muted-foreground">$ </span>
}

function Caret() {
  return (
    <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-caret-blink bg-foreground/80 motion-reduce:animate-none" />
  )
}

// The clone URL may only wrap after a slash, so a narrow terminal never splits a word.
function RepositoryUrl() {
  const [scheme, , host, owner, name] = siteConfig.links.repository.split('/')

  return (
    <>
      {`${scheme}//${host}/`}
      <wbr />
      {`${owner}/`}
      <wbr />
      {name}
    </>
  )
}

function Clone() {
  return (
    <Panel className="@container w-full font-mono text-xs">
      <WindowBar
        title="zsh"
        className="@max-3xs:hidden"
        status={
          <span className="ml-auto animate-illus-clear font-sans motion-reduce:animate-none">
            <span className="flex animate-illus-pop items-center gap-1.5 delay-1100 motion-reduce:animate-none">
              <span className="size-1.5 rounded-full bg-foreground" />
              Ready
            </span>
          </span>
        }
      />
      <div className="relative px-3 py-2 leading-4.5">
        <p className="absolute inset-x-3 top-2 animate-illus-idle opacity-0 motion-reduce:animate-none">
          <Prompt />
          <Caret />
        </p>
        <div className="animate-illus-clear motion-reduce:animate-none">
          <p className="animate-illus-rise motion-reduce:animate-none">
            <Prompt />
            git clone <RepositoryUrl />
          </p>
          <p className="animate-illus-rise delay-350 motion-reduce:animate-none">
            <Prompt />
            pnpm install &amp;&amp; pnpm dev
          </p>
          <div className="flex animate-illus-rise items-center gap-2 delay-500 motion-reduce:animate-none">
            <span className="relative h-1 flex-1 overflow-hidden rounded-full bg-foreground/10">
              <span className="absolute inset-0 origin-left animate-illus-fill rounded-full bg-foreground delay-500 motion-reduce:animate-none" />
            </span>
            <span className="animate-illus-rise text-muted-foreground delay-900 motion-reduce:animate-none">
              372 packages
            </span>
          </div>
          <p className="flex animate-illus-rise items-center gap-1.5 delay-1100 motion-reduce:animate-none">
            <CheckIcon className="size-3.5 shrink-0" />
            <span>
              Ready on <span className="@max-3xs:hidden">http://</span>localhost:3000
            </span>
          </p>
        </div>
      </div>
    </Panel>
  )
}

const FILES = [
  { name: 'hero.ts', line: "title: 'Your headline',", slot: 'delay-0', rest: '' },
  { name: 'features.ts', line: "title: 'Your features',", slot: 'delay-2000', rest: 'opacity-0' },
  { name: 'faq.ts', line: "question: 'Is it free?',", slot: 'delay-4000', rest: 'opacity-0' },
]

const SITE_FILE = { line: "name: 'Your Site',", slot: 'delay-6000', rest: 'opacity-0' }

function ActiveMark({ slot, rest }: { slot: string; rest: string }) {
  return (
    <span
      className={cn(
        'absolute inset-0 flex animate-illus-slot items-center justify-end rounded-sm pr-2 ring-1 ring-foreground/15 motion-reduce:animate-none',
        slot,
        rest,
      )}
    >
      <span className="size-1.5 rounded-full bg-foreground" />
    </span>
  )
}

function Content() {
  const lines = [...FILES, SITE_FILE]

  return (
    <Panel className="@container w-full font-mono text-xs">
      <ul className="p-1.5 leading-4.5">
        <li className="relative px-1.5">
          <ActiveMark slot={SITE_FILE.slot} rest={SITE_FILE.rest} />
          <span className="text-muted-foreground">src/config/</span>site.ts
        </li>
        <li className="px-1.5 text-muted-foreground">src/content/</li>
        {FILES.map((file, index) => (
          <li key={file.name} className="relative px-1.5">
            <ActiveMark slot={file.slot} rest={file.rest} />
            <span className="text-muted-foreground">
              {index === FILES.length - 1 ? '└ ' : '├ '}
            </span>
            {file.name}
          </li>
        ))}
      </ul>
      <div className="grid border-t px-3 py-1.5 leading-4.5">
        {lines.map((file) => (
          <p
            key={file.line}
            className={cn(
              'col-start-1 row-start-1 animate-illus-slot truncate motion-reduce:animate-none',
              file.slot,
              file.rest,
            )}
          >
            <span className="mr-3 text-muted-foreground @max-3xs:hidden">2</span>
            {file.line}
            <Caret />
          </p>
        ))}
      </div>
    </Panel>
  )
}

const THEME_BARS = [
  'h-2 opacity-40',
  'h-3.5 opacity-60',
  'h-2.5 opacity-50',
  'h-4.5 opacity-80',
  'h-6',
]

function Preset() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Panel className="px-3 py-2 font-mono text-xs leading-4.5">
        <p>
          <Prompt />
          pnpm dlx shadcn@latest apply &lt;code&gt;
        </p>
        <p className="flex items-center gap-1.5 text-muted-foreground">
          <CheckIcon className="size-3.5 shrink-0" />
          Updated the theme tokens
        </p>
      </Panel>
      <Panel className="flex items-center gap-3 p-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-md border text-lg font-semibold">
          <span className="col-start-1 row-start-1 animate-illus-slot-out font-sans delay-4000 motion-reduce:animate-none">
            Aa
          </span>
          <span className="col-start-1 row-start-1 animate-illus-slot font-mono opacity-0 delay-4000 motion-reduce:animate-none">
            Aa
          </span>
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-1.5">
          <span className="h-2 w-full rounded-full bg-foreground/25" />
          <span className="h-1.5 w-2/3 rounded-full bg-foreground/10" />
          <span className="mt-1 grid">
            <span className="col-start-1 row-start-1 h-4 w-12 animate-illus-slot-out delay-4000 motion-reduce:animate-none">
              <span className="block size-full animate-illus-accent rounded-sm bg-primary motion-reduce:animate-none" />
            </span>
            <span className="col-start-1 row-start-1 h-4 w-12 animate-illus-slot opacity-0 delay-4000 motion-reduce:animate-none">
              <span className="block size-full animate-illus-accent rounded-full bg-primary motion-reduce:animate-none" />
            </span>
          </span>
        </span>
        <span className="flex h-10 items-end gap-1">
          {THEME_BARS.map((bar) => (
            <span
              key={bar}
              className={cn(
                'w-1.5 animate-illus-accent rounded-sm bg-primary motion-reduce:animate-none',
                bar,
              )}
            />
          ))}
        </span>
      </Panel>
    </div>
  )
}

const STAGES = [
  { label: 'Build', delay: 'delay-1000' },
  { label: 'Prerender', delay: 'delay-1320' },
  { label: 'Ready', delay: 'delay-1640' },
]

function Deploy() {
  return (
    <Panel className="w-full text-xs">
      <div className="flex h-6 items-center gap-2 border-b px-3">
        <VercelIcon className="size-3" />
        <span className="font-medium">Production</span>
        <span className="ml-auto font-mono text-muted-foreground">main · 4f2c1a9</span>
      </div>
      <div className="relative flex justify-between px-3 pt-2.5 pb-2">
        <span className="absolute inset-x-8 top-4.5 h-px bg-border" />
        <span className="absolute inset-x-8 top-4.5 h-px animate-illus-clear delay-1000 motion-reduce:animate-none">
          <span className="block size-full origin-left animate-illus-fill bg-foreground delay-1000 motion-reduce:animate-none" />
        </span>
        {STAGES.map((stage) => (
          <span key={stage.label} className="relative flex w-14 flex-col items-center gap-1">
            <span className="grid size-4 place-items-center rounded-full border bg-background">
              <span className="animate-illus-clear delay-1000 motion-reduce:animate-none">
                <span
                  className={cn(
                    'grid size-4 animate-illus-pop place-items-center rounded-full bg-primary text-primary-foreground motion-reduce:animate-none',
                    stage.delay,
                  )}
                >
                  <CheckIcon className="size-2.5" strokeWidth={3.5} />
                </span>
              </span>
            </span>
            {stage.label}
          </span>
        ))}
      </div>
      <ul className="flex flex-col gap-1 border-t px-3 py-1.5 font-mono">
        <li className="flex h-5 items-center justify-between gap-2">
          <span className="truncate">your-domain.com</span>
          <span className="animate-illus-clear delay-1000 motion-reduce:animate-none">
            <span className="flex animate-illus-pop items-center gap-1 font-sans font-medium delay-1850 motion-reduce:animate-none">
              <CheckIcon className="size-3.5" />
              Indexable
            </span>
          </span>
        </li>
        <li className="flex h-5 items-center justify-between gap-2 text-muted-foreground">
          <span className="truncate">*.vercel.app</span>
          <span className="animate-illus-clear delay-1000 motion-reduce:animate-none">
            <span className="block animate-illus-pop delay-2000 motion-reduce:animate-none">
              noindex
            </span>
          </span>
        </li>
      </ul>
    </Panel>
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
