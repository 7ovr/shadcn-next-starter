import {
  BaseUiIcon,
  type BrandMark,
  NextjsLogo,
  ReactLogo,
  ShadcnIcon,
  TailwindLogo,
  TypeScriptLogo,
  VercelIcon,
  VitestLogo,
} from '@/components/icons'
import { cn } from '@/lib/utils'

// Written out in full, because Tailwind only generates classes it can read. The upper and lower bands stay clear of the copy.
const TILES: { Logo: BrandMark; place: string; size: string; float: string }[] = [
  { Logo: TypeScriptLogo, place: 'top-6 left-44 delay-300', size: 'size-12', float: 'delay-700' },
  { Logo: ReactLogo, place: 'top-40 left-8 delay-500', size: 'size-16', float: 'delay-0' },
  { Logo: TailwindLogo, place: 'top-96 left-36 delay-700', size: 'size-14', float: 'delay-500' },
  { Logo: NextjsLogo, place: 'top-124 left-4 delay-1000', size: 'size-12', float: 'delay-1000' },
  { Logo: ShadcnIcon, place: 'top-6 right-44 delay-300', size: 'size-12', float: 'delay-300' },
  { Logo: BaseUiIcon, place: 'top-40 right-8 delay-500', size: 'size-16', float: 'delay-1000' },
  { Logo: VitestLogo, place: 'top-96 right-36 delay-700', size: 'size-14', float: 'delay-0' },
  { Logo: VercelIcon, place: 'top-124 right-4 delay-1000', size: 'size-12', float: 'delay-700' },
]

export function HeroLogos() {
  return (
    <div
      aria-hidden="true"
      data-nosnippet
      className="pointer-events-none absolute inset-x-0 top-16 mx-auto hidden h-144 max-w-7xl xl:block"
    >
      {TILES.map(({ Logo, place, size, float }) => (
        <div
          key={place}
          className={cn('absolute animate-rise-fade motion-reduce:animate-none', place)}
        >
          <div
            className={cn(
              'grid animate-float place-items-center rounded-xl border bg-linear-to-br from-muted/60 to-card text-foreground shadow-lg motion-reduce:animate-none',
              size,
              float,
            )}
          >
            <Logo className="size-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}
