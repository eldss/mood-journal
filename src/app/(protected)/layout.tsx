import { ClerkProviderWithTheme } from "@/components/ClerkProviderWithTheme"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClerkProviderWithTheme>{children}</ClerkProviderWithTheme>
}
