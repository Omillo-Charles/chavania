"use client";

import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

interface TrackingSearchProps {
  onSearch: (orderId: string) => void;
  isLoading: boolean;
}

export default function TrackingSearch({ onSearch, isLoading }: TrackingSearchProps) {
  const [orderId, setOrderId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      onSearch(orderId.trim());
    }
  };

  return (
    <div className="bg-background border border-border rounded-[32px] p-8 shadow-xl shadow-primary/5">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold font-ubuntu text-foreground">Track Your Order</h2>
          <p className="text-sm text-muted-foreground">
            Enter your Order ID or Tracking Number to see the real-time status of your delivery.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative group">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="e.g. #ORD-123456"
              className="w-full pl-12 pr-32 py-4 bg-muted/50 border border-transparent focus:border-primary/30 focus:bg-background rounded-2xl text-base transition-all outline-none shadow-inner"
              required
            />
            <button
              type="submit"
              disabled={isLoading || !orderId.trim()}
              className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <span>Track Now</span>
              )}
            </button>
          </div>
        </form>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <div className="flex items-center gap-2 text-[11px] font-bold text-muted-foreground uppercase tracking-widest bg-muted/30 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Real-time Updates
          </div>
          <div className="flex items-center gap-2 text-[11px] font-bold text-muted-foreground uppercase tracking-widest bg-muted/30 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            SMS Notifications
          </div>
        </div>
      </div>
    </div>
  );
}
