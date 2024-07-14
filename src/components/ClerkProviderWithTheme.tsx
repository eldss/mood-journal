"use client"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { useEffect, useState } from "react"

const TEAL = "#0d9488"

export function ClerkProviderWithTheme({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    const matcher = window.matchMedia("(prefers-color-scheme: dark)")
    setDarkMode(matcher.matches)
    matcher.addEventListener("change", (e) => setDarkMode(e.matches))
    return () => matcher.removeEventListener("change", (e) => setDarkMode(e.matches))
  })
  return (
    <ClerkProvider
      appearance={{
        baseTheme: darkMode ? dark : undefined,
        variables: {
          colorPrimary: TEAL,
        },
        elements: {
          buttonArrowIcon: "hidden",
        },
      }}
    >
      {children}
    </ClerkProvider>
  )
}
