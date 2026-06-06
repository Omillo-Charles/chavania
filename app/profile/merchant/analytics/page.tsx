"use client";

import React from 'react';
import AnalyticsStats from '@/components/dashboard/merchant/analytics/AnalyticsStats';
import RevenueChart from '@/components/dashboard/merchant/analytics/RevenueChart';
import TopProducts from '@/components/dashboard/merchant/analytics/TopProducts';
import { BarChart3, ArrowLeft, Download, Filter } from 'lucide-react';
import Link from 'next/link';

export default function MerchantAnalyticsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex flex-col gap-4">
        <Link 
          href="/profile/merchant" 
          className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-secondary transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Overview
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-ubuntu tracking-tight text-foreground flex items-center gap-3">
              Store Analytics <BarChart3 className="w-7 h-7 text-secondary" />
            </h1>
            <p className="text-muted-foreground mt-1 text-lg">Detailed insights into your store performance and sales trends.</p>
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-background border border-border text-foreground rounded-xl text-sm font-bold hover:bg-muted transition-all">
               <Filter className="w-4 h-4" /> Filter Range
             </button>
             <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-secondary text-secondary-foreground rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-secondary/10">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </div>
      </div>

      {/* Analytics Stats */}
      <AnalyticsStats />

      {/* Main Charts & Tables Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Revenue Chart - Spans 2 columns */}
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        {/* Top Products - Spans 1 column */}
        <div className="xl:col-span-1">
          <TopProducts />
        </div>
      </div>

      {/* Bottom Insights Box */}
      <div className="bg-secondary/5 border border-secondary/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 mt-12 overflow-hidden relative">
        <div className="space-y-4 relative z-10">
          <h3 className="text-2xl font-bold text-foreground">AI Performance Insights</h3>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Your revenue is up <span className="text-green-500 font-bold">12.5%</span> compared to last month. Most of your growth is driven by the <span className="font-bold text-foreground">Electronics</span> category. We recommend increasing your marketing budget for these products to maintain momentum.
          </p>
        </div>
        <div className="flex items-center gap-4 pt-2 md:pt-0 shrink-0 relative z-10">
          <button className="px-5 py-2 bg-secondary text-secondary-foreground rounded-xl text-sm font-bold hover:opacity-90 transition-all whitespace-nowrap">
            Deep Dive
          </button>
          <button className="px-5 py-2 border border-border text-foreground rounded-xl text-sm font-bold hover:bg-muted transition-all whitespace-nowrap">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
