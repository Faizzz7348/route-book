"use client"

import { SidebarLayout } from "@/components/app-sidebar";
import { Calendar as CalendarComponent, CalendarEvent } from "@/components/ui/calendar";
import { useState } from "react";

export default function RoosterPage() {
  const events: CalendarEvent[] = [
    { id: 1, title: "Route KL 3 - Morning", date: "2025-12-15", time: "08:00 - 12:00", color: "bg-blue-500" },
    { id: 2, title: "Route KL 4 - Afternoon", date: "2025-12-15", time: "14:00 - 18:00", color: "bg-green-500" },
    { id: 3, title: "Route KL 3 - Evening", date: "2025-12-16", time: "08:00 - 12:00", color: "bg-blue-500" },
    { id: 4, title: "Route KL 4 - Morning", date: "2025-12-16", time: "08:00 - 12:00", color: "bg-green-500" },
    { id: 5, title: "Route KL 3 - Full Day", date: "2025-12-18", time: "08:00 - 18:00", color: "bg-blue-500" },
    { id: 6, title: "Route KL 4 - Special", date: "2025-12-18", time: "09:00 - 15:00", color: "bg-green-500" },
    { id: 7, title: "Route KL 3 - Express", date: "2025-12-20", time: "07:00 - 11:00", color: "bg-blue-500" },
    { id: 8, title: "Route KL 4 - Night", date: "2025-12-22", time: "18:00 - 22:00", color: "bg-green-500" },
    { id: 9, title: "Route KL 3 - Weekend", date: "2025-12-25", time: "10:00 - 14:00", color: "bg-blue-500" },
    { id: 10, title: "Route KL 4 - Holiday", date: "2025-12-25", time: "14:00 - 18:00", color: "bg-green-500" },
  ];

  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
  };

  return (
    <SidebarLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">Rooster Calendar</h2>
          <p className="text-muted-foreground">
            View and manage your route schedules in calendar view.
          </p>
        </div>

        <CalendarComponent 
          events={events}
          onEventClick={handleEventClick}
        />

        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedEvent(null)}>
            <div className="bg-card border border-sidebar-border rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-bold mb-4 text-sidebar-foreground">{selectedEvent.title}</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Date:</strong> {selectedEvent.date}</p>
                {selectedEvent.time && <p><strong>Time:</strong> {selectedEvent.time}</p>}
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-4 w-full px-4 py-2 bg-ocean-accent text-white rounded-lg hover:bg-ocean-accent/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </SidebarLayout>
  );
}
