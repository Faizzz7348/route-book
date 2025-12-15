"use client"

import { SidebarLayout } from "@/components/app-sidebar";
import { Calendar, XCircle, Clock, Bell, TrendingUp, List, Trash2, ChevronDown, Package, AlertTriangle, Info } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface RouteEvent {
  id: number;
  name: string;
  route: string;
  date: string;
  time: string;
  status: "completed" | "cancelled";
  location: string;
  notes?: string;
  deletedAt?: string;
}

export default function ExpiredPage() {
  const [activeTab, setActiveTab] = useState<"active" | "trash">("active");
  const [countdowns, setCountdowns] = useState<Record<number, string>>({});
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const [showNotification, setShowNotification] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const expiredEvents: RouteEvent[] = [
    { 
      id: 1, 
      name: "Morning Route KL3", 
      route: "KL3",
      date: "2025-12-10", 
      time: "08:00 - 12:00", 
      status: "completed",
      location: "Kuala Lumpur Zone 3",
      notes: "All deliveries completed successfully"
    },
    { 
      id: 2, 
      name: "Afternoon Route KL4", 
      route: "KL4",
      date: "2025-12-12", 
      time: "14:00 - 18:00", 
      status: "completed",
      location: "Kuala Lumpur Zone 4",
      notes: "Completed with minor delays"
    },
    { 
      id: 3, 
      name: "Morning Route KL3", 
      route: "KL3",
      date: "2025-12-08", 
      time: "08:00 - 12:00", 
      status: "cancelled",
      location: "Kuala Lumpur Zone 3",
      notes: "Weather conditions - heavy rain"
    },
    { 
      id: 4, 
      name: "Morning Route KL4", 
      route: "KL4",
      date: "2025-12-09", 
      time: "08:00 - 12:00", 
      status: "completed",
      location: "Kuala Lumpur Zone 4"
    },
  ];

  const deletedEvents: RouteEvent[] = [
    {
      id: 5,
      name: "Evening Route KL3",
      route: "KL3",
      date: "2025-11-30",
      time: "18:00 - 22:00",
      status: "cancelled",
      location: "Kuala Lumpur Zone 3",
      notes: "Moved to trash",
      deletedAt: "2025-12-15"
    }
  ];

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

  const getDaysUntilClear = (deletedDate: string) => {
    const deleted = new Date(deletedDate);
    const clearDate = new Date(deleted.getTime() + 7 * 24 * 60 * 60 * 1000);
    const now = new Date();
    const diffMs = clearDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const getCountdownStatus = (dateStr: string) => {
    const eventDate = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - eventDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 7) return 'danger';
    if (diffDays <= 14) return 'warning';
    return 'safe';
  };

  useEffect(() => {
    const updateCountdowns = () => {
      const newCountdowns: Record<number, string> = {};
      [...expiredEvents, ...deletedEvents].forEach(event => {
        newCountdowns[event.id] = calculateTimeAgo(event.date);
      });
      setCountdowns(newCountdowns);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000);

    return () => clearInterval(interval);
  }, []);

  const recentExpiredCount = expiredEvents.filter(e => {
    const days = Math.floor((new Date().getTime() - new Date(e.date).getTime()) / (1000 * 60 * 60 * 24));
    return days <= 3;
  }).length;

  const completedCount = expiredEvents.filter(e => e.status === "completed").length;
  const cancelledCount = expiredEvents.filter(e => e.status === "cancelled").length;

  return (
    <SidebarLayout>
      <div className="max-w-4xl mx-auto">
        {/* Stats Modal */}
        {showStats && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-card/95 backdrop-blur-md rounded-lg p-6 m-4 w-full max-w-md shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold">Route Statistics</h3>
                </div>
                <button 
                  onClick={() => setShowStats(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-background/50 backdrop-blur rounded-lg p-3 text-center">
                    <Package className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                    <div className="text-lg font-semibold">{expiredEvents.length}</div>
                    <div className="text-xs text-muted-foreground">Total Routes</div>
                  </div>
                  <div className="bg-background/50 backdrop-blur rounded-lg p-3 text-center">
                    <Trash2 className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                    <div className="text-lg font-semibold">{deletedEvents.length}</div>
                    <div className="text-xs text-muted-foreground">In Trash</div>
                  </div>
                  <div className="bg-background/50 backdrop-blur rounded-lg p-3 text-center">
                    <Calendar className="w-6 h-6 text-green-400 mx-auto mb-1" />
                    <div className="text-lg font-semibold">{completedCount}</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div className="bg-background/50 backdrop-blur rounded-lg p-3 text-center">
                    <AlertTriangle className="w-6 h-6 text-red-400 mx-auto mb-1" />
                    <div className="text-lg font-semibold">{cancelledCount}</div>
                    <div className="text-xs text-muted-foreground">Cancelled</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>Route Breakdown</span>
                  </h4>
                  <div className="space-y-2">
                    {['KL3', 'KL4'].map(route => {
                      const count = expiredEvents.filter(e => e.route === route).length;
                      return (
                        <div key={route} className="flex items-center justify-between bg-background/30 backdrop-blur rounded p-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs px-1.5 py-0.5 bg-primary/20 rounded text-primary font-medium">{route}</span>
                          </div>
                          <span className="text-sm font-medium">{count} routes</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notification Modal */}
        {showNotification && (
          <div className="fixed top-16 right-4 z-50 animate-slide-up">
            <div className="bg-card/95 backdrop-blur-md rounded-lg p-4 w-80 shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Bell className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-semibold">Recent Activity</h3>
                </div>
                <button 
                  onClick={() => setShowNotification(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <XCircle className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {expiredEvents.slice(0, 3).map(event => (
                  <div key={event.id} className="bg-background/30 backdrop-blur rounded p-2">
                    <div className="text-xs font-medium">{event.name}</div>
                    <div className="text-[10px] text-muted-foreground flex items-center space-x-2 mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{countdowns[event.id]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <header className="bg-card/95 backdrop-blur-md p-4 sticky top-0 z-40 rounded-lg mb-4 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Route Monitor</h1>
                <p className="text-xs text-muted-foreground">Track expired routes</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="p-2 text-muted-foreground hover:text-foreground transition-colors relative"
                onClick={() => setShowNotification(!showNotification)}
              >
                <Bell className="w-4 h-4" />
                {recentExpiredCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {recentExpiredCount}
                  </span>
                )}
              </button>
              <button
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setShowStats(!showStats)}
              >
                <TrendingUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="mb-4">
          <div className="bg-card/50 backdrop-blur-md rounded-lg p-1 flex">
            <button
              className={`flex-1 py-2 px-3 font-medium rounded transition-all flex items-center justify-center space-x-1 text-xs ${
                activeTab === "active"
                  ? "text-blue-400 bg-background/50"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("active")}
            >
              <List className="w-3 h-3" />
              <span>Active Routes</span>
            </button>
            <button
              className={`flex-1 py-2 px-3 font-medium rounded transition-all flex items-center justify-center space-x-1 text-xs ${
                activeTab === "trash"
                  ? "text-red-400 bg-background/50"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("trash")}
            >
              <Trash2 className="w-3 h-3" />
              <span>Trash</span>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pb-20">
          {activeTab === "active" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xs font-medium text-muted-foreground">
                  Expired Routes
                </h2>
                <span className="text-xs text-muted-foreground">
                  {expiredEvents.length} routes
                </span>
              </div>

              {expiredEvents.length === 0 ? (
                <div className="text-center py-8">
                  <Package className="w-8 h-8 text-muted-foreground mb-2 mx-auto" />
                  <p className="text-sm text-muted-foreground">No expired routes</p>
                </div>
              ) : (
                expiredEvents.map((event) => {
                  const status = getCountdownStatus(event.date);
                  const isOpen = openItems[event.id] || false;
                  
                  return (
                    <Collapsible
                      key={event.id}
                      open={isOpen}
                      onOpenChange={(open) => setOpenItems({...openItems, [event.id]: open})}
                    >
                      <div className="bg-card/50 backdrop-blur-md rounded-lg p-3 shadow-sm animate-fade-in">
                        <CollapsibleTrigger asChild>
                          <button className="w-full flex items-center justify-between hover:opacity-80 transition-opacity">
                            <h3 className="font-medium text-[9px]">{event.name}</h3>
                            <div className="flex items-center space-x-2">
                              <span 
                                className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${
                                  status === 'danger' ? 'bg-red-500/20 text-red-400' :
                                  status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                                  'bg-blue-500/20 text-blue-400'
                                }`}
                              >
                                {countdowns[event.id]}
                              </span>
                              <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                            </div>
                          </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2 pt-2 border-t border-border/20">
                          <div className="space-y-2">
                            <div className="text-[10px] text-muted-foreground space-y-1">
                              <div className="flex items-center justify-between">
                                <span>Route:</span>
                                <span className="font-medium text-foreground px-2 py-0.5 bg-primary/10 rounded">{event.route}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span>Date:</span>
                                <span className="font-medium text-foreground">{event.date}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span>Time:</span>
                                <span className="font-medium text-foreground">{event.time}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span>Location:</span>
                                <span className="font-medium text-foreground">{event.location}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span>Status:</span>
                                <span className={`font-medium px-2 py-0.5 rounded ${
                                  event.status === 'completed' 
                                    ? 'bg-green-500/20 text-green-400' 
                                    : 'bg-red-500/20 text-red-400'
                                }`}>
                                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                                </span>
                              </div>
                              {event.notes && (
                                <div className="pt-2 mt-2 border-t border-border/20">
                                  <div className="flex items-start space-x-2">
                                    <Info className="w-3 h-3 text-muted-foreground mt-0.5" />
                                    <span className="flex-1">{event.notes}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="flex space-x-2 pt-2">
                              <button
                                className="flex-1 p-2 hover:bg-muted/50 rounded text-xs transition-colors duration-200 flex items-center justify-center space-x-1"
                              >
                                <Trash2 className="w-3 h-3 text-muted-foreground" />
                                <span className="text-muted-foreground">Move to Trash</span>
                              </button>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  );
                })
              )}
            </div>
          )}

          {activeTab === "trash" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xs font-medium text-muted-foreground">
                  Deleted Routes
                </h2>
                {deletedEvents.length > 0 && (
                  <button className="text-xs text-red-400 hover:text-red-300 transition-colors">
                    Clear All
                  </button>
                )}
              </div>

              {deletedEvents.length === 0 ? (
                <div className="text-center py-8">
                  <Trash2 className="w-8 h-8 text-muted-foreground mb-2 mx-auto" />
                  <p className="text-sm text-muted-foreground">Trash is empty</p>
                </div>
              ) : (
                deletedEvents.map((event) => {
                  const isOpen = openItems[event.id] || false;
                  const daysUntilClear = event.deletedAt ? getDaysUntilClear(event.deletedAt) : 0;
                  
                  return (
                    <Collapsible
                      key={event.id}
                      open={isOpen}
                      onOpenChange={(open) => setOpenItems({...openItems, [event.id]: open})}
                    >
                      <div className="bg-card/50 backdrop-blur-md rounded-lg p-3 opacity-70 animate-fade-in">
                        <CollapsibleTrigger asChild>
                          <button className="w-full flex items-center justify-between hover:opacity-80 transition-opacity">
                            <h3 className="font-medium line-through text-[9px]">{event.name}</h3>
                            <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                          </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2 pt-2 border-t border-border/20">
                          <div className="space-y-2">
                            <div className="text-[10px] text-muted-foreground">
                              <p className="mb-2">Auto-delete in {daysUntilClear} days</p>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                className="flex-1 p-2 hover:bg-blue-500/20 rounded text-xs transition-colors duration-200 flex items-center justify-center space-x-1"
                              >
                                <Calendar className="w-3 h-3 text-blue-400" />
                                <span className="text-blue-400">Restore</span>
                              </button>
                              <button
                                className="flex-1 p-2 hover:bg-red-500/20 rounded text-xs transition-colors duration-200 flex items-center justify-center space-x-1"
                              >
                                <XCircle className="w-3 h-3 text-red-400" />
                                <span className="text-red-400">Delete</span>
                              </button>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  );
                })
              )}
            </div>
          )}
        </main>
      </div>
      <FloatingDock />
    </SidebarLayout>
  );
}
