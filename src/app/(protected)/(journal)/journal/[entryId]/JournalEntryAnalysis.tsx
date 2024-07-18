import { getAnalysisOnEntry } from "@/app/actions/getAnalysisOnEntry"
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/catalyst/description-list"

interface JournalEntryAnalysisProps {
  entryId: string
}

export async function JournalEntryAnalysis({
  entryId,
}: JournalEntryAnalysisProps) {
  const entryAnalysis = await getAnalysisOnEntry(entryId)

  return (
    <section className="col-span-1 p-2">
      <h2 className="text-3xl font-bold">Analysis</h2>
      <DescriptionList>
        <DescriptionTerm>Mood</DescriptionTerm>
        <DescriptionDetails>{entryAnalysis.mood}</DescriptionDetails>

        <DescriptionTerm>Subject</DescriptionTerm>
        <DescriptionDetails>{entryAnalysis.subject}</DescriptionDetails>

        <DescriptionTerm>Summary</DescriptionTerm>
        <DescriptionDetails>{entryAnalysis.summary}</DescriptionDetails>
      </DescriptionList>
    </section>
  )
}
