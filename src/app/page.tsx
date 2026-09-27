import { Agents } from '@/components/agents'
import { AppStarter } from '@/components/app-starter'
import { Cta } from '@/components/cta'
import { Faq } from '@/components/faq'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { JsonLd } from '@/components/json-ld'
import { Stack } from '@/components/stack'
import { Steps } from '@/components/steps'
import { faq } from '@/content/faq'
import { faqPageSchema } from '@/lib/structured-data'

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(faq.items)} />
      <Hero />
      <Stack />
      <Features />
      <Steps />
      <Agents />
      <AppStarter />
      <Faq />
      <Cta />
    </>
  )
}
