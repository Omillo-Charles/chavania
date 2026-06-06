"use client";

import React from 'react';
import { Search, Filter, ChevronDown, Download } from 'lucide-react';

export default function CustomerFilters() {
    return (
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-background border border-border p-4 rounded-2xl shadow-sm">
            <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search customers by name, email or location..."
                    className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-transparent focus:border-secondary/30 focus:bg-background rounded-xl text-sm transition-all outline-none"
                />
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto hide-scrollbar">
                <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
                    <Filter className="w-4 h-4" />
                    Segment: All
                    <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
                    Sort: Top Spenders
                    <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-background border border-border text-foreground rounded-xl text-sm font-bold hover:bg-muted transition-all whitespace-nowrap">
                    <Download className="w-4 h-4" /> Export
                </button>
            </div>
        </div>
    );
}
