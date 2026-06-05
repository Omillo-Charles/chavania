"use client";

import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

export default function OrderFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-background border border-border p-4 rounded-2xl shadow-sm">
      <div className="relative w-full md:w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search by Order ID or product..." 
          className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-transparent focus:border-primary/30 focus:bg-background rounded-xl text-sm transition-all outline-none"
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto hide-scrollbar">
        <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
          <Filter className="w-4 h-4" />
          Status: All
          <ChevronDown className="w-3 h-3" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
          Time: Last 3 months
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
