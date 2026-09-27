import { ArrowUpRightIcon } from 'lucide-react'

import { ButtonLink } from '@/components/button-link'
import { CopyCommand } from '@/components/copy-command'
import { SectionHeading } from '@/components/section-heading'
import { AppShell } from '@/components/sections/app-starter/app-shell'
import { appStarter } from '@/content/app-starter'

export function AppStarter() {
  return (
    <section
      id="app-starter"
      aria-labelledby="app-starter-title"
      className="px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 overflow-hidden rounded-3xl border bg-card p-8 shadow-sm sm:p-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-8">
          <SectionHeading
            align="start"
            titleId="app-starter-title"
            eyebrow={appStarter.eyebrow}
            title={appStarter.title}
            description={appStarter.description}
          />
          <div className="flex max-w-full flex-col items-start gap-4">
            <ButtonLink href={appStarter.action.href} size="lg">
              {appStarter.action.label}
              <ArrowUpRightIcon data-icon="inline-end" />
            </ButtonLink>
            <CopyCommand command={appStarter.command} highlight={appStarter.commandHighlight} />
          </div>
        </div>
        <div aria-hidden="true" data-nosnippet className="flex reveal items-center justify-center">
          <AppShell />
        </div>
      </div>
    </section>
  )
}
