import { Agents } from '@/components/sections/agents/agents'
import { AppStarter } from '@/components/sections/app-starter/app-starter'
import { Cta } from '@/components/sections/cta/cta'
import { Faq } from '@/components/sections/faq/faq'
import { Features } from '@/components/sections/features/features'
import { Hero } from '@/components/sections/hero/hero'
import { Steps } from '@/components/sections/steps/steps'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Steps />
      <Agents />
      <AppStarter />
      <Faq />
      <Cta />
    </>
  )
}
