import { ButtonLink } from '@/components/button-link'
import { GitHubIcon } from '@/components/icons'
import { SectionHeading } from '@/components/section-heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faq } from '@/content/faq'
import { withInlineCode } from '@/lib/inline-code'

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="flex flex-col gap-8 lg:sticky lg:top-24 lg:col-span-2 lg:self-start">
          <SectionHeading
            align="start"
            titleId="faq-title"
            eyebrow={faq.eyebrow}
            title={faq.title}
            description={faq.description}
          />
          <div className="flex reveal flex-col items-start gap-3 border-t pt-6">
            <p className="text-sm font-medium">{faq.contact.title}</p>
            <ButtonLink href={faq.contact.action.href} variant="outline">
              <GitHubIcon data-icon="inline-start" />
              {faq.contact.action.label}
            </ButtonLink>
          </div>
        </div>

        <div className="reveal lg:col-span-3">
          {/* hiddenUntilFound keeps closed answers in the HTML, for crawlers and find-in-page alike. */}
          <Accordion defaultValue={[faq.items[0].question]} hiddenUntilFound>
            {faq.items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>
                  <span className="py-1.5 text-base">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-pretty text-muted-foreground">
                    {withInlineCode(item.answer)}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
