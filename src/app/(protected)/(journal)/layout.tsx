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
      <main>{children}</main>
    </>
  )
}
