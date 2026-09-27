import { Stage } from '@/components/mockup'
import { SectionHeading } from '@/components/section-heading'
import { FeatureVisual } from '@/components/sections/features/feature-visuals'
import { features } from '@/content/features'
import { withInlineCode } from '@/lib/inline-code'

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

        <ul className="grid reveal grid-cols-1 gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, index) => (
            <li key={item.title} className="flex flex-col gap-6 bg-background p-6 sm:p-8">
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">
                  {withInlineCode(item.description)}
                </p>
              </div>
              <Stage variant={index} className="mt-auto h-64">
                <FeatureVisual name={item.visual} />
              </Stage>
            </li>
          ))}
        </ul>

        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.extras.map((item) => (
            <li key={item.title} className="flex reveal items-start gap-3">
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-md border bg-linear-to-br from-muted to-background shadow-sm"
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
