import type { VariantProps } from 'class-variance-authority'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ButtonLinkProps = Omit<React.ComponentProps<'a'>, 'className' | 'href'> &
  VariantProps<typeof buttonVariants> & { href: string }

// A link styled as a Button. cn resolves the variant's conflicting classes, as Button itself does.
export function ButtonLink({ href, variant, size, children, ...props }: ButtonLinkProps) {
  const className = cn(buttonVariants({ variant, size }))

  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}
