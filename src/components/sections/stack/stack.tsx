import {
  BaseUiIcon,
  type BrandMark,
  NextjsIcon,
  ReactIcon,
  ShadcnIcon,
  TailwindIcon,
  TypeScriptIcon,
  VercelIcon,
} from '@/components/icons'
import { stack } from '@/content/hero'

const MARKS: Record<(typeof stack.items)[number], BrandMark> = {
  'Next.js': NextjsIcon,
  React: ReactIcon,
  TypeScript: TypeScriptIcon,
  'Tailwind CSS': TailwindIcon,
  'shadcn/ui': ShadcnIcon,
  'Base UI': BaseUiIcon,
  Vercel: VercelIcon,
}

export function Stack() {
  return (
    <section aria-label="Built With" className="px-4 pt-4 pb-8 sm:px-6">
      <div className="mx-auto flex max-w-5xl reveal flex-col items-center gap-8">
        <p className="text-sm text-muted-foreground">{stack.caption}</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {stack.items.map((name) => {
            const Mark = MARKS[name]
            return (
              <li
                key={name}
                className="flex items-center gap-2.5 text-foreground grayscale transition hover:grayscale-0"
              >
                <Mark className="size-6" />
                <span className="text-sm font-semibold">{name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
