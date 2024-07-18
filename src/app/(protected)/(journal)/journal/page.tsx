import { createNewJournalEntry } from "@/app/actions/createNewJournalEntry"
import { Link } from "@/components/catalyst/link"
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
    <article className="mx-4 max-w-screen-lg lg:mx-auto">
      <header className="my-4 flex items-center justify-between">
        <h1 className="text-5xl font-bold">Journal</h1>
        <NewJournalEntryDialog createNewEntry={createNewJournalEntry} />
      </header>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`}>
            <JournalEntryCard key={entry.id} entry={entry} />
          </Link>
        ))}
      </section>
    </article>
  )
}
