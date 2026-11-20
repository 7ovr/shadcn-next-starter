'use client'

import { track } from '@vercel/analytics'

import { ButtonLink } from '@/components/button-link'
import { GitHubIcon } from '@/components/icons'

type TemplateLinkProps = {
  href: string
  label: string
  trackClick: boolean
}

export function TemplateLink({ href, label, trackClick }: TemplateLinkProps) {
  return (
    <ButtonLink
      href={href}
      size="lg"
      onClick={trackClick ? () => track('Use This Template') : undefined}
    >
      <GitHubIcon data-icon="inline-start" />
      {label}
    </ButtonLink>
  )
}
