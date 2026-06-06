"use client";

import React from 'react';
import { ShoppingBag, Users, BarChart3, TrendingUp, DollarSign } from 'lucide-react';

const STATS = [
  { label: 'Total Revenue', value: 'KES 482,000', icon: DollarSign, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-500/10', trend: '+12.5%' },
  { label: 'Total Orders', value: '156', icon: ShoppingBag, color: 'text-secondary', bg: 'bg-secondary/10', trend: '+8.2%' },
  { label: 'Shop Views', value: '12.4k', icon: BarChart3, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10', trend: '+15.3%' },
  { label: 'Active Customers', value: '842', icon: Users, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-500/10', trend: '+5.7%' },
];

export default function MerchantStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {STATS.map((stat) => (
        <div key={stat.label} className="bg-background border border-border p-5 rounded-2xl group hover:border-secondary/30 transition-all hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className={`p-3 rounded-xl ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
              <TrendingUp className="w-3 h-3" />
              {stat.trend}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold text-foreground mt-0.5">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
