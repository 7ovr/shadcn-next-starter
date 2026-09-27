import type { StepVisual as StepVisualName } from '@/content/steps'

export function StepVisual({ name }: { name: StepVisualName }) {
  return (
    <p className="rounded-md border bg-background px-3 py-2 font-mono text-xs text-muted-foreground">
      {name}
    </p>
  )
}
