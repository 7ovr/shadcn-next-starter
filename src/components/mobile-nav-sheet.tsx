'use client'

import Link from 'next/link'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import type { NavLink } from '@/content/navigation'

export function MobileNavSheet({
  open,
  onOpenChange,
  links,
  trigger,
  children,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  links: NavLink[]
  trigger: React.RefObject<HTMLButtonElement | null>
  children: React.ReactNode
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {/* The trigger lives outside the sheet, so closing hands focus back to it by name. */}
      <SheetContent side="right" finalFocus={trigger}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => onOpenChange(false)}
              className="rounded-md px-3 py-2 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto grid p-4">{children}</div>
      </SheetContent>
    </Sheet>
  )
}
