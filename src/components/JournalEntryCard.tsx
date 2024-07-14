import { JournalEntry } from "@prisma/client"
import { Text } from "./catalyst/text"

interface JournalEntryCardProps {
  entry: JournalEntry
}

export function JournalEntryCard({ entry }: JournalEntryCardProps) {
  return (
    <article className="h-40 rounded-lg border border-zinc-950/15 bg-white p-2 text-zinc-950 drop-shadow-sm dark:border-white/5 dark:bg-zinc-800 dark:text-white dark:drop-shadow-none">
      <header className="mb-2">
        <time className="text-xs">
          <Text>
            {entry.createdAt.toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </Text>
        </time>
      </header>
      <section className="line-clamp-4 text-balance">{entry.content}</section>
    </article>
  )
}
