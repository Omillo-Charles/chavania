"use client";

import React from 'react';
import { MoreHorizontal, MessageSquare, ShoppingBag, MapPin, Star } from 'lucide-react';

interface CustomerCardProps {
  customer: {
    id: string;
    name: string;
    email: string;
    location: string;
    totalOrders: number;
    totalSpent: string;
    lastOrder: string;
    isTopCustomer: boolean;
    initials: string;
  };
}

export default function CustomerCard({ customer }: CustomerCardProps) {
  return (
    <div className="bg-background border border-border rounded-2xl p-6 hover:shadow-md transition-all group relative">
      {customer.isTopCustomer && (
        <div className="absolute top-4 right-4 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 p-1.5 rounded-lg shadow-sm" title="Top Spender">
          <Star className="w-4 h-4 fill-yellow-500" />
        </div>
      )}

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl border border-secondary/20">
          {customer.initials}
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-foreground text-base truncate group-hover:text-secondary transition-colors cursor-pointer">
            {customer.name}
          </h4>
          <p className="text-xs text-muted-foreground truncate">{customer.email}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{customer.location}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/50">
          <div className="space-y-1">
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Orders</p>
            <div className="flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-secondary" />
              <span className="text-sm font-bold text-foreground">{customer.totalOrders}</span>
            </div>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Total Spent</p>
            <p className="text-sm font-bold text-foreground">{customer.totalSpent}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-[10px] text-muted-foreground">
            Last order: <span className="font-bold text-foreground">{customer.lastOrder}</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-muted rounded-xl transition-colors text-muted-foreground hover:text-secondary" title="Send Message">
              <MessageSquare className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded-xl transition-colors text-muted-foreground">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
