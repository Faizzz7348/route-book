"use client"

import { SidebarLayout } from "@/components/app-sidebar";
import { Calendar, XCircle, Clock } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { useEffect, useState } from "react";

export default function ExpiredPage() {
  const expiredEvents = [
    { id: 1, title: "Route KL 3 - Completed", date: "2025-12-10", time: "08:00 - 12:00", status: "completed" },
    { id: 2, title: "Route KL 4 - Completed", date: "2025-12-12", time: "14:00 - 18:00", status: "completed" },
    { id: 3, title: "Route KL 3 - Cancelled", date: "2025-12-08", time: "08:00 - 12:00", status: "cancelled" },
    { id: 4, title: "Route KL 4 - Completed", date: "2025-12-09", time: "08:00 - 12:00", status: "completed" },
  ];

  const [countdowns, setCountdowns] = useState<Record<number, string>>({});

  const calculateTimeAgo = (dateStr: string) => {
    const eventDate = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - eventDate.getTime();
    
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    
    if (diffMonths > 0) return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
    if (diffWeeks > 0) return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`;
    if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffMinutes > 0) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    return 'Just now';
  };

  useEffect(() => {
    const updateCountdowns = () => {
      const newCountdowns: Record<number, string> = {};
      expiredEvents.forEach(event => {
        newCountdowns[event.id] = calculateTimeAgo(event.date);
      });
      setCountdowns(newCountdowns);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <SidebarLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">Expired Events</h2>
          <p className="text-muted-foreground">
            View past and cancelled route schedules with countdown timers.
          </p>
        </div>

        <div className="space-y-3">{expiredEvents.map((event) => (
            <div
              key={event.id}
              className={`relative rounded-lg border p-4 shadow-sm transition-all ${
                event.status === "completed"
                  ? "border-border/50 bg-card/50 opacity-70 hover:opacity-100"
                  : "border-red-500/30 bg-red-500/5 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="absolute top-3 right-3 flex items-center gap-2 bg-background/90 px-3 py-1 rounded-full border border-border">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">
                  {countdowns[event.id] || 'Calculating...'}
                </span>
              </div>

              <div className="flex items-start gap-3 pr-32">
                <div className={`p-2 rounded-lg ${
                  event.status === "completed" ? "bg-muted" : "bg-red-500/20"
                }`}>
                  {event.status === "completed" ? (
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.date} • {event.time}</p>
                  <span
                    className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                      event.status === "completed"
                        ? "bg-muted text-muted-foreground"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="mt-3 h-1 bg-border/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary/50 transition-all duration-1000"
                  style={{ 
                    width: `${Math.min(
                      100, 
                      ((new Date().getTime() - new Date(event.date).getTime()) / (1000 * 60 * 60 * 24 * 7)) * 100
                    )}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <FloatingDock />
    </SidebarLayout>
  );
}
