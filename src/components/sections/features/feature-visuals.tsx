import { BracesIcon, CheckIcon, ChevronDownIcon, MoonIcon, SunIcon } from 'lucide-react'

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

function StructuredData() {
  return (
    <div className="relative flex w-full max-w-60 flex-col items-center">
      <div className="flex h-11 w-full items-center gap-2 rounded-lg border bg-muted/40 px-3 font-mono text-xs">
        <BracesIcon className="size-3.5 shrink-0 text-muted-foreground" />
        <span className="truncate">
          <span className="text-muted-foreground">&quot;@type&quot;: </span>
          &quot;FAQPage&quot;
        </span>
      </div>
      <span className="h-3 border-l border-dashed border-foreground/30" />
      <span className="flex h-6 items-center gap-1 rounded-md border bg-background px-2 text-xs font-medium text-muted-foreground">
        <CheckIcon className="size-3" />
        Matches
      </span>
      <span className="h-3 border-l border-dashed border-foreground/30" />
      <div className="flex h-11 w-full items-center gap-2.5 rounded-lg border bg-muted/20 px-3">
        <ChevronDownIcon className="size-3.5 shrink-0 text-muted-foreground" />
        <Bar className="w-3/4 bg-foreground/25" />
      </div>
      {/* One ring for both boxes, 5.75rem apart, so animate-hop can move it between them. */}
      <span className="absolute -inset-x-1.5 -top-1.5 h-14 animate-hop rounded-xl border-2 border-foreground motion-reduce:animate-none" />
    </div>
  )
}

function OgImages() {
  return (
    <Frame className="w-full max-w-64">
      <div className="relative aspect-40/21 overflow-hidden border-b bg-linear-to-br from-muted to-background p-4">
        <span className="flex items-center gap-1.5 text-xs font-semibold">
          <LogoMark className="size-3.5" />
          7Ovr
        </span>
        <p className="mt-3 font-heading text-base leading-tight font-bold text-balance">
          SEO done right. Tested, not promised.
        </p>
        <span className="absolute right-2 bottom-2 rounded-sm border bg-background px-1.5 font-mono text-xs text-muted-foreground">
          1200 × 630
        </span>
        <span className="absolute inset-y-0 left-0 w-1/3 -translate-x-full animate-sheen bg-linear-to-r from-transparent via-foreground/10 to-transparent motion-reduce:animate-none" />
      </div>
      <div className="flex flex-col gap-1.5 px-3 py-2.5">
        <span className="text-xs text-muted-foreground">your-domain.com</span>
        <Bar className="w-3/4" />
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
  'structured-data': StructuredData,
  'og-images': OgImages,
  'no-javascript': NoJavaScript,
  presets: Presets,
} satisfies Record<FeatureVisualName, () => React.ReactNode>

export function FeatureVisual({ name }: { name: FeatureVisualName }) {
  const Visual = VISUALS[name]
  return <Visual />
}
