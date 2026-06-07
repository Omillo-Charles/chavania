"use client";

import React from 'react';
import { CATEGORIES, FILTERS } from '@/utils/categories';

export default function LeftSidebar() {
  return (
    <aside className="w-full h-full flex flex-col border-r border-border bg-background">
      {/* Categories Section - Top Half */}
      <div className="relative flex-1 flex flex-col border-b border-border overflow-hidden">
        <div className="flex-1 overflow-y-auto hide-scrollbar p-4">
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4 px-2">
            Categories
          </h2>
          <ul className="space-y-1">
            {CATEGORIES.map((category, idx) => (
              <li key={idx}>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted text-foreground hover:text-primary transition-colors text-sm font-medium text-left">
                  <category.icon className="w-5 h-5 flex-shrink-0" style={{ color: category.color }} fill={category.color} strokeWidth={1.5} />
                  <span className="truncate">{category.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Scroll Shadow Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/40 to-transparent dark:from-white/20 dark:to-transparent pointer-events-none" />
      </div>

      {/* Filters Section - Bottom Half */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-4">
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4 px-2">
          Filters
        </h2>
        <ul className="space-y-1">
          {FILTERS.map((filter, idx) => (
            <li key={idx}>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted text-foreground hover:text-primary transition-colors text-sm font-medium text-left">
                <filter.icon className="w-4 h-4 text-muted-foreground" />
                <span className="truncate">{filter.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
