"use client";

import React from 'react';
import { CheckCheck, Trash2 } from 'lucide-react';

export default function NotificationFilters() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-background border border-border p-4 rounded-2xl shadow-sm">
      <div className="flex items-center gap-1 p-1 bg-muted rounded-xl">
        <button className="px-4 py-1.5 text-xs font-bold bg-background text-primary rounded-lg shadow-sm">
          All
        </button>
        <button className="px-4 py-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors">
          Orders
        </button>
        <button className="px-4 py-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors">
          Promos
        </button>
        <button className="px-4 py-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors">
          Unread
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
          <CheckCheck className="w-4 h-4" />
          Mark all as read
        </button>
        <div className="w-px h-4 bg-border"></div>
        <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-500/5 rounded-xl transition-all">
          <Trash2 className="w-4 h-4" />
          Clear all
        </button>
      </div>
    </div>
  );
}
