"use client";

import React from 'react';
import { 
  Smartphone, Laptop, Shirt, Home as HomeIcon, Gamepad2, Car, Book, Puzzle, Baby, PawPrint, 
  ShoppingBasket, Palette, Music, Wrench, Leaf, Film, FlaskConical, Plane, Dumbbell, 
  Tv, Scissors, Sparkles, Disc, Plug, Gift, Stethoscope, Paperclip, Crown, Filter, Star, Tag, Truck
} from 'lucide-react';

const CATEGORIES = [
  { name: 'Appliances', icon: Tv, color: '#64748b' },
  { name: 'Apps & Games', icon: Gamepad2, color: '#8b5cf6' },
  { name: 'Arts, Crafts & Sewing', icon: Scissors, color: '#ec4899' },
  { name: 'Automotive Parts', icon: Car, color: '#475569' },
  { name: 'Baby', icon: Baby, color: '#fbcfe8' },
  { name: 'Beauty & Personal Care', icon: Sparkles, color: '#f472b6' },
  { name: 'Books', icon: Book, color: '#d97706' },
  { name: 'CDs & Vinyl', icon: Disc, color: '#71717a' },
  { name: 'Cell Phones', icon: Smartphone, color: '#3b82f6' },
  { name: 'Clothing, Shoes & Jewelry', icon: Shirt, color: '#db2777' },
  { name: 'Collectibles & Fine Art', icon: Palette, color: '#fb923c' },
  { name: 'Computers', icon: Laptop, color: '#2563eb' },
  { name: 'Electronics', icon: Plug, color: '#0284c7' },
  { name: 'Garden & Outdoor', icon: Leaf, color: '#22c55e' },
  { name: 'Grocery & Food', icon: ShoppingBasket, color: '#16a34a' },
  { name: 'Handmade', icon: Gift, color: '#eab308' },
  { name: 'Health & Household', icon: Stethoscope, color: '#059669' },
  { name: 'Home & Kitchen', icon: HomeIcon, color: '#f97316' },
  { name: 'Industrial & Scientific', icon: FlaskConical, color: '#14b8a6' },
  { name: 'Luggage & Travel', icon: Plane, color: '#0ea5e9' },
  { name: 'Movies & TV', icon: Film, color: '#4b5563' },
  { name: 'Musical Instruments', icon: Music, color: '#ef4444' },
  { name: 'Office Products', icon: Paperclip, color: '#94a3b8' },
  { name: 'Pet Supplies', icon: PawPrint, color: '#b45309' },
  { name: 'Premium Beauty', icon: Crown, color: '#e11d48' },
  { name: 'Sports & Outdoors', icon: Dumbbell, color: '#10b981' },
  { name: 'Tools & Home Improvement', icon: Wrench, color: '#334155' },
  { name: 'Toys & Games', icon: Puzzle, color: '#6366f1' },
  { name: 'Video Games', icon: Gamepad2, color: '#8b5cf6' },
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
