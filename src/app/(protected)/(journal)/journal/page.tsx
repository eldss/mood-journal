import { createNewJournalEntry } from "@/app/actions/createNewJournalEntry"
import { JournalEntryCard } from "@/components/JournalEntryCard"
import { NewJournalEntryDialog } from "@/components/NewJournalEntryDialog"
import { getUserByClerkId } from "@/utils/auth"
import prisma from "@/utils/db"

async function getEntries() {
  const user = await getUserByClerkId()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  })
  return entries
}

export default async function JournalPage() {
  const entries = await getEntries()

  return (
    <article>
      <header className="mb-4 flex justify-between sm:block sm:space-y-4">
        <h1 className="text-4xl font-bold sm:text-5xl">Journal</h1>
        <NewJournalEntryDialog createNewEntry={createNewJournalEntry} />
      </header>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {entries.map((entry) => (
          <JournalEntryCard key={entry.id} entry={entry} />
        ))}
      </section>
    </article>
  )
}
