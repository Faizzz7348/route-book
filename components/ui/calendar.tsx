"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export type CalendarEvent = {
  id: string | number
  title: string
  date: string
  time?: string
  color?: string
}

interface CalendarProps {
  events?: CalendarEvent[]
  onDateClick?: (date: Date) => void
  onEventClick?: (event: CalendarEvent) => void
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export function Calendar({ events = [], onDateClick, onEventClick }: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(new Date())
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const startingDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const handleDateClick = (day: number) => {
    const date = new Date(year, month, day)
    setSelectedDate(date)
    onDateClick?.(date)
  }

  const getEventsForDate = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return events.filter(event => event.date === dateStr)
  }

  const isToday = (day: number) => {
    const today = new Date()
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    )
  }

  const isSelected = (day: number) => {
    if (!selectedDate) return false
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    )
  }

  const days = []
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className="p-2" />)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = getEventsForDate(day)
    days.push(
      <div
        key={day}
        onClick={() => handleDateClick(day)}
        className={cn(
          "min-h-[80px] p-2 border border-sidebar-border rounded-lg cursor-pointer transition-all",
          "hover:bg-sidebar-accent hover:border-sidebar-accent-foreground/20",
          isToday(day) && "bg-ocean-accent/10 border-ocean-accent",
          isSelected(day) && "bg-sidebar-accent border-sidebar-accent-foreground/30"
        )}
      >
        <div className={cn(
          "text-sm font-semibold mb-1",
          isToday(day) && "text-ocean-accent",
          !isToday(day) && "text-sidebar-foreground"
        )}>
          {day}
        </div>
        <div className="space-y-1">
          {dayEvents.slice(0, 2).map((event) => (
            <div
              key={event.id}
              onClick={(e) => {
                e.stopPropagation()
                onEventClick?.(event)
              }}
              className={cn(
                "text-xs px-2 py-1 rounded truncate",
                event.color || "bg-ocean-blue text-ocean-bright"
              )}
              title={event.title}
            >
              {event.title}
            </div>
          ))}
          {dayEvents.length > 2 && (
            <div className="text-xs text-muted-foreground pl-2">
              +{dayEvents.length - 2} more
            </div>
          )}
        </div>
      </div>
    )
  }

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate.getDate()) : []

  return (
    <div className="space-y-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-sidebar-foreground">
          {MONTHS[month]} {year}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="p-2 rounded-lg border border-sidebar-border hover:bg-sidebar-accent transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-lg border border-sidebar-border hover:bg-sidebar-accent transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="border border-sidebar-border rounded-lg p-4 bg-card">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {DAYS.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-semibold text-muted-foreground p-2"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {days}
        </div>
      </div>

      {/* Selected Date Events */}
      {selectedDate && selectedDateEvents.length > 0 && (
        <div className="border border-sidebar-border rounded-lg p-4 bg-card">
          <h3 className="text-lg font-semibold mb-3 text-sidebar-foreground">
            Events for {MONTHS[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}
          </h3>
          <div className="space-y-2">
            {selectedDateEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => onEventClick?.(event)}
                className={cn(
                  "p-3 rounded-lg cursor-pointer transition-all",
                  event.color || "bg-ocean-blue/20 hover:bg-ocean-blue/30"
                )}
              >
                <div className="font-semibold text-sidebar-foreground">{event.title}</div>
                {event.time && (
                  <div className="text-sm text-muted-foreground">{event.time}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
