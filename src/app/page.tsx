import { Cta } from '@/components/sections/cta/cta'
import { Faq } from '@/components/sections/faq/faq'
import { Features } from '@/components/sections/features/features'
import { Hero } from '@/components/sections/hero/hero'
import { Pricing } from '@/components/sections/pricing/pricing'
import { Stack } from '@/components/sections/stack/stack'
import { Steps } from '@/components/sections/steps/steps'
import { Testimonials } from '@/components/sections/testimonials/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <Features />
      <Steps />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
    </>
  )
}
