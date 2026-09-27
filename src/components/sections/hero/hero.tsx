import { ZapIcon } from 'lucide-react'

import { ButtonLink } from '@/components/button-link'
import { CopyCommand } from '@/components/copy-command'
import { Eyebrow } from '@/components/eyebrow'
import { GitHubIcon } from '@/components/icons'
import { FloatingMarks } from '@/components/sections/hero/floating-marks'
import { HeroVisual } from '@/components/sections/hero/hero-visual'
import { hero } from '@/content/hero'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden px-4 pt-16 sm:px-6 sm:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-128 max-w-5xl bg-glow"
      />
      <FloatingMarks />

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <div className="animate-rise-fade motion-reduce:animate-none">
          <Eyebrow icon={ZapIcon} {...hero.eyebrow} />
        </div>
        {/* No fade on the headline: it is the largest paint, and a transparent element is skipped for it. */}
        <h1
          id="hero-title"
          className="animate-rise font-heading text-4xl font-bold tracking-tighter text-balance delay-75 motion-reduce:animate-none sm:text-5xl lg:text-6xl"
        >
          {hero.title} <span className="font-light italic">{hero.titleEmphasis}</span>
        </h1>
        <p className="max-w-2xl animate-rise-fade text-lg text-pretty text-muted-foreground delay-150 motion-reduce:animate-none">
          {hero.description}
        </p>
        <div className="flex animate-rise-fade flex-wrap items-center justify-center gap-3 delay-200 motion-reduce:animate-none">
          <ButtonLink href={hero.secondaryAction.href} variant="secondary" size="lg">
            {hero.secondaryAction.label}
          </ButtonLink>
          <ButtonLink href={hero.primaryAction.href} size="lg">
            <GitHubIcon data-icon="inline-start" />
            {hero.primaryAction.label}
          </ButtonLink>
        </div>
        <div className="max-w-full animate-rise-fade delay-300 motion-reduce:animate-none">
          <CopyCommand command={hero.command} highlight="shadcn-next-starter" />
        </div>
      </div>

      <HeroVisual />
    </section>
  )
}
