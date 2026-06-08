"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Package, Truck, MapPin, Calendar, ExternalLink, HelpCircle } from 'lucide-react';
import TrackingSearch from '@/components/track/TrackingSearch';
import TrackingTimeline from '@/components/track/TrackingTimeline';

// Mock data for tracking steps
const MOCK_STEPS = [
  {
    status: "Delivered",
    date: "June 08, 2026",
    time: "02:30 PM",
    location: "Kilimani, Nairobi",
    description: "Package was handed over to the recipient at the delivery address.",
    isCompleted: true,
    isCurrent: false,
  },
  {
    status: "Out for Delivery",
    date: "June 08, 2026",
    time: "09:15 AM",
    location: "Nairobi Central Hub",
    description: "Your package is with our delivery partner and will arrive today.",
    isCompleted: true,
    isCurrent: true,
  },
  {
    status: "In Transit",
    date: "June 07, 2026",
    time: "11:00 PM",
    location: "Mombasa Road Facility",
    description: "Package is moving between distribution centers.",
    isCompleted: true,
    isCurrent: false,
  },
  {
    status: "Processing",
    date: "June 07, 2026",
    time: "04:45 PM",
    location: "dotSoko Warehouse",
    description: "The merchant has prepared your order and it's ready for pickup.",
    isCompleted: true,
    isCurrent: false,
  },
  {
    status: "Order Placed",
    date: "June 07, 2026",
    time: "02:20 PM",
    location: "Online",
    description: "We have received your order and are verifying payment.",
    isCompleted: true,
    isCurrent: false,
  }
];

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

      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-10 space-y-10">
        {/* Search Section */}
        <div className="animate-in fade-in slide-in-from-top-4 duration-700">
          <TrackingSearch onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {hasSearched ? (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Order Brief Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-2xl p-6 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Order ID</p>
                  <p className="text-sm font-bold text-foreground">{orderId}</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Estimated Delivery</p>
                  <p className="text-sm font-bold text-foreground">Today, June 08</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Current Location</p>
                  <p className="text-sm font-bold text-foreground">Kilimani, Nairobi</p>
                </div>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="bg-background border border-border rounded-[32px] p-8 lg:p-12 shadow-sm">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-xl font-bold font-ubuntu text-foreground">Delivery Journey</h3>
                <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                  View full details <ExternalLink className="w-3 h-3" />
                </button>
              </div>
              <TrackingTimeline steps={MOCK_STEPS} />
            </div>

            {/* Support Call-to-action */}
            <div className="p-8 rounded-[32px] bg-secondary text-secondary-foreground text-center space-y-4">
              <h3 className="text-lg font-bold font-ubuntu">Experiencing issues with your delivery?</h3>
              <p className="text-sm opacity-90 max-w-xl mx-auto">
                Our support team is available 24/7 to help you resolve any shipping or order-related concerns.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-secondary rounded-xl font-bold hover:bg-secondary-foreground hover:text-secondary transition-all"
                >
                  Contact Support
                </Link>
              </div>
            </div>
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
