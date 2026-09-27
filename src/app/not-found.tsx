import { ButtonLink } from '@/components/button-link'
import { createMetadata } from '@/lib/metadata'

// Without its own metadata a 404 would inherit the home page's title and canonical; Next already sends noindex.
export const metadata = {
  ...createMetadata({
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist or has moved.',
    path: '',
    noIndex: true,
  }),
  robots: null,
}

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-start gap-5 px-4 py-24 sm:px-6 sm:py-32">
      <h1 className="font-heading text-4xl font-bold tracking-tight">Page Not Found</h1>
      <p className="max-w-xl text-lg text-pretty text-muted-foreground">
        The page you are looking for does not exist or has moved.
      </p>
      <ButtonLink href="/" size="lg">
        Back To The Start
      </ButtonLink>
    </section>
  )
}
