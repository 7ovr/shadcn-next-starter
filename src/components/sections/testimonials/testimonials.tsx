import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { testimonials } from '@/content/testimonials'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

// Plain quotes on purpose: reviews a site publishes about itself do not qualify as review markup.
export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          titleId="testimonials-title"
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          description={testimonials.description}
        />

        <ul className="grid gap-4 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <li key={item.name} className="flex reveal">
              <figure className="flex flex-1 flex-col justify-between gap-8 rounded-2xl border bg-card p-6">
                <div className="flex flex-col gap-4">
                  <span className="self-start">
                    <Badge variant="outline">Sample</Badge>
                  </span>
                  <blockquote className="text-pretty">&ldquo;{item.quote}&rdquo;</blockquote>
                </div>
                <figcaption className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-muted text-xs font-semibold text-foreground"
                  >
                    {initials(item.name)}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold">{item.name}</span>
                    <span className="text-sm text-muted-foreground">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
