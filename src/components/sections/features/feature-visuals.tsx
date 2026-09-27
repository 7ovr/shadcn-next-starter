import { CheckIcon, ChevronDownIcon } from 'lucide-react'

import { LogoMark, NextjsIcon } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { faq } from '@/content/faq'
import type { FeatureVisual as FeatureVisualName } from '@/content/features'
import { stripInlineCode } from '@/lib/inline-code'
import { getSiteUrl } from '@/lib/site-url'
import { cn } from '@/lib/utils'

function Panel({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('overflow-hidden rounded-lg border bg-background shadow-sm', className)}>
      {children}
    </div>
  )
}

function WindowDots() {
  return (
    <span className="flex gap-1">
      <span className="size-1.5 rounded-full bg-muted-foreground/30" />
      <span className="size-1.5 rounded-full bg-muted-foreground/30" />
      <span className="size-1.5 rounded-full bg-muted-foreground/30" />
    </span>
  )
}

function ScanLine({ delay }: { delay: string }) {
  return (
    <span
      className={cn(
        'pointer-events-none absolute inset-0 animate-illus-scan opacity-0 motion-reduce:animate-none',
        delay,
      )}
    >
      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-foreground/0 to-foreground/10" />
      <span className="absolute inset-x-0 bottom-0 h-px bg-foreground/40" />
    </span>
  )
}

const ROUTES = [
  { path: '/', branch: '┌', delay: 'delay-0' },
  { path: '/blog', branch: '├', delay: 'delay-150' },
  { path: '/blog/hello-world', branch: '├', delay: 'delay-300' },
  { path: '/privacy', branch: '├', delay: 'delay-450' },
  { path: '/terms', branch: '└', delay: 'delay-600' },
]

function Prerender() {
  return (
    <Panel className="w-full max-w-72 font-mono text-xs">
      <div className="relative flex h-7 items-center gap-2 border-b px-3">
        <NextjsIcon className="size-3.5" />
        <span>next build</span>
        <span className="absolute inset-x-0 -bottom-px h-px animate-illus-clear motion-reduce:animate-none">
          <span className="block size-full origin-left animate-illus-fill bg-foreground/60 delay-100 motion-reduce:animate-none" />
        </span>
      </div>
      <div className="relative px-3 py-1.5 leading-4.5">
        <p className="absolute inset-x-3 top-1.5 animate-illus-idle text-muted-foreground opacity-0 motion-reduce:animate-none">
          Generating static pages (0/5)
        </p>
        <div className="animate-illus-clear motion-reduce:animate-none">
          <ul>
            {ROUTES.map((route) => (
              <li
                key={route.path}
                className={cn(
                  'flex animate-illus-rise gap-2 motion-reduce:animate-none',
                  route.delay,
                )}
              >
                <span className="text-muted-foreground">{route.branch} ○</span>
                <span className="truncate">{route.path}</span>
                <span className="ml-auto text-muted-foreground">Static</span>
              </li>
            ))}
          </ul>
          <p className="mt-1 flex animate-illus-rise items-center gap-1.5 border-t pt-1 delay-900 motion-reduce:animate-none">
            <CheckIcon className="size-3.5" />5 routes prerendered
            <span className="ml-auto text-muted-foreground">0 dynamic</span>
          </p>
        </div>
      </div>
    </Panel>
  )
}

const TAGS = [
  { name: 'title', delay: 'delay-700' },
  { name: 'description', delay: 'delay-850' },
  { name: 'canonical', delay: 'delay-1000' },
  { name: 'og:image', delay: 'delay-1150' },
  { name: 'twitter:card', delay: 'delay-1300' },
]

function Metadata() {
  const host = new URL(getSiteUrl()).host

  return (
    <div className="flex w-full max-w-76 items-center">
      <Panel className="w-36 shrink-0 font-mono text-xs">
        <p className="border-b px-3 py-1.5 text-muted-foreground">&lt;head&gt;</p>
        <ul className="flex flex-col gap-1 p-3">
          {TAGS.map((tag) => (
            <li key={tag.name} className="flex items-center gap-2">
              <span className="relative size-3.5 shrink-0 rounded-sm border">
                <span className="absolute -inset-px animate-illus-clear delay-700 motion-reduce:animate-none">
                  <span
                    className={cn(
                      'grid size-full animate-illus-pop place-items-center rounded-sm bg-primary text-primary-foreground motion-reduce:animate-none',
                      tag.delay,
                    )}
                  >
                    <CheckIcon className="size-2.5" strokeWidth={3.5} />
                  </span>
                </span>
              </span>
              {tag.name}
            </li>
          ))}
        </ul>
      </Panel>
      <div className="relative z-10 -ml-3 flex min-w-0 flex-1 flex-col gap-1.5 rounded-lg border bg-card p-3 shadow-lg">
        <SnippetPart
          delay="delay-1450"
          skeleton={
            <span className="flex items-center gap-2">
              <span className="size-5 rounded-full bg-muted" />
              <span className="h-2 w-16 rounded-full bg-muted" />
            </span>
          }
        >
          <span className="flex items-center gap-2">
            <span className="grid size-5 shrink-0 place-items-center rounded-full border bg-background">
              <LogoMark className="size-2.5" />
            </span>
            <span className="min-w-0 text-xs leading-tight">
              <span className="block truncate font-medium">{siteConfig.author.name}</span>
              <span className="block truncate text-muted-foreground">{host}</span>
            </span>
          </span>
        </SnippetPart>
        <SnippetPart
          delay="delay-1600"
          skeleton={<span className="h-2.5 w-4/5 rounded-full bg-muted" />}
        >
          <span className="block truncate text-sm leading-snug font-medium">{siteConfig.name}</span>
        </SnippetPart>
        <SnippetPart
          delay="delay-1750"
          skeleton={
            <>
              <span className="h-2 w-full rounded-full bg-muted" />
              <span className="h-2 w-2/3 rounded-full bg-muted" />
            </>
          }
        >
          <span className="line-clamp-2 text-xs text-muted-foreground">
            {siteConfig.description}
          </span>
        </SnippetPart>
      </div>
    </div>
  )
}

// A skeleton sits under each part of the search result until the part fills in over it.
function SnippetPart({
  delay,
  skeleton,
  children,
}: {
  delay: string
  skeleton: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="grid">
      <span className="col-start-1 row-start-1 flex flex-col justify-center gap-1.5">
        {skeleton}
      </span>
      <span className="col-start-1 row-start-1 animate-illus-clear delay-700 motion-reduce:animate-none">
        <span className={cn('block animate-illus-rise bg-card motion-reduce:animate-none', delay)}>
          {children}
        </span>
      </span>
    </div>
  )
}

// Rings the same value in the JSON-LD and on the page at once; pairs share a slot delay.
function Match({ slot }: { slot: string }) {
  return (
    <span
      className={cn(
        'absolute inset-0 animate-illus-slot rounded-md opacity-0 ring-1 ring-foreground/25 motion-reduce:animate-none',
        slot,
      )}
    />
  )
}

function StructuredData() {
  const item = faq.items[1]
  const answer = stripInlineCode(item.answer)

  return (
    <div className="flex w-full max-w-72 flex-col items-center gap-2 text-xs">
      <Panel className="w-full p-1.5 font-mono leading-4.5">
        <div className="flex justify-between gap-2 px-1.5 text-muted-foreground">
          <span>
            &quot;@type&quot;: <span className="text-foreground">&quot;Question&quot;</span>
          </span>
          <span>JSON-LD</span>
        </div>
        <div className="relative truncate px-1.5">
          <Match slot="delay-0" />
          <span className="text-muted-foreground">&quot;name&quot;: </span>
          {JSON.stringify(item.question)}
        </div>
        <div className="relative truncate px-1.5">
          <Match slot="delay-4000" />
          <span className="text-muted-foreground">&quot;text&quot;: </span>
          {JSON.stringify(answer)}
        </div>
      </Panel>
      <span className="inline-flex items-center gap-1.5 rounded-full border bg-background px-2.5 py-0.5 font-medium shadow-xs">
        <CheckIcon className="size-3.5" />
        Matches The Page
      </span>
      <Panel className="w-full p-1.5 leading-4.5">
        <div className="relative flex items-center gap-1.5 px-1.5 font-medium">
          <Match slot="delay-0" />
          <ChevronDownIcon className="size-3.5 shrink-0 text-muted-foreground" />
          <span className="truncate">{item.question}</span>
        </div>
        <div className="relative truncate pr-1.5 pl-6.5 text-muted-foreground">
          <Match slot="delay-4000" />
          {answer}
        </div>
      </Panel>
    </div>
  )
}

const PAGE_TYPES = [
  { label: 'Home', delay: 'delay-2200' },
  { label: 'Blog Post', delay: 'delay-2350' },
  { label: 'Legal', delay: 'delay-2500' },
]

function OgImages() {
  const host = new URL(getSiteUrl()).host

  return (
    <div className="flex w-full max-w-72 flex-col items-center gap-3.5">
      <div className="relative w-full max-w-52">
        <span className="absolute inset-0 -translate-x-7 translate-y-1 -rotate-6 rounded-lg border bg-card shadow-sm" />
        <span className="absolute inset-0 translate-x-7 translate-y-1 rotate-6 rounded-lg border bg-card shadow-sm" />
        <div className="relative aspect-40/21 overflow-hidden rounded-lg border bg-linear-to-br from-muted to-card shadow-lg">
          <div className="absolute inset-0 flex animate-illus-idle flex-col justify-between p-3 opacity-0 delay-1400 motion-reduce:animate-none">
            <span className="flex justify-between">
              <span className="h-2 w-10 rounded-full bg-foreground/10" />
              <span className="h-2 w-16 rounded-full bg-foreground/10" />
            </span>
            <span className="flex flex-col gap-1.5">
              <span className="h-2.5 w-4/5 rounded-full bg-foreground/10" />
              <span className="h-2.5 w-1/2 rounded-full bg-foreground/10" />
            </span>
            <span className="h-4.5 w-20 rounded-sm bg-foreground/10" />
          </div>
          <div className="flex size-full animate-illus-clear flex-col justify-between p-3 delay-1400 motion-reduce:animate-none">
            <span className="flex animate-illus-rise items-center justify-between gap-2 text-xs delay-1500 motion-reduce:animate-none">
              <span className="flex items-center gap-1 font-semibold">
                <LogoMark className="size-3" />
                {siteConfig.author.name}
              </span>
              <span className="truncate text-foreground">{host}</span>
            </span>
            <p className="animate-illus-rise font-heading text-sm leading-tight font-bold tracking-tight delay-1700 motion-reduce:animate-none">
              SEO done right, tested and not promised
            </p>
            <span className="animate-illus-rise self-start rounded-sm bg-primary px-1.5 py-0.5 text-xs font-medium whitespace-nowrap text-primary-foreground delay-1900 motion-reduce:animate-none">
              Get The Starter
            </span>
          </div>
          <ScanLine delay="delay-1400" />
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-3 text-xs whitespace-nowrap">
        <span className="flex items-center gap-3">
          {PAGE_TYPES.map((type) => (
            <span key={type.label} className="flex items-center gap-1">
              <span className="animate-illus-clear delay-1400 motion-reduce:animate-none">
                <CheckIcon
                  className={cn('size-3 animate-illus-pop motion-reduce:animate-none', type.delay)}
                />
              </span>
              {type.label}
            </span>
          ))}
        </span>
        <span className="rounded-md border bg-background px-1.5 py-0.5 font-mono text-muted-foreground shadow-xs">
          1200 × 630
        </span>
      </div>
    </div>
  )
}

function NoJavaScript() {
  const items = [faq.items[3], faq.items[1]]

  return (
    <Panel className="w-full max-w-72">
      <div className="flex h-8 items-center gap-2 border-b px-3 text-xs">
        <WindowDots />
        <span className="ml-auto text-muted-foreground">JavaScript</span>
        <span className="relative flex h-4 w-7 items-center rounded-full bg-input p-0.5">
          <span className="absolute inset-0 animate-illus-slot rounded-full bg-primary opacity-0 delay-1000 motion-reduce:animate-none" />
          <span className="relative size-3 animate-illus-knob rounded-full bg-background shadow-xs delay-1000 motion-reduce:animate-none" />
        </span>
        <span className="grid w-5 font-medium">
          <span className="col-start-1 row-start-1 animate-illus-slot-out delay-1000 motion-reduce:animate-none">
            Off
          </span>
          <span className="col-start-1 row-start-1 animate-illus-slot opacity-0 delay-1000 motion-reduce:animate-none">
            On
          </span>
        </span>
      </div>
      <div className="relative flex flex-col gap-2 p-3 text-xs">
        <p className="font-heading text-sm font-semibold">{faq.title}</p>
        {items.map((item) => (
          <div key={item.question} className="flex flex-col gap-0.5">
            <span className="flex items-center gap-1.5 font-medium">
              <ChevronDownIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span className="truncate">{item.question}</span>
            </span>
            <span className="truncate pl-5 text-muted-foreground">
              {stripInlineCode(item.answer)}
            </span>
          </div>
        ))}
        {/* Phased to sweep the page just after the switch turns off. */}
        <ScanLine delay="delay-6120" />
      </div>
    </Panel>
  )
}

const SWATCHES = [
  'bg-primary',
  'bg-chart-1',
  'bg-chart-2',
  'bg-chart-3',
  'bg-chart-4',
  'bg-chart-5',
]

const BARS = [
  'h-3 opacity-40',
  'h-5 opacity-60',
  'h-4 opacity-50',
  'h-7 opacity-80',
  'h-6 opacity-70',
  'h-9',
]

function Presets() {
  return (
    <div className="flex w-full max-w-72 flex-col gap-3">
      <Panel className="flex flex-col gap-3 p-3">
        <div className="flex items-center gap-2">
          <span className="size-3.5 animate-illus-accent rounded-sm bg-primary motion-reduce:animate-none" />
          <span className="h-1.5 w-10 rounded-full bg-foreground/30" />
          <span className="ml-auto h-1 w-5 rounded-full bg-foreground/15" />
          <span className="h-1 w-5 rounded-full bg-foreground/15" />
          <span className="h-4 w-9 animate-illus-accent rounded-sm bg-primary motion-reduce:animate-none" />
        </div>
        <div className="flex items-end gap-4">
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="h-2 w-full rounded-full bg-foreground/25" />
            <span className="h-2 w-2/3 rounded-full bg-foreground/25" />
            <span className="mt-0.5 h-1.5 w-5/6 rounded-full bg-foreground/10" />
            <span className="mt-2 flex gap-1.5">
              <span className="h-5 w-14 animate-illus-accent rounded-md bg-primary motion-reduce:animate-none" />
              <span className="h-5 w-12 rounded-md border" />
            </span>
          </div>
          <div className="flex h-12 items-end gap-1 rounded-md border p-1.5">
            {BARS.map((bar) => (
              <span
                key={bar}
                className={cn(
                  'w-1.5 animate-illus-accent rounded-sm bg-primary motion-reduce:animate-none',
                  bar,
                )}
              />
            ))}
          </div>
        </div>
      </Panel>
      <div className="flex items-center justify-between gap-3">
        <span className="relative flex gap-1">
          {SWATCHES.map((swatch) => (
            <span
              key={swatch}
              className={cn('size-4 rounded-full shadow-xs ring-1 ring-foreground/10', swatch)}
            />
          ))}
          <span className="absolute top-0 left-0 size-4 animate-illus-swatch rounded-full ring-2 ring-foreground ring-offset-1 ring-offset-card motion-reduce:animate-none" />
        </span>
        <span className="rounded-md border bg-background px-2 py-1 font-mono text-xs shadow-xs">
          shadcn apply &lt;code&gt;
        </span>
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
