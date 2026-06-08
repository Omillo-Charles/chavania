"use client";

import React from 'react';
import { Filter, ChevronDown, Calendar } from 'lucide-react';
import Searchbar from '../../../features/Searchbar';

export default function MerchantOrderFilters() {
    return (
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-background border border-border p-4 rounded-2xl shadow-sm">
            <Searchbar 
                placeholder="Search by Order ID, customer or product..."
                className="w-full lg:w-96"
                inputClassName="bg-muted/50 border border-transparent focus:border-secondary/30 focus:bg-background rounded-xl"
            />

            <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto hide-scrollbar">
                <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
                    <Filter className="w-4 h-4" />
                    Status: All
                    <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    Date: Last 30 days
                    <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
                    Sort: Newest
                    <ChevronDown className="w-3 h-3" />
                </button>
            </div>
        </div>
    );
}
