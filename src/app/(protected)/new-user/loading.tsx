import { Text } from "@/components/catalyst/text"
import { BookOpenIcon } from "@heroicons/react/24/outline"

export default function LoadingNewUser() {
  return (
    <main className="flex h-svh w-svw items-center justify-center">
      <Text>Setting up your profile...</Text>
      <BookOpenIcon className="ml-2 h-6 w-6 animate-spin" />
    </main>
  )
}
