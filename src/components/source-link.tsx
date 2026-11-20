import { ArrowUpRightIcon } from 'lucide-react'

import { SiteLink } from '@/components/site-link'

// A quiet link under a card's copy to the file, guide or run that backs it up.
export function SourceLink({ href, label }: { href: string; label: string }) {
  return (
    <SiteLink
      href={href}
      className="group/source inline-flex w-fit items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <span className="underline decoration-foreground/25 underline-offset-4 transition-colors group-hover/source:decoration-foreground">
        {label}
      </span>
      <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />
    </SiteLink>
  )
}
