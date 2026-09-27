import {
  BaseUiIcon,
  type BrandMark,
  NextjsIcon,
  ReactIcon,
  ShadcnIcon,
  TailwindIcon,
  TypeScriptIcon,
} from '@/components/icons'
import { cn } from '@/lib/utils'

// Positions, tilts and float offsets are written out in full, because Tailwind only generates classes it can read.
const MARKS: { Mark: BrandMark; position: string; float: string }[] = [
  { Mark: NextjsIcon, position: 'top-24 left-10 -rotate-6 delay-500', float: 'delay-0' },
  { Mark: ReactIcon, position: 'top-72 left-32 rotate-6 delay-700', float: 'delay-1000' },
  { Mark: TailwindIcon, position: 'top-116 left-8 -rotate-3 delay-1000', float: 'delay-500' },
  { Mark: TypeScriptIcon, position: 'top-20 right-12 rotate-6 delay-500', float: 'delay-700' },
  { Mark: ShadcnIcon, position: 'top-64 right-36 -rotate-6 delay-700', float: 'delay-300' },
  { Mark: BaseUiIcon, position: 'top-112 right-10 rotate-3 delay-1000', float: 'delay-1000' },
]

export function FloatingMarks() {
  return (
    <div
      aria-hidden="true"
      data-nosnippet
      className="pointer-events-none absolute inset-x-0 top-0 mx-auto hidden h-160 max-w-7xl xl:block"
    >
      {MARKS.map(({ Mark, position, float }) => (
        <div
          key={position}
          className={cn('absolute animate-rise-fade motion-reduce:animate-none', position)}
        >
          <div
            className={cn(
              'grid size-16 animate-float place-items-center rounded-xl border bg-linear-to-br from-muted to-card text-foreground shadow-lg motion-reduce:animate-none',
              float,
            )}
          >
            <Mark className="size-8" />
          </div>
        </div>
      ))}
    </div>
  )
}
