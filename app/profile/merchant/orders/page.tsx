"use client";

import React from 'react';
import MerchantOrderFilters from '@/components/dashboard/merchant/orders/MerchantOrderFilters';
import MerchantOrdersList from '@/components/dashboard/merchant/orders/MerchantOrdersList';
import { ShoppingCart, ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';

export default function MerchantOrdersPage() {
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
              Store Orders <ShoppingCart className="w-7 h-7 text-secondary" />
            </h1>
            <p className="text-muted-foreground mt-1 text-lg">Manage sales, fulfillment, and customer delivery tracking.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-background border border-border text-foreground rounded-xl text-sm font-bold hover:bg-muted transition-all shadow-sm">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      {/* Filters */}
      <MerchantOrderFilters />

      {/* Merchant Orders List */}
      <MerchantOrdersList />
    </div>
  );
}
