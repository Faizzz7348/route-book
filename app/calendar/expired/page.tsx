import { SidebarLayout } from "@/components/app-sidebar";
import { Calendar, XCircle } from "lucide-react";

export default function ExpiredPage() {
  const expiredEvents = [
    { id: 1, title: "Route KL 3 - Completed", date: "2025-12-10", time: "08:00 - 12:00", status: "completed" },
    { id: 2, title: "Route KL 4 - Completed", date: "2025-12-12", time: "14:00 - 18:00", status: "completed" },
    { id: 3, title: "Route KL 3 - Cancelled", date: "2025-12-08", time: "08:00 - 12:00", status: "cancelled" },
    { id: 4, title: "Route KL 4 - Completed", date: "2025-12-09", time: "08:00 - 12:00", status: "completed" },
  ];

  return (
    <SidebarLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">Expired Events</h2>
          <p className="text-muted-foreground">
            View past and cancelled route schedules.
          </p>
        </div>

        <div className="space-y-3">
          {expiredEvents.map((event) => (
            <div
              key={event.id}
              className={`rounded-lg border p-4 shadow-sm transition-all ${
                event.status === "completed"
                  ? "border-border/50 bg-card/50 opacity-70 hover:opacity-100"
                  : "border-red-500/30 bg-red-500/5 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="flex items-start gap-3">
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
            </div>
          ))}
        </div>
      </div>
    </SidebarLayout>
  );
}
