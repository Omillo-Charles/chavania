"use client";

import React from 'react';
import { ShoppingCart, Package, Bookmark, CreditCard } from 'lucide-react';

const STATS = [
  { label: 'Total Orders', value: '12', icon: ShoppingCart, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10' },
  { label: 'Pending Delivery', value: '2', icon: Package, color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-500/10' },
  { label: 'Wishlist Items', value: '24', icon: Bookmark, color: 'text-red-600 dark:text-red-400', bg: 'bg-red-500/10' },
  { label: 'Total Spent', value: 'KES 124,000', icon: CreditCard, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-500/10' },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {STATS.map((stat) => (
        <div key={stat.label} className="bg-background border border-border p-5 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className={`p-3 rounded-xl ${stat.bg}`}>
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold text-foreground mt-0.5">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
