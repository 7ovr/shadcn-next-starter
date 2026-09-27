import { SectionHeading } from '@/components/section-heading'
import { FeatureVisual } from '@/components/sections/features/feature-visuals'
import { type FeatureVisual as FeatureVisualName, features } from '@/content/features'
import { withInlineCode } from '@/lib/inline-code'
import { cn } from '@/lib/utils'

// The bento's wide cells; with four columns, each row pairs one of them with two narrow ones.
const WIDE = new Set<FeatureVisualName>(['prerender', 'presets'])

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          titleId="features-title"
          eyebrow={features.eyebrow}
          title={features.title}
          description={features.description}
        />

        <ul className="grid reveal gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 xl:grid-cols-4">
          {features.items.map((item) => (
            <li
              key={item.title}
              className={cn(
                'flex min-h-88 flex-col gap-6 bg-background p-6 sm:p-8',
                WIDE.has(item.visual) && 'sm:col-span-2',
              )}
            >
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">
                  {withInlineCode(item.description)}
                </p>
              </div>
              <div
                aria-hidden="true"
                data-nosnippet
                className="relative flex flex-1 items-center justify-center"
              >
                <FeatureVisual name={item.visual} />
              </div>
            </li>
          ))}
        </ul>

        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.extras.map((item) => (
            <li key={item.title} className="flex reveal items-start gap-3">
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-lg border bg-card shadow-xs"
              >
                <item.icon className="size-4" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
