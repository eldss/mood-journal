import { Text } from "@/components/catalyst/text"
import { Suspense } from "react"
import { JournalEntryAnalysis } from "./JournalEntryAnalysis"
import { JournalEntryDetail } from "./JournalEntryDetail"

export default async function JournalEntryDetailPage({
  params,
}: {
  params: { entryId: string }
}) {
  return (
    <article className="mx-4 mt-4 grid max-w-screen-lg grid-cols-3 lg:mx-auto">
      <Suspense fallback={<Text>Loading Journal Entry...</Text>}>
        <JournalEntryDetail entryId={params.entryId} />
      </Suspense>

      <Suspense fallback={<Text>Loading Analysis...</Text>}>
        <JournalEntryAnalysis entryId={params.entryId} />
      </Suspense>
    </article>
  )
}
