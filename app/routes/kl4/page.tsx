"use client"

import { SidebarLayout } from "@/components/app-sidebar";
import { EditableCell } from "@/components/ui/editable-cell";
import { FloatingDock } from "@/components/ui/floating-dock";
import { useState } from "react";

export default function KL4Page() {
  const [routes, setRoutes] = useState([
    { no: 1, id: 140, station: "KL Sentral", schedule: "Daily", route: "KL 4" },
    { no: 2, id: 141, station: "Bangsar", schedule: "Daily", route: "KL 4" },
    { no: 3, id: 142, station: "Abdullah Hukum", schedule: "Weekly", route: "KL 4" },
    { no: 4, id: 143, station: "Kerinchi", schedule: "Daily", route: "KL 4" },
    { no: 5, id: 144, station: "Universiti", schedule: "Daily", route: "KL 4" },
  ]);

  const handleUpdate = (id: number, field: string, value: string | number) => {
    setRoutes(routes.map(route => 
      route.id === id ? { ...route, [field]: value } : route
    ));
  };

  return (
    <SidebarLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">KL 4 Route</h2>
          <p className="text-muted-foreground">
            Manage stations and schedules for the KL 4 route. Click on any cell to edit.
          </p>
        </div>

        <div className="rounded-lg border border-border overflow-hidden shadow-sm">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-card to-card/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">No</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Station</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Schedule</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Route</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr
                  key={route.id}
                  className="hover:bg-primary/5 transition-colors"
                >
                  <td className="px-4 py-3 text-sm text-foreground">
                    <EditableCell
                      value={route.no}
                      type="number"
                      dataKey="No"
                      onSave={(value) => handleUpdate(route.id, 'no', value)}
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-primary font-semibold">
                    <EditableCell
                      value={route.id}
                      type="number"
                      dataKey="ID"
                      onSave={(value) => handleUpdate(route.id, 'id', value)}
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    <EditableCell
                      value={route.station}
                      dataKey="Station"
                      onSave={(value) => handleUpdate(route.id, 'station', value)}
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        route.schedule === "Daily"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      }`}
                    >
                      {route.schedule}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    <EditableCell
                      value={route.route}
                      dataKey="Route"
                      onSave={(value) => handleUpdate(route.id, 'route', value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FloatingDock />
    </SidebarLayout>
  );
}
