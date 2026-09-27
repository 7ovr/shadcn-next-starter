import { ZapIcon } from 'lucide-react'

import { CopyCommand } from '@/components/copy-command'
import { Eyebrow } from '@/components/eyebrow'
import { HeroLogos } from '@/components/sections/hero/hero-logos'
import { hero } from '@/content/hero'
import { withInlineCode } from '@/lib/inline-code'

export function Hero() {
  const [before, after] = hero.title.split(hero.titleEmphasis)

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden px-4 pt-20 pb-16 sm:px-6 sm:pt-32 sm:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-160 max-w-5xl bg-glow"
      />
      <HeroLogos />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <div className="animate-rise-fade motion-reduce:animate-none">
          <Eyebrow icon={ZapIcon} {...hero.eyebrow} />
        </div>
        {/* No fade on the headline: it is the largest paint, and a transparent element is skipped for it. */}
        <h1
          id="hero-title"
          className="animate-rise font-heading text-4xl font-bold tracking-tighter text-balance delay-75 motion-reduce:animate-none sm:text-5xl lg:text-6xl"
        >
          {before}
          <br />
          {/* Marked like inline code, the way the page marks commands. */}
          <em className="rounded-xl bg-foreground/10 box-decoration-clone px-3 font-mono not-italic">
            {hero.titleEmphasis}
          </em>
          {after}
        </h1>
        <p className="max-w-2xl animate-rise-fade text-lg text-pretty text-muted-foreground delay-150 motion-reduce:animate-none">
          {withInlineCode(hero.description)}
        </p>
        <div className="mt-2 max-w-full animate-rise-fade delay-200 motion-reduce:animate-none">
          <CopyCommand command={hero.command} highlight={hero.commandHighlight} />
        </div>
      </div>
    </section>
  )
}
