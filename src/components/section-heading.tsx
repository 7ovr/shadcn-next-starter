import { Eyebrow, type EyebrowProps } from '@/components/eyebrow'
import { withInlineCode } from '@/lib/inline-code'
import { cn } from '@/lib/utils'

export function SectionHeading({
  titleId,
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  titleId: string
  eyebrow: EyebrowProps
  title: string
  description: string
  align?: 'center' | 'start'
}) {
  return (
    <div
      className={cn(
        'flex reveal flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-2xl items-center text-center' : 'items-start',
      )}
    >
      <Eyebrow {...eyebrow} />
      <h2
        id={titleId}
        className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>
      <p className="text-pretty text-muted-foreground sm:text-lg">{withInlineCode(description)}</p>
    </div>
  )
}
