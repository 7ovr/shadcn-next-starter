'use client'

import { useEffect, useState } from 'react'

import { Accordion } from '@/components/ui/accordion'

export function FaqAccordion({ ids, children }: { ids: string[]; children: React.ReactNode }) {
  const [value, setValue] = useState<string[]>(() => ids.slice(0, 1))

  useEffect(() => {
    const restore = () => {
      const id = window.location.hash.slice(1)
      setValue(ids.includes(id) ? [id] : id === 'faq' ? [] : ids.slice(0, 1))
    }
    restore()
    window.addEventListener('hashchange', restore)
    window.addEventListener('popstate', restore)
    return () => {
      window.removeEventListener('hashchange', restore)
      window.removeEventListener('popstate', restore)
    }
  }, [ids])

  return (
    <Accordion
      value={value}
      hiddenUntilFound
      onValueChange={(next) => {
        setValue(next)
        const url = new URL(window.location.href)
        url.hash = next.at(-1) ?? 'faq'
        if (url.hash !== window.location.hash) window.history.pushState(null, '', url)
      }}
    >
      {children}
    </Accordion>
  )
}
