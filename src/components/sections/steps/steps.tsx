import { SectionHeading } from '@/components/section-heading'
import { StepVisual } from '@/components/sections/steps/step-visuals'
import { steps } from '@/content/steps'
import { withInlineCode } from '@/lib/inline-code'

export function Steps() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          titleId="how-it-works-title"
          eyebrow={steps.eyebrow}
          title={steps.title}
          description={steps.description}
        />

        <ol className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.items.map((step, index) => (
            <li key={step.title} className="flex reveal flex-col gap-5">
              <div
                aria-hidden="true"
                data-nosnippet
                className="flex h-44 items-center justify-center overflow-hidden rounded-2xl border bg-linear-to-b from-muted/50 to-card p-5"
              >
                <StepVisual name={step.visual} />
              </div>
              <div aria-hidden="true" className="flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-full border bg-background font-mono text-xs font-semibold shadow-xs">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading font-semibold">{step.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">
                  {withInlineCode(step.description)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
