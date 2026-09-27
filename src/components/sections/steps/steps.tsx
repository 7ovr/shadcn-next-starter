import { CheckIcon } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
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

        <ol className="mx-auto flex w-full max-w-3xl flex-col gap-10">
          {steps.items.map((step, index) => (
            <li key={step.title} className="relative flex reveal gap-5">
              {index < steps.items.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-12 -bottom-8 left-5 w-px bg-border"
                />
              ) : null}
              <span
                aria-hidden="true"
                className="relative grid size-10 shrink-0 place-items-center rounded-xl border bg-card shadow-sm"
              >
                <step.icon className="size-4" />
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-4 pt-1.5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-semibold">{step.title}</h3>
                  <p className="text-sm text-pretty text-muted-foreground">
                    {withInlineCode(step.description)}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-lg border bg-card px-4 py-2.5 text-sm shadow-xs">
                  <span className="flex items-center gap-2 font-medium">
                    <CheckIcon aria-hidden="true" className="size-4" />
                    {step.result.label}
                  </span>
                  <code className="truncate font-mono text-xs text-muted-foreground">
                    {step.result.detail}
                  </code>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
