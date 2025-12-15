"use client"

import { Calendar, Home, Inbox, Search, Settings, ChevronDown, Map, MapPin, Route } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Introduction",
    url: "/",
    icon: Home,
  },
  {
    title: "Route",
    icon: Route,
    items: [
      {
        title: "KL 3",
        url: "/routes/kl3",
        icon: MapPin,
      },
      {
        title: "KL 4",
        url: "/routes/kl4",
        icon: MapPin,
      },
    ],
  },
  {
    title: "Calendar",
    icon: Calendar,
    items: [
      {
        title: "Rooster",
        url: "/calendar/rooster",
        icon: Calendar,
      },
      {
        title: "Expired",
        url: "/calendar/expired",
        icon: Calendar,
      },
    ],
  },
]

export function AppSidebar() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    Route: true,
    Calendar: true,
  })

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border pb-2">
        <div className="flex items-center gap-2 px-2 py-1">
          <Map className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            Route Book
          </span>
        </div>
        <div className="px-2 pt-2">
          <div className="relative group-data-[collapsible=icon]:hidden">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md border border-sidebar-border bg-sidebar-accent/50 py-1.5 pl-8 pr-2 text-sm text-sidebar-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <SidebarMenuButton
                      onClick={() => toggleGroup(item.title)}
                      tooltip={item.title}
                      className="w-full"
                    >
                      {item.icon && <item.icon />}
                      <span className="flex-1">{item.title}</span>
                      <ChevronDown
                        className={`transition-transform group-data-[collapsible=icon]:hidden ${
                          openGroups[item.title] ? "rotate-180" : ""
                        }`}
                      />
                    </SidebarMenuButton>
                    {openGroups[item.title] && (
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.url}>
                                {subItem.icon && <subItem.icon className="h-4 w-4" />}
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </>
                ) : (
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Settings">
                <Link href="/settings">
                  <Settings />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border mt-auto">
        <div className="flex items-center gap-2 p-2 group-data-[collapsible=icon]:justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
            U
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-medium text-sidebar-foreground">User Name</span>
            <span className="text-xs text-muted-foreground">user@example.com</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
            <SidebarTrigger />
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-foreground">Route Book Dashboard</h1>
            </div>
          </header>
          <div className="p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  )
}
