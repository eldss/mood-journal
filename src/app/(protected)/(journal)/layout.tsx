import { JournalSideBar } from "@/components/JournalSideBar"
import { NavBar } from "@/components/NavBar"

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      {/* Sidebar width in tailwind config via grid template */}
      <main className="sm:grid sm:grid-cols-sidebar">
        <section className="hidden sm:block">
          <JournalSideBar />
        </section>
        <section className="p-4">{children}</section>
      </main>
    </>
  )
}
