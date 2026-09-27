import { Stage } from '@/components/mockup'
import { SectionHeading } from '@/components/section-heading'
import { StepVisual } from '@/components/step-visuals'
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

        <ol className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.items.map((step, index) => (
            <li key={step.title} className="flex reveal flex-col gap-5">
              <Stage variant={index + 1} className="h-48">
                <StepVisual name={step.visual} />
              </Stage>
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
