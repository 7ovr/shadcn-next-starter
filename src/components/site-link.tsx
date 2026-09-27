import Link from 'next/link'

export type SiteLinkProps = Omit<React.ComponentProps<'a'>, 'href'> & { href: string }

// Every link picks its own element from the URL: another site opens in a new tab, a page here goes through Next's Link.
export function SiteLink({ href, children, ...props }: SiteLinkProps) {
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}
