import {
  Cog6ToothIcon,
  HomeIcon,
  MegaphoneIcon,
  Square2StackIcon,
  TicketIcon,
} from "@heroicons/react/16/solid"
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "./catalyst/sidebar"

export function JournalSideBar() {
  return (
    <Sidebar>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/events">
            <Square2StackIcon />
            <SidebarLabel>Events</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/orders">
            <TicketIcon />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/broadcasts">
            <MegaphoneIcon />
            <SidebarLabel>Broadcasts</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings">
            <Cog6ToothIcon />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  )
}
