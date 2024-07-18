"use server"

import { getUserByClerkId } from "@/utils/auth"
import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createNewJournalEntry(formData: FormData) {
  console.log("Creating new journal entry...")

  // Authorize the request
  const user = await getUserByClerkId()
  if (!user) {
    throw new Error("Must be signed in to create a journal entry")
  }

  // Extract the content from the form
  const rawFormData = {
    content: formData.get("content") as string,
  }

  // Validate content
  if (!rawFormData.content || rawFormData.content === "") {
    throw new Error("Entry must have non-zero length.")
  }

  // Create the entry
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: rawFormData.content,
    },
  })
  console.log("Created entry:", entry.id)

  // Refresh entries in journal page
  revalidatePath("/journal", "page")
  redirect(`/journal/${entry.id}`)
}
