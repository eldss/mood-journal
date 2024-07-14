import { Text } from "@/components/catalyst/text"
import prisma from "@/utils/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

async function createNewUser() {
  console.log("Creating new user")
  console.log("Getting Clerk user...")
  const user = await currentUser()
  if (user) {
    console.log("Checking if user exists locally...")
    const match = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    })

    if (!match) {
      console.log("Creating local user...")
      await prisma.user.create({
        data: {
          clerkId: user.id,
          email: user.primaryEmailAddress?.emailAddress || "",
        },
      })
    }

    redirect("/journal")
  } else {
    throw new Error("User not found")
  }
}

export default async function NewUserPage() {
  await createNewUser()
  return (
    <main>
      <Text>This text will never be reached</Text>
    </main>
  )
}
