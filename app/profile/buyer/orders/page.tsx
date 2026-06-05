"use client";

import React from 'react';
import OrderFilters from '@/components/dashboard/buyer/orders/OrderFilters';
import OrdersList from '@/components/dashboard/buyer/orders/OrdersList';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BuyerOrdersPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex flex-col gap-4">
        <Link 
          href="/profile/buyer" 
          className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-ubuntu tracking-tight text-foreground flex items-center gap-3">
              My Orders <ShoppingBag className="w-7 h-7 text-primary" />
            </h1>
            <p className="text-muted-foreground mt-1 text-lg">Track, manage and view your purchase history.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-bold">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            1 Active Order
          </div>
        </div>
      </div>

      {/* Filters */}
      <OrderFilters />

      {/* Orders List */}
      <OrdersList />
    </div>
  );
}
