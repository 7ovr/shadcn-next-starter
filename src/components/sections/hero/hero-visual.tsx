import { CheckIcon, LockIcon } from 'lucide-react'

import { LogoMark } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { faq } from '@/content/faq'
import { hero } from '@/content/hero'
import { stripInlineCode } from '@/lib/inline-code'
import { getSiteUrl } from '@/lib/site-url'
import { cn } from '@/lib/utils'

type Token = [kind: 'tag' | 'attr' | 'value', text: string]
type Line = { indent: 0 | 1 | 2; tokens: Token[]; checked?: boolean }

const TOKEN_CLASS = {
  tag: 'text-muted-foreground',
  attr: 'text-foreground',
  value: 'font-medium text-foreground',
} as const

const INDENT_CLASS = { 0: '', 1: 'pl-4', 2: 'pl-8' } as const

function sourceLines(url: string): Line[] {
  return [
    { indent: 0, tokens: [['tag', '<head>']] },
    {
      indent: 1,
      checked: true,
      tokens: [
        ['tag', '<title>'],
        ['value', siteConfig.name],
        ['tag', '</title>'],
      ],
    },
    {
      indent: 1,
      checked: true,
      tokens: [
        ['tag', '<meta '],
        ['attr', 'name='],
        ['value', '"description"'],
        ['tag', ' />'],
      ],
    },
    {
      indent: 1,
      checked: true,
      tokens: [
        ['tag', '<link '],
        ['attr', 'rel='],
        ['value', '"canonical" '],
        ['attr', 'href='],
        ['value', `"${url}"`],
        ['tag', ' />'],
      ],
    },
    {
      indent: 1,
      checked: true,
      tokens: [
        ['tag', '<meta '],
        ['attr', 'property='],
        ['value', '"og:image"'],
        ['tag', ' />'],
      ],
    },
    {
      indent: 1,
      checked: true,
      tokens: [
        ['tag', '<meta '],
        ['attr', 'name='],
        ['value', '"robots" '],
        ['attr', 'content='],
        ['value', '"index, follow"'],
        ['tag', ' />'],
      ],
    },
    {
      indent: 1,
      tokens: [
        ['tag', '<script '],
        ['attr', 'type='],
        ['value', '"application/ld+json"'],
        ['tag', '>'],
      ],
    },
    {
      indent: 2,
      checked: true,
      tokens: [
        ['tag', '{ "@type": '],
        ['value', '"Organization"'],
        ['tag', ', "name": '],
        ['value', `"${siteConfig.author.name}"`],
        ['tag', ' }'],
      ],
    },
    { indent: 1, tokens: [['tag', '</script>']] },
    { indent: 0, tokens: [['tag', '</head>']] },
    { indent: 0, tokens: [['tag', '<body>']] },
    {
      indent: 1,
      tokens: [
        ['tag', '<main '],
        ['attr', 'id='],
        ['value', '"main"'],
        ['tag', '>'],
      ],
    },
    {
      indent: 2,
      checked: true,
      tokens: [
        ['tag', '<h1>'],
        ['value', hero.title],
        ['tag', '</h1>'],
      ],
    },
    {
      indent: 2,
      tokens: [
        ['tag', '<p>'],
        ['value', hero.description],
      ],
    },
    {
      indent: 2,
      checked: true,
      tokens: [
        ['tag', '<div '],
        ['attr', 'hidden='],
        ['value', '"until-found"'],
        ['tag', '>'],
        ['value', stripInlineCode(faq.items[0].answer)],
      ],
    },
    { indent: 1, tokens: [['tag', '</main>']] },
  ]
}

function SourceView({ url }: { url: string }) {
  return (
    <ol className="flex min-w-0 flex-col py-4 font-mono text-xs leading-7 sm:text-sm">
      {sourceLines(url).map((line, index) => (
        <li
          key={line.tokens.map(([, text]) => text).join('')}
          className={cn('flex items-center gap-4 pr-4', line.checked && 'bg-muted/40')}
        >
          <span className="w-10 shrink-0 text-right text-muted-foreground select-none">
            {index + 1}
          </span>
          <span className={cn('min-w-0 flex-1 truncate', INDENT_CLASS[line.indent])}>
            {line.tokens.map(([kind, text]) => (
              <span key={`${kind}:${text}`} className={TOKEN_CLASS[kind]}>
                {text}
              </span>
            ))}
          </span>
          {line.checked ? <CheckIcon className="size-3.5 shrink-0 text-foreground" /> : null}
        </li>
      ))}
    </ol>
  )
}

function SearchResult({ url }: { url: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-medium text-muted-foreground">Search Result</p>
      <div className="rounded-lg border bg-card p-4 shadow-xs">
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 shrink-0 place-items-center rounded-full border bg-background">
            <LogoMark className="size-3.5" />
          </span>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-medium">{siteConfig.name}</p>
            <p className="truncate text-xs text-muted-foreground">{url}</p>
          </div>
        </div>
        <p className="mt-3 leading-snug font-medium">{hero.title}</p>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{siteConfig.description}</p>
      </div>
    </div>
  )
}

function LinkPreview({ host }: { host: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-medium text-muted-foreground">Link Preview</p>
      <div className="overflow-hidden rounded-lg border bg-card shadow-xs">
        <div className="flex aspect-video flex-col justify-between bg-linear-to-br from-muted to-card p-4">
          <span className="flex items-center gap-1.5 text-xs font-semibold">
            <LogoMark className="size-4" />
            {siteConfig.author.name}
          </span>
          <p className="max-w-60 font-heading text-lg leading-tight font-bold tracking-tight">
            SEO done right, tested and not promised
          </p>
          <span className="flex items-center justify-between text-xs">
            <span className="rounded-md bg-primary px-2 py-1 font-medium text-primary-foreground">
              Get The Starter
            </span>
            <span className="text-foreground">{host}</span>
          </span>
        </div>
        <div className="border-t px-4 py-3">
          <p className="truncate text-sm font-medium">{siteConfig.name}</p>
          <p className="truncate text-xs text-muted-foreground">{host}</p>
        </div>
      </div>
    </div>
  )
}

// What a crawler reads: the rendered HTML, and the search result and link preview built from it.
export function HeroVisual() {
  const url = getSiteUrl()
  const host = new URL(url).host

  return (
    <div
      aria-hidden="true"
      data-nosnippet
      className="relative mx-auto mt-16 w-full max-w-5xl animate-rise delay-300 motion-reduce:animate-none sm:mt-20"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-96 bg-glow blur-2xl" />
      <div className="rounded-2xl border bg-card mask-fade-bottom p-1.5 shadow-2xl ring-1 ring-foreground/5">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex items-center gap-4 border-b px-4 py-3">
            <span className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
              <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            </span>
            <span className="mx-auto flex h-7 w-full max-w-md min-w-0 items-center gap-2 rounded-md border bg-card px-3 text-xs text-muted-foreground">
              <LockIcon className="size-3 shrink-0" />
              <span className="truncate">view-source:{host}</span>
            </span>
            <span className="w-11" />
          </div>
          <div className="grid lg:grid-cols-5">
            <div className="min-w-0 lg:col-span-3">
              <SourceView url={url} />
            </div>
            <div className="flex flex-col gap-5 border-t p-5 max-sm:hidden lg:col-span-2 lg:border-t-0 lg:border-l">
              <SearchResult url={url} />
              <LinkPreview host={host} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
