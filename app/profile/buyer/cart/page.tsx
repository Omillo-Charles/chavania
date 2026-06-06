"use client";

import React from 'react';
import CartList from '@/components/dashboard/buyer/cart/CartList';
import CartSummary from '@/components/dashboard/buyer/cart/CartSummary';
import { ShoppingCart, ArrowLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function BuyerCartPage() {
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
              My Shopping Cart <ShoppingCart className="w-7 h-7 text-primary" />
            </h1>
            <p className="text-muted-foreground mt-1 text-lg">Review and manage items before checkout.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-500/5 rounded-xl transition-all">
            <Trash2 className="w-4 h-4" /> Clear Cart
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">
        {/* Cart Items List */}
        <div className="xl:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-2 px-2">
            <span className="text-sm font-bold text-foreground">3 Items in your cart</span>
            <span className="text-xs text-muted-foreground">Prices include VAT where applicable</span>
          </div>
          <CartList />
        </div>

        {/* Summary Sidebar */}
        <div className="xl:col-span-1">
          <CartSummary />
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-foreground">Fast Delivery</h5>
            <p className="text-[10px] text-muted-foreground">Within 24-48 hours in Nairobi</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border">
          <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-foreground">Easy Returns</h5>
            <p className="text-[10px] text-muted-foreground">7-day free return policy</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
            <Trash2 className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-foreground">Secure Payments</h5>
            <p className="text-[10px] text-muted-foreground">M-Pesa, Card, Bank Transfer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
