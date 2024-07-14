"use client"
import { DefaultError } from "@/components/DefaultError"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <DefaultError reset={reset} />
      </body>
    </html>
  )
}
