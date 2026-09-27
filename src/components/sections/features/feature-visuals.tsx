import { CheckIcon, ChevronDownIcon, CircleCheckIcon, MoonIcon, SunIcon } from 'lucide-react'

import { LogoMark } from '@/components/icons'
import { siteConfig } from '@/config/site'
import type { FeatureVisual as FeatureVisualName } from '@/content/features'
import { cn } from '@/lib/utils'

// Each mockup makes one point with one large element, in the style of 7ovr.com's feature grid.

function Frame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('overflow-hidden rounded-xl border bg-background shadow-lg', className)}>
      {children}
    </div>
  )
}

function Dots() {
  return (
    <span className="flex gap-1.5">
      <span className="size-2.5 rounded-full bg-muted-foreground/30" />
      <span className="size-2.5 rounded-full bg-muted-foreground/30" />
      <span className="size-2.5 rounded-full bg-muted-foreground/30" />
    </span>
  )
}

function Bar({ className }: { className?: string }) {
  return <span className={cn('block h-1.5 rounded-full bg-foreground/15', className)} />
}

const ROUTES = ['/', '/blog', '/blog/hello-world', '/privacy', '/terms']
// Two seconds apart, so the five routes take turns in the animate-swap loop.
const TURNS = [
  'delay-0',
  'delay-2000 opacity-0',
  'delay-4000 opacity-0',
  'delay-6000 opacity-0',
  'delay-8000 opacity-0',
]

function Prerender() {
  return (
    <Frame className="w-full max-w-md">
      <div className="flex items-center gap-2 border-b px-3 py-2.5">
        <Dots />
        <span className="ml-2 font-mono text-xs text-muted-foreground">Terminal</span>
      </div>
      <div className="flex flex-col gap-3 p-4 font-mono text-xs leading-relaxed">
        <p className="flex items-center gap-2">
          <span className="text-muted-foreground">$</span>
          pnpm build
          <span className="h-3.5 w-1.5 animate-caret-blink bg-foreground/80 motion-reduce:animate-none" />
        </p>
        <p className="flex items-center gap-2">
          <span className="text-muted-foreground">○</span>
          <span className="grid">
            {ROUTES.map((route, index) => (
              <span
                key={route}
                className={cn(
                  'col-start-1 row-start-1 animate-swap motion-reduce:animate-none',
                  TURNS[index],
                )}
              >
                {route}
              </span>
            ))}
          </span>
          <span className="ml-auto text-muted-foreground">Static</span>
        </p>
        <p className="flex items-center gap-2 text-muted-foreground">
          <CheckIcon className="size-3.5 text-foreground" />
          Every route prerendered as static HTML
        </p>
      </div>
    </Frame>
  )
}

const TAGS = [
  { name: 'title', wave: 'delay-0' },
  { name: 'description', wave: 'delay-800' },
  { name: 'canonical', wave: 'delay-1600' },
  { name: 'og:image', wave: 'delay-2400' },
]

function Metadata() {
  return (
    <div className="flex w-full max-w-64 flex-col items-center gap-5">
      <Frame className="w-full p-4">
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 shrink-0 place-items-center rounded-full border bg-muted">
            <LogoMark className="size-3.5" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="truncate text-xs font-medium">{siteConfig.name}</span>
            <span className="truncate text-xs text-muted-foreground">your-domain.com</span>
          </span>
        </div>
        <p className="mt-3 truncate text-sm font-semibold">The landing page starter</p>
        <Bar className="mt-2.5 w-full" />
        <Bar className="mt-1.5 w-2/3" />
      </Frame>
      <div className="flex flex-wrap justify-center gap-2">
        {TAGS.map((tag) => (
          <span
            key={tag.name}
            className={cn(
              'animate-wave rounded-md border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground motion-reduce:animate-none',
              tag.wave,
            )}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  )
}

const SEGMENTS = ['delay-0', 'delay-300', 'delay-600', 'delay-900', 'delay-1200']

const SUITES = [
  { name: 'Vitest', detail: 'Unit' },
  { name: 'Playwright', detail: 'Crawl' },
  { name: 'Lighthouse', detail: 'Budgets' },
]

function Quality() {
  return (
    <Frame className="w-full max-w-64 p-4">
      <div className="flex items-center gap-2.5">
        <CircleCheckIcon className="size-5 shrink-0" />
        <span className="flex min-w-0 flex-col">
          <span className="text-sm font-semibold">All Checks Passed</span>
          <span className="truncate font-mono text-xs text-muted-foreground">master · 4f2c1a9</span>
        </span>
      </div>
      <div className="mt-3 flex gap-1">
        {SEGMENTS.map((delay) => (
          <span
            key={delay}
            className={cn(
              'h-1.5 flex-1 origin-left animate-segment-fill rounded-full bg-foreground motion-reduce:animate-none',
              delay,
            )}
          />
        ))}
      </div>
      <ul className="mt-3 flex flex-col gap-1.5 text-xs">
        {SUITES.map((suite) => (
          <li key={suite.name} className="flex items-center gap-2">
            <CheckIcon className="size-3.5" />
            {suite.name}
            <span className="ml-auto text-muted-foreground">{suite.detail}</span>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

const HEADLINES = ['Your headline', 'Your product', 'Your launch', 'Your story', 'Your words']

function Content() {
  return (
    <Frame className="w-full max-w-64">
      <div className="flex items-center gap-2 border-b px-3 py-2.5">
        <Dots />
        <span className="ml-1 truncate font-mono text-xs text-muted-foreground">
          src/content/hero.ts
        </span>
      </div>
      <div className="flex flex-col gap-1 p-4 font-mono text-xs leading-relaxed">
        <p>
          <span className="text-muted-foreground">export const </span>hero = {'{'}
        </p>
        <p className="flex items-center pl-4">
          <span className="text-muted-foreground">title:&nbsp;</span>
          {/* The same five turns as the build log's routes, two seconds each. */}
          <span className="grid">
            {HEADLINES.map((headline, index) => (
              <span
                key={headline}
                className={cn(
                  'col-start-1 row-start-1 animate-swap whitespace-nowrap motion-reduce:animate-none',
                  TURNS[index],
                )}
              >
                &apos;{headline}&apos;,
              </span>
            ))}
          </span>
          <span className="ml-0.5 h-3.5 w-1.5 animate-caret-blink bg-foreground/80 motion-reduce:animate-none" />
        </p>
        <p className="pl-4 text-muted-foreground">description: …</p>
        <p>{'}'}</p>
      </div>
    </Frame>
  )
}

function NoJavaScript() {
  return (
    <Frame className="w-full max-w-64">
      <div className="flex items-center justify-between border-b px-3 py-2.5">
        <span className="text-xs font-medium">JavaScript</span>
        {/* Resting off; the loop switches it on for a moment, and the page below never changes. */}
        <span className="relative h-4 w-7 rounded-full bg-muted ring-1 ring-border">
          <span className="absolute inset-0 animate-switch-track rounded-full bg-primary opacity-0 motion-reduce:animate-none" />
          <span className="absolute top-0.5 left-0.5 size-3 animate-switch-knob rounded-full bg-background shadow-sm motion-reduce:animate-none" />
        </span>
      </div>
      <div className="flex flex-col gap-2 p-3">
        <Bar className="h-2 w-2/3 bg-foreground/60" />
        <Bar className="w-full" />
        <Bar className="w-5/6" />
        <div className="mt-1 flex flex-col gap-1.5 rounded-md border p-2">
          <span className="flex items-center justify-between gap-2">
            <Bar className="w-1/2 bg-foreground/40" />
            <ChevronDownIcon className="size-3 text-muted-foreground" />
          </span>
          <Bar className="w-full" />
          <Bar className="w-2/3" />
        </div>
      </div>
    </Frame>
  )
}

const TOKENS = [
  { name: '--primary', sample: 'rounded-sm bg-primary', wave: 'delay-0' },
  { name: '--radius', sample: 'rounded-md border-2 border-foreground/60', wave: 'delay-350' },
  { name: '--font-heading', sample: 'font-heading text-xs font-bold', wave: 'delay-700' },
  { name: '--chart-2', sample: 'rounded-sm bg-chart-2', wave: 'delay-1050' },
  { name: '--border', sample: 'rounded-sm border-2', wave: 'delay-1400' },
]

// One small page, drawn in either the current theme or its inverse.
function MiniPage({ inverted = false }: { inverted?: boolean }) {
  return (
    <div
      className={cn(
        'flex w-64 flex-col gap-2.5 p-3.5',
        inverted ? 'bg-foreground text-background' : 'bg-background text-foreground',
      )}
    >
      <div className="flex items-center justify-between">
        <LogoMark className="size-3.5" />
        {inverted ? (
          <>
            <MoonIcon className="size-4 dark:hidden" />
            <SunIcon className="hidden size-4 dark:block" />
          </>
        ) : (
          <>
            <SunIcon className="size-4 dark:hidden" />
            <MoonIcon className="hidden size-4 dark:block" />
          </>
        )}
      </div>
      <span
        className={cn(
          'h-2 w-full rounded-full',
          inverted ? 'bg-background/25' : 'bg-foreground/15',
        )}
      />
      <span
        className={cn('h-2 w-3/4 rounded-full', inverted ? 'bg-background/25' : 'bg-foreground/15')}
      />
      <span
        className={cn('mt-2 h-5 w-14 rounded-md', inverted ? 'bg-background' : 'bg-foreground')}
      />
    </div>
  )
}

function Presets() {
  return (
    <div className="flex w-full items-center justify-center gap-12">
      <ul className="hidden flex-col gap-3 md:flex">
        {TOKENS.map((token) => (
          <li key={token.name} className="flex items-center gap-3">
            <span
              className={cn(
                'grid size-5 shrink-0 animate-wave place-items-center motion-reduce:animate-none',
                token.sample,
                token.wave,
              )}
            >
              {token.name === '--font-heading' ? 'Aa' : null}
            </span>
            <span className="font-mono text-xs text-muted-foreground">{token.name}</span>
          </li>
        ))}
      </ul>
      <div className="relative shrink-0 overflow-hidden rounded-xl border shadow-lg">
        <MiniPage />
        <div className="absolute inset-0 theme-split">
          <MiniPage inverted />
        </div>
        <div className="absolute inset-0 theme-split-line">
          <span className="absolute inset-y-0 left-0 w-px bg-border" />
        </div>
      </div>
    </div>
  )
}

const VISUALS = {
  prerender: Prerender,
  metadata: Metadata,
  quality: Quality,
  'no-javascript': NoJavaScript,
  content: Content,
  presets: Presets,
} satisfies Record<FeatureVisualName, () => React.ReactNode>

export function FeatureVisual({ name }: { name: FeatureVisualName }) {
  const Visual = VISUALS[name]
  return <Visual />
}
