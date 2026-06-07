"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Lock, ShoppingCart } from 'lucide-react';
import ShippingDetails from '@/components/checkout/ShippingDetails';
import PaymentMethodSelector from '@/components/checkout/PaymentMethodSelector';
import CheckoutSummary from '@/components/checkout/CheckoutSummary';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      {/* Checkout Header */}
      <div className="bg-background border-b border-border sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link 
              href="/profile/buyer/cart" 
              className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back to Cart</span>
            </Link>
            <div className="h-6 w-px bg-border hidden sm:block"></div>
            <h1 className="text-xl font-bold font-ubuntu tracking-tight text-foreground flex items-center gap-2">
              Secure Checkout <Lock className="w-4 h-4 text-green-600" />
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest hidden md:block">Transaction Protected</span>
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <ShoppingCart className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">
          {/* Main Checkout Forms */}
          <div className="xl:col-span-2 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section>
              <ShippingDetails />
            </section>
            
            <section>
              <PaymentMethodSelector />
            </section>

            {/* Extra Info / Policies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-2xl border border-border bg-background">
                <h4 className="text-sm font-bold text-foreground mb-2">Buyer Protection</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Get a full refund if your item doesn't arrive, is damaged, or is not as described. Your satisfaction is our priority.
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-background">
                <h4 className="text-sm font-bold text-foreground mb-2">Delivery Estimates</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Most orders in Nairobi are delivered within 24 hours. Outside Nairobi typically takes 2-3 business days.
                </p>
              </div>
            </div>
          </div>

          {/* Checkout Summary Sidebar */}
          <div className="xl:col-span-1 animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
            <CheckoutSummary />
          </div>
        </div>
      </main>
    </div>
  );
}
