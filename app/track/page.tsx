"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Package, Truck, MapPin, Calendar, ExternalLink, HelpCircle, Store, CheckCircle2, Clock } from 'lucide-react';
import TrackingSearch from '@/components/track/TrackingSearch';
import OrderDetails from '@/components/track/OrderDetails';

export default function TrackPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleSearch = (id: string) => {
    setIsLoading(true);
    setOrderId(id);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setHasSearched(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      {/* Header */}
      <div className="bg-background border-b border-border sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back to Shop</span>
            </Link>
            <div className="h-6 w-px bg-border hidden sm:block"></div>
            <h1 className="text-xl font-bold font-ubuntu tracking-tight text-foreground flex items-center gap-2">
              Order Tracking <Truck className="w-5 h-5 text-primary" />
            </h1>
          </div>

          <Link
            href="/support"
            className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
          >
            <HelpCircle className="w-4 h-4" /> Need Help?
          </Link>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 lg:px-8 py-10 space-y-10">
        {/* Search Section */}
        <div className="animate-in fade-in slide-in-from-top-4 duration-700">
          <TrackingSearch onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {hasSearched ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <OrderDetails orderId={orderId} />
          </div>
        ) : (
          /* Empty State / Tips */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60">
            <div className="p-6 rounded-2xl border border-dashed border-border flex flex-col items-center text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-muted-foreground" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Where is my Order ID?</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                You can find your Order ID in the confirmation email sent after purchase, or in your Buyer Dashboard under "Orders".
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-dashed border-border flex flex-col items-center text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Truck className="w-5 h-5 text-muted-foreground" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Shipping Times</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Standard delivery takes 1-3 business days. For express delivery, check your order details for specific timing.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
