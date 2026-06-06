"use client";

import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, MousePointer2 } from 'lucide-react';

const ANALYTICS_STATS = [
  { 
    label: 'Avg. Order Value', 
    value: 'KES 5,840', 
    trend: '+4.2%', 
    isPositive: true, 
    icon: DollarSign, 
    color: 'text-green-600 dark:text-green-400', 
    bg: 'bg-green-500/10' 
  },
  { 
    label: 'Conversion Rate', 
    value: '3.24%', 
    trend: '-0.8%', 
    isPositive: false, 
    icon: MousePointer2, 
    color: 'text-blue-600 dark:text-blue-400', 
    bg: 'bg-blue-500/10' 
  },
  { 
    label: 'Repeat Customer Rate', 
    value: '24.5%', 
    trend: '+12.1%', 
    isPositive: true, 
    icon: Users, 
    color: 'text-purple-600 dark:text-purple-400', 
    bg: 'bg-purple-500/10' 
  },
  { 
    label: 'Fulfillment Rate', 
    value: '98.2%', 
    trend: '+0.5%', 
    isPositive: true, 
    icon: ShoppingCart, 
    color: 'text-secondary', 
    bg: 'bg-secondary/10' 
  },
];

export default function AnalyticsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {ANALYTICS_STATS.map((stat) => (
        <div key={stat.label} className="bg-background border border-border p-5 rounded-2xl group hover:border-secondary/30 transition-all shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl ${stat.bg}`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full ${
              stat.isPositive ? 'text-green-500 bg-green-500/10' : 'text-red-500 bg-red-500/10'
            }`}>
              {stat.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {stat.trend}
            </div>
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
