import Link from 'next/link'

import { ButtonLink } from '@/components/button-link'
import { GitHubIcon } from '@/components/icons'
import { Logo } from '@/components/logo'
import { MobileNav } from '@/components/mobile-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { siteConfig } from '@/config/site'
import { hero } from '@/content/hero'
import { headerNav } from '@/content/navigation'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 header-surface border-b backdrop-blur">
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <Logo />
        </Link>

        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
        >
          {headerNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <span className="max-sm:hidden">
            <ButtonLink href={hero.primaryAction.href}>
              <GitHubIcon data-icon="inline-start" />
              {hero.primaryAction.label}
            </ButtonLink>
          </span>
          <span className="md:hidden">
            <MobileNav links={headerNav} action={hero.primaryAction} />
          </span>
        </div>
      </div>
    </header>
  )
}
