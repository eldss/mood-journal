import "@/styles/tailwind.css"
import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: {
    template: "%s - Mood",
    default: "Mood Journal",
  },
  description:
    "Mood Journal, powered by AI, offers personalized journaling experiences by analyzing your mood patterns. It leverages advanced algorithms to provide insights and recommendations, making it your proactive mental health companion.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="bg-zinc-100 text-zinc-950 antialiased dark:bg-zinc-900 dark:text-white"
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="mx-auto max-w-screen-2xl">{children}</body>
    </html>
  )
}
