import { CheckIcon } from 'lucide-react'

import { LogoMark } from '@/components/icons'
import { siteConfig } from '@/config/site'
import type { FeatureVisual as FeatureVisualName } from '@/content/features'
import { cn } from '@/lib/utils'

const ROUTES = ['/', '/blog', '/blog/hello-world', '/privacy', '/terms']

function Prerender() {
  return (
    <div className="w-full max-w-64 rounded-lg border bg-background p-4 font-mono text-xs shadow-sm">
      <p className="text-muted-foreground">Route (app)</p>
      <ul className="mt-2 flex flex-col gap-1">
        {ROUTES.map((route, index) => (
          <li key={route} className="flex gap-2">
            <span className="text-muted-foreground">
              {index === 0 ? '┌' : index === ROUTES.length - 1 ? '└' : '├'}
            </span>
            <span>○ {route}</span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-muted-foreground">○ (Static) prerendered</p>
    </div>
  )
}

const TAGS = ['<title>', 'meta description', 'link canonical', 'og:image']

function Metadata() {
  return (
    <ul className="flex w-full max-w-60 flex-col gap-2">
      {TAGS.map((tag) => (
        <li
          key={tag}
          className="flex items-center justify-between rounded-md border bg-background px-3 py-1.5 font-mono text-xs shadow-xs"
        >
          {tag}
          <CheckIcon className="size-3.5" />
        </li>
      ))}
    </ul>
  )
}

function StructuredData() {
  return (
    <div className="w-full max-w-64 rounded-lg border bg-background p-4 font-mono text-xs leading-5 shadow-sm">
      <p className="text-muted-foreground">{'{'}</p>
      <p className="pl-3">
        <span className="text-muted-foreground">&quot;@type&quot;: </span>&quot;FAQPage&quot;,
      </p>
      <p className="pl-3">
        <span className="text-muted-foreground">&quot;mainEntity&quot;: </span>[10 questions]
      </p>
      <p className="text-muted-foreground">{'}'}</p>
      <p className="mt-3 flex items-center gap-1.5 border-t pt-3 font-sans font-medium">
        <CheckIcon className="size-3.5" />
        Matches the page
      </p>
    </div>
  )
}

function OgImages() {
  return (
    <div className="relative w-full max-w-60">
      <div className="absolute inset-0 translate-x-3 -translate-y-3 rotate-3 rounded-lg border bg-muted" />
      <div className="relative flex aspect-video flex-col justify-between rounded-lg border bg-linear-to-br from-muted to-card p-3 shadow-md">
        <span className="flex items-center gap-1 text-xs font-semibold">
          <LogoMark className="size-3" />
          {siteConfig.author.name}
        </span>
        <p className="font-heading text-sm leading-tight font-bold tracking-tight">
          Generated at build time
        </p>
        <span className="text-xs text-foreground">1200 x 630</span>
      </div>
    </div>
  )
}

function NoJavaScript() {
  return (
    <div className="flex w-full max-w-60 flex-col gap-3">
      <div className="flex items-center justify-between rounded-md border bg-background px-3 py-2 text-xs shadow-xs">
        <span className="font-medium">JavaScript</span>
        <span className="flex items-center gap-2 text-foreground">
          Off
          <span className="flex h-4 w-7 items-center rounded-full bg-muted p-0.5">
            <span className="size-3 rounded-full bg-muted-foreground" />
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-2 rounded-md border bg-background p-3 shadow-xs">
        <span className="h-1.5 w-3/4 rounded-full bg-foreground/70" />
        <span className="h-1.5 w-full rounded-full bg-muted-foreground/40" />
        <span className="h-1.5 w-5/6 rounded-full bg-muted-foreground/40" />
        <span className="mt-1 h-1.5 w-2/3 rounded-full bg-foreground/70" />
        <span className="h-1.5 w-11/12 rounded-full bg-muted-foreground/40" />
      </div>
    </div>
  )
}

const SWATCHES = ['bg-primary', 'bg-chart-1', 'bg-chart-2', 'bg-chart-3', 'bg-chart-4', 'bg-accent']

function Presets() {
  return (
    <div className="flex w-full max-w-60 flex-col items-center gap-4">
      <div className="flex -space-x-2">
        {SWATCHES.map((swatch) => (
          <span key={swatch} className={cn('size-9 rounded-full border-2 border-card', swatch)} />
        ))}
      </div>
      <span className="rounded-md border bg-background px-3 py-1.5 font-mono text-xs shadow-xs">
        shadcn apply &lt;code&gt;
      </span>
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
