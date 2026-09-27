import { ZapIcon } from 'lucide-react'
import Image from 'next/image'

import { CopyCommand } from '@/components/copy-command'
import { Eyebrow } from '@/components/eyebrow'
import { hero } from '@/content/hero'

export function Hero() {
  const [before, after] = hero.title.split(hero.titleEmphasis)

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate -mt-16 overflow-hidden px-4 pt-40 pb-24 sm:px-6 sm:pt-48 sm:pb-32"
    >
      <div aria-hidden="true" data-nosnippet className="absolute inset-0 -z-10">
        {/* Lazy by default, so only the current theme's photo loads; fetchPriority still puts it first. */}
        <Image
          src={hero.images.light}
          alt=""
          fill
          sizes="100vw"
          fetchPriority="high"
          className="object-cover dark:hidden"
        />
        <Image
          src={hero.images.dark}
          alt=""
          fill
          sizes="100vw"
          fetchPriority="high"
          className="hidden object-cover dark:block"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/30 to-background dark:from-background/60 dark:via-background/40" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <div className="animate-rise-fade motion-reduce:animate-none">
          <Eyebrow icon={ZapIcon} {...hero.eyebrow} />
        </div>
        {/* No fade on the headline: it is the largest paint, and a transparent element is skipped for it. */}
        <h1
          id="hero-title"
          className="animate-rise font-heading text-4xl font-bold tracking-tighter text-balance delay-75 motion-reduce:animate-none sm:text-5xl lg:text-6xl"
        >
          {before}
          <em className="font-medium underline decoration-2 underline-offset-8">
            {hero.titleEmphasis}
          </em>
          {after}
        </h1>
        <p className="max-w-2xl animate-rise-fade text-lg text-pretty text-foreground/80 delay-150 motion-reduce:animate-none">
          {hero.description}
        </p>
        <div className="mt-2 max-w-full animate-rise-fade delay-200 motion-reduce:animate-none">
          <CopyCommand command={hero.command} highlight={hero.commandHighlight} />
        </div>
      </div>
    </section>
  )
}
