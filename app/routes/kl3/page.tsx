"use client"

import { SidebarLayout } from "@/components/app-sidebar";
import { EditableCell } from "@/components/ui/editable-cell";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { Info, GripVertical, Power, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export default function KL3Page() {
  const [routes, setRoutes] = useState([
    { 
      id: 1,
      route: "KL 3",
      no: 1,
      code: "M0130",
      location: "KLCC",
      delivery: "Daily",
      images: [
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=400",
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400",
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400"
      ],
      active: true
    },
    { 
      id: 2,
      route: "KL 3",
      no: 2,
      code: "M0131",
      location: "Ampang Park",
      delivery: "Daily",
      images: [
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400",
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400"
      ],
      active: true
    },
    { 
      id: 3,
      route: "KL 3",
      no: 3,
      code: "M0132",
      location: "Titiwangsa",
      delivery: "Weekly",
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400"
      ],
      active: false
    },
    { 
      id: 4,
      route: "KL 3",
      no: 4,
      code: "M0133",
      location: "Wangsa Maju",
      delivery: "Daily",
      images: [
        "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?w=400",
        "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=400",
        "https://images.unsplash.com/photo-1473830394358-91588751b241?w=400"
      ],
      active: true
    },
    { 
      id: 5,
      route: "KL 3",
      no: 5,
      code: "M0134",
      location: "Sri Rampai",
      delivery: "Daily",
      images: [
        "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?w=400",
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=400"
      ],
      active: true
    },
  ]);

  const handleUpdate = (id: number, field: string, value: string | number) => {
    setRoutes(routes.map(route => 
      route.id === id ? { ...route, [field]: value } : route
    ));
  };

  const toggleActive = (id: number) => {
    setRoutes(routes.map(route => 
      route.id === id ? { ...route, active: !route.active } : route
    ));
  };

  return (
    <SidebarLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">KL 3 Route</h2>
          <p className="text-muted-foreground">
            Manage stations and schedules for the KL 3 route. Click on any cell to edit.
          </p>
        </div>

        <div className="rounded-lg border border-border overflow-hidden shadow-sm">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-card to-card/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">Route</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">No</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">Code</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">Location</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">Delivery</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">Image</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr
                  key={route.id}
                  className={`hover:bg-primary/5 transition-colors ${!route.active ? 'opacity-50' : ''}`}
                >
                  {/* Route */}
                  <td className="px-4 py-3 text-sm text-foreground">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {route.route}
                    </span>
                  </td>

                  {/* No */}
                  <td className="px-4 py-3 text-sm text-foreground font-semibold">
                    <EditableCell
                      value={route.no}
                      type="number"
                      dataKey="No"
                      onSave={(value) => handleUpdate(route.id, 'no', value)}
                    />
                  </td>

                  {/* Code */}
                  <td className="px-4 py-3 text-sm text-primary font-semibold">
                    <EditableCell
                      value={route.code}
                      dataKey="Code"
                      onSave={(value) => handleUpdate(route.id, 'code', value)}
                    />
                  </td>

                  {/* Location */}
                  <td className="px-4 py-3 text-sm text-foreground">
                    <EditableCell
                      value={route.location}
                      dataKey="Location"
                      onSave={(value) => handleUpdate(route.id, 'location', value)}
                    />
                  </td>

                  {/* Delivery */}
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        route.delivery === "Daily"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      }`}
                    >
                      {route.delivery}
                    </span>
                  </td>

                  {/* Image */}
                  <td className="px-4 py-3 text-sm">
                    {route.images.length > 0 ? (
                      <ImageLightbox images={route.images} rowId={route.id.toString()} />
                    ) : (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <ImageIcon className="h-4 w-4" />
                        <span className="text-xs">No images</span>
                      </div>
                    )}
                  </td>

                  {/* Action */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {/* Info Button */}
                      <button 
                        className="p-1.5 rounded hover:bg-sidebar-accent transition-colors"
                        title="Info"
                      >
                        <Info className="h-4 w-4 text-blue-400" />
                      </button>

                      {/* Drag Handle */}
                      <button 
                        className="p-1.5 rounded hover:bg-sidebar-accent transition-colors cursor-move"
                        title="Drag to reorder"
                      >
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                      </button>

                      {/* Power Toggle */}
                      <button 
                        onClick={() => toggleActive(route.id)}
                        className="p-1.5 rounded hover:bg-sidebar-accent transition-colors"
                        title={route.active ? "Deactivate" : "Activate"}
                      >
                        <Power className={`h-4 w-4 ${route.active ? 'text-green-400' : 'text-red-400'}`} />
                      </button>
                    </div>
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
