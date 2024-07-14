import { UserButton } from "@clerk/nextjs"
import { BookOpenIcon } from "@heroicons/react/24/solid"
import { Link } from "./catalyst/link"
import { Navbar, NavbarSpacer } from "./catalyst/navbar"

export function NavBar() {
  return (
    <>
      <Navbar className="px-8">
        <Link href="/journal" aria-label="Journal">
          <BookOpenIcon className="size-8 text-teal-950 dark:text-teal-700" />
        </Link>
        <NavbarSpacer />
        <ReactiveUserButton />
      </Navbar>
      {/* Bottom border with gradient that fades on left and right */}
      <div className="h-px bg-gradient-to-r from-teal-500/0 via-teal-950/50 to-teal-500/0 dark:via-teal-700/50" />
    </>
  )
}

/**
 * Returns a user button with a User's name on large screen sizes and without a
 * name on small screen sizes.
 */
function ReactiveUserButton() {
  return (
    <>
      {/* With name */}
      <div className="hidden sm:block">
        <UserButton
          showName
          appearance={{
            elements: {
              userButtonAvatarBox: "size-8",
            },
          }}
        />
      </div>
      {/* Without name */}
      <div className="block sm:hidden">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "size-8",
            },
          }}
        />
      </div>
    </>
  )
}
