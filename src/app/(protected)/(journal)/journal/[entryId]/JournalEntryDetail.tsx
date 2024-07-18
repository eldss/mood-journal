import { Text } from "@/components/catalyst/text"
import prisma from "@/utils/db"
import { formatDate } from "@/utils/formatDate"

interface JournalEntryDetailProps {
  entryId: string
}

export async function JournalEntryDetail({ entryId }: JournalEntryDetailProps) {
  const entry = await prisma.journalEntry.findUniqueOrThrow({
    where: {
      id: entryId,
    },
  })

  return (
    <div className="col-span-2 p-2">
      <header className="mb-2">
        <h1 className="text-5xl font-bold">
          <span>
            Entry on <time>{formatDate(entry.createdAt)}</time>
          </span>
        </h1>
      </header>
      <section>
        <Text>{entry.content}</Text>
      </section>
    </div>
  )
}
