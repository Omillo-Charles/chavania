"use client";

import React from 'react';
import MerchantStats from '@/components/dashboard/merchant/MerchantStats';
import RecentSales from '@/components/dashboard/merchant/RecentSales';
import { Package, Plus, TrendingUp, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

export default function MerchantDashboardPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold font-ubuntu tracking-tight text-foreground flex items-center gap-3">
            Merchant Dashboard
          </h1>
          <p className="text-muted-foreground mt-1 text-lg">Your business overview for the last 30 days.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-background border border-border px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-muted transition-all">
            <TrendingUp className="w-4 h-4 text-secondary" /> Reports
          </button>
          <button className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-secondary/10">
            <Plus className="w-4 h-4" /> Add Product
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <MerchantStats />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Recent Sales - Spans 2 columns */}
        <div className="xl:col-span-2 space-y-4">
          <RecentSales />
        </div>

        {/* Right Column - Store Performance & Quick Actions */}
        <div className="space-y-8">
          {/* Inventory Alert */}
          <div className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-6 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-3">
                <Package className="w-5 h-5" />
                <h3 className="font-bold">Inventory Alert</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                <span className="font-bold text-foreground">4 products</span> are running low on stock. Restock soon to avoid losing sales.
              </p>
              <button className="w-full bg-orange-500 text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                Review Inventory
              </button>
            </div>
          </div>

          {/* Quick Stats - Payouts */}
          <div className="bg-background border border-border rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Upcoming Payout</h3>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-2xl font-bold text-foreground">KES 84,200</p>
                <p className="text-[10px] text-green-500 font-bold mt-1">Available for withdrawal</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                <LayoutDashboard className="w-6 h-6" />
              </div>
            </div>
            <button className="w-full py-2.5 rounded-xl border border-border text-xs font-bold hover:bg-muted transition-colors">
              Request Payout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
