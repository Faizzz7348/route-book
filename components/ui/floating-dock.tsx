"use client"

import { cn } from "@/lib/utils"
import { 
  Home, 
  Route, 
  Calendar, 
  Settings,
  FileText,
  Clock
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export type IconType = typeof Home

export interface DockItem {
  title: string
  icon: IconType
  href: string
}

const defaultItems: DockItem[] = [
  { title: "Home", icon: Home, href: "/" },
  { title: "KL 3", icon: Route, href: "/routes/kl3" },
  { title: "KL 4", icon: FileText, href: "/routes/kl4" },
  { title: "Rooster", icon: Calendar, href: "/calendar/rooster" },
  { title: "Expired", icon: Clock, href: "/calendar/expired" },
  { title: "Settings", icon: Settings, href: "/settings" },
]

interface FloatingDockProps {
  items?: DockItem[]
  className?: string
}

export function FloatingDock({ items = defaultItems, className }: FloatingDockProps) {
  const pathname = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500", className)}>
      <div className="flex items-end gap-2 px-4 py-3 rounded-2xl border border-sidebar-border bg-card/95 backdrop-blur-lg shadow-2xl">
        {items.map((item, idx) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          const isHovered = hoveredIndex === idx

          return (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex flex-col items-center group"
            >
              {/* Tooltip */}
              {isHovered && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-sidebar-primary text-sidebar-primary-foreground text-xs font-medium whitespace-nowrap shadow-lg animate-in fade-in zoom-in-95 duration-200">
                  {item.title}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-sidebar-primary rotate-45 -translate-y-1" />
                </div>
              )}

              {/* Icon Button */}
              <div
                className={cn(
                  "p-3 rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg scale-110"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:scale-110 hover:-translate-y-2"
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
