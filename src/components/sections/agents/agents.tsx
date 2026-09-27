import { SectionHeading } from '@/components/section-heading'
import { AgentSession } from '@/components/sections/agents/agent-session'
import { agents } from '@/content/agents'
import { withInlineCode } from '@/lib/inline-code'

export function Agents() {
  return (
    <section id="agents" aria-labelledby="agents-title" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            align="start"
            titleId="agents-title"
            eyebrow={agents.eyebrow}
            title={agents.title}
            description={agents.description}
          />
          <ul className="flex flex-col gap-6">
            {agents.points.map((point) => (
              <li key={point.title} className="flex reveal items-start gap-4">
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-lg border bg-card shadow-xs"
                >
                  <point.icon className="size-4" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold">{point.title}</h3>
                  <p className="text-sm text-pretty text-muted-foreground">
                    {withInlineCode(point.description)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-hidden="true"
          data-nosnippet
          className="flex h-80 reveal items-center justify-center overflow-hidden rounded-2xl border bg-linear-to-b from-muted/50 to-card p-6 shadow-sm"
        >
          <AgentSession />
        </div>
      </div>
    </section>
  )
}
