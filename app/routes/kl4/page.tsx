"use client"

import { SidebarLayout } from "@/components/app-sidebar";
import { EditableCell } from "@/components/ui/editable-cell";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { Info, GripVertical, Power, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export default function KL4Page() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [routes, setRoutes] = useState([
    { 
      id: 1,
      route: "KL 4",
      no: 1,
      code: "M0140",
      location: "KL Sentral",
      delivery: "Daily",
      images: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
      ],
      active: true
    },
    { 
      id: 2,
      route: "KL 4",
      no: 2,
      code: "M0141",
      location: "Bangsar",
      delivery: "Daily",
      images: [
        "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=400",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400",
        "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=400"
      ],
      active: true
    },
    { 
      id: 3,
      route: "KL 4",
      no: 3,
      code: "M0142",
      location: "Abdullah Hukum",
      delivery: "Weekly",
      images: [
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400"
      ],
      active: false
    },
    { 
      id: 4,
      route: "KL 4",
      no: 4,
      code: "M0143",
      location: "Kerinchi",
      delivery: "Daily",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=400"
      ],
      active: true
    },
    { 
      id: 5,
      route: "KL 4",
      no: 5,
      code: "M0144",
      location: "Universiti",
      delivery: "Daily",
      images: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400"
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

  const openLightbox = (images: string[], index: number = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
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
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Route</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">No</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Code</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Location</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Delivery</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Image</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Action</th>
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
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
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
                      <div className="flex gap-1">
                        {route.images.slice(0, 3).map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => openLightbox(route.images, idx)}
                            className="relative w-10 h-10 rounded border-2 border-border hover:border-primary transition-colors overflow-hidden group"
                          >
                            <img
                              src={img}
                              alt={`Preview ${idx + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                            />
                          </button>
                        ))}
                        {route.images.length > 3 && (
                          <button
                            onClick={() => openLightbox(route.images)}
                            className="w-10 h-10 rounded border-2 border-border hover:border-primary transition-colors flex items-center justify-center bg-muted text-xs font-medium"
                          >
                            +{route.images.length - 3}
                          </button>
                        )}
                      </div>
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
      <ImageLightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
      <FloatingDock />
    </SidebarLayout>
  );
}
