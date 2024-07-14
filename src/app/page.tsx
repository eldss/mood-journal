import { Button } from "@/components/catalyst/button"
import { Heading, Subheading } from "@/components/catalyst/heading"
import { Text } from "@/components/catalyst/text"
import { ArrowRightIcon } from "@heroicons/react/16/solid"

export default async function LandingPage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center">
      <header className="flex flex-col items-center">
        <Heading className="mb-12 text-6xl sm:text-7xl">Mood Journal</Heading>
        <Subheading className="text-xl sm:text-2xl">
          The best journal app. Period.
        </Subheading>
      </header>
      <section className="mx-auto max-w-xl p-8">
        <div className="mb-8 text-center">
          <Button href="/journal" color="teal">
            Click to Get Started <ArrowRightIcon />
          </Button>
        </div>
        <Text className="text-zinc-700 dark:text-zinc-200">
          Mood Journal, powered by AI, offers personalized journaling
          experiences by analyzing your mood patterns. It leverages advanced
          algorithms to provide insights and recommendations, making it your
          proactive mental health companion.
        </Text>
      </section>
    </main>
  )
}
