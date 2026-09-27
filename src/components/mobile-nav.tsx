'use client'

import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { ButtonLink } from '@/components/button-link'
import { GitHubIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import type { NavLink } from '@/content/navigation'

export function MobileNav({
  links,
  action,
}: {
  links: NavLink[]
  action: { label: string; href: string }
}) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Open Menu" />}>
        <MenuIcon aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto grid p-4">
          <ButtonLink href={action.href} size="lg">
            <GitHubIcon data-icon="inline-start" />
            {action.label}
          </ButtonLink>
        </div>
      </SheetContent>
    </Sheet>
  )
}
