"use server"

import { analyze } from "@/utils/ai"
import prisma from "@/utils/db"

/**
 * Get the analysis of a journal entry. Create the analysis if it doesn't exist.
 * @param entryId journal entry id
 * @returns analysis of the journal entry
 */
export async function getAnalysisOnEntry(entryId: string) {
  let analysis = await prisma.analysis.findUnique({
    where: {
      entryId: entryId,
    },
  })

  if (analysis) {
    console.log(
      `Analysis already exists for entry ${entryId}. Returning existing analysis.`
    )
    return analysis
  } else {
    console.log(`No analysis yet for entry ${entryId}. Running AI analysis...`)
    const entry = await prisma.journalEntry.findUniqueOrThrow({
      where: {
        id: entryId,
      },
    })

    const newAnalysis = await analyze(entry.content)
    analysis = await prisma.analysis.create({
      data: {
        entryId: entryId,
        ...newAnalysis,
      },
    })

    return analysis
  }
}
