import { Button } from "./catalyst/button"
import { Heading } from "./catalyst/heading"

interface DefaultErrorProps {
  reset: () => void
}

export function DefaultError({ reset }: DefaultErrorProps) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <Heading>Something went wrong!</Heading>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
