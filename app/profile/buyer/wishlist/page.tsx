"use client";

import React from 'react';
import WishlistGrid from '@/components/dashboard/buyer/wishlist/WishlistGrid';
import { Bookmark, ArrowLeft, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function BuyerWishlistPage() {
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
              My Wishlist <Bookmark className="w-7 h-7 text-primary" />
            </h1>
            <p className="text-muted-foreground mt-1 text-lg">Save items you're interested in for later.</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-foreground text-background rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-foreground/10">
            <ShoppingCart className="w-4 h-4" /> Add All to Cart
          </button>
        </div>
      </div>

      {/* Wishlist Grid */}
      <WishlistGrid />

      {/* Empty State Illustration / Info Box */}
      <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 mt-12 overflow-hidden relative">
        <div className="space-y-4 relative z-10">
          <h3 className="text-2xl font-bold text-foreground">Planning a big purchase?</h3>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Your wishlist items are saved across all your devices. We'll notify you if any of these items go on sale!
          </p>
        </div>
        <div className="flex items-center gap-4 pt-2 md:pt-0 shrink-0 relative z-10">
          <button className="px-5 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-bold hover:bg-primary/90 transition-all whitespace-nowrap">
            Manage Alerts
          </button>
          <button className="px-5 py-2 border border-border text-foreground rounded-xl text-sm font-bold hover:bg-muted transition-all whitespace-nowrap">
            Share Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
