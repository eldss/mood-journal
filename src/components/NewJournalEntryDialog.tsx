"use client"

import { PlusIcon } from "@heroicons/react/16/solid"
import { useState } from "react"
import { Button } from "./catalyst/button"
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "./catalyst/dialog"
import { Field } from "./catalyst/fieldset"
import { Textarea } from "./catalyst/textarea"

interface NewJournalEntryDialogProps {
  /** Server action. Passed as props to preserve Clerk headers. */
  createNewEntry: (formData: FormData) => void
}

export function NewJournalEntryDialog({
  createNewEntry,
}: NewJournalEntryDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        type="button"
        color="teal"
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <PlusIcon className="max-[450px]:stroke-white" />
        <span className="max-[450px]:sr-only">New Entry</span>
      </Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>New Journal Entry</DialogTitle>
        <form action={createNewEntry}>
          <DialogBody>
            <Field>
              <Textarea
                name="content"
                aria-label="Entry text box"
                rows={10}
                required
              />
            </Field>
          </DialogBody>
          <DialogActions>
            <Button plain onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" onClick={() => setIsOpen(false)}>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}
