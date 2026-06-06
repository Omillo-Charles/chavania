"use client";

import React from 'react';
import ProductFilters from '@/components/dashboard/merchant/products/ProductFilters';
import ProductsGrid from '@/components/dashboard/merchant/products/ProductsGrid';
import { Package, ArrowLeft, Plus } from 'lucide-react';
import Link from 'next/link';

export default function MerchantProductsPage() {
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
              Store Products <Package className="w-7 h-7 text-secondary" />
            </h1>
            <p className="text-muted-foreground mt-1 text-lg">Manage your inventory, pricing, and product visibility.</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="hidden sm:block px-4 py-2 bg-muted text-muted-foreground rounded-xl text-sm font-bold">
               Total: 124 Items
             </div>
             <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-secondary text-secondary-foreground rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-secondary/10">
               <Plus className="w-4 h-4" /> Add New Product
             </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <ProductFilters />

      {/* Products Grid */}
      <ProductsGrid />
      
      {/* Bottom Info */}
      <div className="bg-secondary/5 border border-secondary/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 mt-12 overflow-hidden relative">
        <div className="space-y-4 relative z-10">
          <h3 className="text-2xl font-bold text-foreground">Optimizing your listings?</h3>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Well-described products with clear images sell up to 40% faster. Check our merchant guide for tips on how to improve your sales.
          </p>
        </div>
        <div className="flex items-center gap-4 pt-2 md:pt-0 shrink-0 relative z-10">
          <button className="px-5 py-2 bg-secondary text-secondary-foreground rounded-xl text-sm font-bold hover:opacity-90 transition-all whitespace-nowrap">
            Read Guide
          </button>
          <button className="px-5 py-2 border border-border text-foreground rounded-xl text-sm font-bold hover:bg-muted transition-all whitespace-nowrap">
            Bulk Import
          </button>
        </div>
      </div>
    </div>
  );
}
