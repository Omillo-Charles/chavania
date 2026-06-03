"use client";

import React from 'react';
import { Smartphone, Laptop, Shirt, Home as HomeIcon, Watch, Speaker, Filter, Star, Tag, Truck } from 'lucide-react';

const CATEGORIES = [
  { name: 'Electronics', icon: Laptop },
  { name: 'Smartphones', icon: Smartphone },
  { name: 'Fashion & Apparel', icon: Shirt },
  { name: 'Home & Kitchen', icon: HomeIcon },
  { name: 'Watches & Jewelry', icon: Watch },
  { name: 'Audio & Speakers', icon: Speaker },
  { name: 'Computers & Accessories', icon: Laptop },
  { name: 'Gaming', icon: Smartphone },
  { name: 'Health & Beauty', icon: HomeIcon },
  { name: 'Sports & Outdoors', icon: Shirt },
];

const FILTERS = [
  { name: 'Best Ratings', icon: Star },
  { name: 'Discounted', icon: Tag },
  { name: 'Free Shipping', icon: Truck },
  { name: 'Under $50', icon: Filter },
  { name: '$50 - $100', icon: Filter },
  { name: 'Over $100', icon: Filter },
  { name: 'Local Sellers', icon: HomeIcon },
  { name: 'New Arrivals', icon: Star },
];

export default function LeftSidebar() {
  return (
    <aside className="w-full h-full flex flex-col border-r border-border bg-background">
      {/* Categories Section - Top Half */}
      <div className="flex-1 overflow-y-auto border-b border-border hide-scrollbar p-4">
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4 px-2">
          Categories
        </h2>
        <ul className="space-y-1">
          {CATEGORIES.map((category, idx) => (
            <li key={idx}>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted text-foreground hover:text-primary transition-colors text-sm font-medium text-left">
                <category.icon className="w-4 h-4 text-muted-foreground" />
                <span className="truncate">{category.name}</span>
              </button>
            </li>
          ))}
        </ul>
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
