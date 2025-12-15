import { SidebarLayout } from "@/components/app-sidebar";
import { Calendar, Route, MapPin } from "lucide-react";

export default function Home() {
  return (
    <SidebarLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">
            Welcome to Route Book
          </h2>
          <p className="text-muted-foreground">
            Route management system with ocean deep blue theme, inspired by RasEngSN.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Route className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Routes</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Manage your KL 3 and KL 4 routes efficiently with real-time tracking.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Calendar</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              View rooster schedules and expired events in an intuitive calendar view.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Locations</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Track all stations and stops along your routes with precise location data.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">🌊 Ocean Deep Blue Theme</h3>
          <p className="text-muted-foreground mb-4">
            This application features a beautiful ocean-inspired dark theme with smooth animations and transitions,
            following the design language from the RasEngSN project.
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-1 rounded-full bg-[#0a1929] text-[#e3f2fd] text-sm border border-primary/30">
              Ocean Deep
            </div>
            <div className="px-3 py-1 rounded-full bg-[#132f4c] text-[#e3f2fd] text-sm border border-primary/30">
              Ocean Blue
            </div>
            <div className="px-3 py-1 rounded-full bg-[#1e4976] text-[#e3f2fd] text-sm border border-primary/30">
              Ocean Medium
            </div>
            <div className="px-3 py-1 rounded-full bg-[#4fc3f7] text-[#0a1929] text-sm font-semibold border border-primary">
              Ocean Accent
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

