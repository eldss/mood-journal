import { auth } from "@clerk/nextjs/server"
import { User } from "@prisma/client"
import prisma from "./db"

export async function getUserByClerkId(): Promise<User> {
  const { userId } = auth()

  if (!userId) {
    throw new Error("Problem getting user ID from Clerk")
  }

  return await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  })
}
