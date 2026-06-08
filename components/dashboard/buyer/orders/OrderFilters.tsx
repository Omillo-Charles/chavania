"use client";

import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import Searchbar from '../../../features/Searchbar';

export default function OrderFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-background border border-border p-4 rounded-2xl shadow-sm">
      <Searchbar 
        placeholder="Search by Order ID or product..."
        className="w-full md:w-80"
      />

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
