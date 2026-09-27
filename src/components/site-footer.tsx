import Link from 'next/link'

import { ButtonLink } from '@/components/button-link'
import { GitHubIcon, LogoMark, XIcon } from '@/components/icons'
import { Logo } from '@/components/logo'
import { FooterThemeToggle } from '@/components/theme-toggle'
import { siteConfig } from '@/config/site'
import { type NavLink, footerColumns } from '@/content/navigation'

function FooterLink({ link }: { link: NavLink }) {
  const className =
    'text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none'

  return link.external ? (
    <a href={link.href} target="_blank" rel="noreferrer" className={className}>
      {link.label}
    </a>
  ) : (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-10 px-4 py-14 sm:grid-cols-3 sm:px-6 lg:grid-cols-5">
        <div className="col-span-2 flex flex-col items-start gap-5 sm:col-span-3 lg:col-span-2">
          <Link
            href="/"
            aria-label={siteConfig.name}
            className="rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <Logo />
          </Link>
          <p className="max-w-xs text-sm text-pretty text-muted-foreground">
            {siteConfig.description}
          </p>
          <FooterThemeToggle />
        </div>

        {footerColumns.map((column) => {
          const titleId = `footer-${column.title.toLowerCase().replaceAll(' ', '-')}`
          return (
            <nav key={column.title} aria-labelledby={titleId} className="flex flex-col gap-4">
              <h2
                id={titleId}
                className="text-xs font-medium tracking-wider text-muted-foreground uppercase"
              >
                {column.title}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </nav>
          )
        })}
      </div>

      <div className="border-t">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5 text-sm text-muted-foreground sm:px-6">
          <p className="flex items-center gap-1.5">
            Built by
            <a
              href={siteConfig.author.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-sm font-medium text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <LogoMark className="size-4" />
              {siteConfig.author.name}
            </a>
          </p>
          <div className="flex items-center gap-1">
            <ButtonLink
              href={siteConfig.links.repository}
              aria-label="Source On GitHub"
              variant="ghost"
              size="icon-sm"
            >
              <GitHubIcon />
            </ButtonLink>
            <ButtonLink
              href={siteConfig.links.x}
              aria-label="7Ovr On X"
              variant="ghost"
              size="icon-sm"
            >
              <XIcon />
            </ButtonLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
