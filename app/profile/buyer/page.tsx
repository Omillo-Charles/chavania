"use client";

import DashboardStats from '@/components/dashboard/buyer/DashboardStats';
import RecentOrders from '@/components/dashboard/buyer/RecentOrders';
import AddressManagement from '@/components/dashboard/buyer/AddressManagement';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function BuyerDashboardPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold font-ubuntu tracking-tight text-foreground flex items-center gap-3">
            Welcome back, John Doe
          </h1>
          <p className="text-muted-foreground mt-1 text-lg">Here's what's happening with your orders today.</p>
        </div>
        <button className="bg-foreground text-background px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all self-start md:self-center shadow-lg shadow-foreground/10">
          Start Shopping <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Stats Grid */}
      <DashboardStats />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Recent Orders - Spans 2 columns on large screens */}
        <div className="xl:col-span-2 space-y-4">
          <RecentOrders />
        </div>

        {/* Addresses & Other Info - Spans 1 column */}
        <div className="space-y-10">
          <AddressManagement />

          {/* Wishlist Preview / Promotion */}
          <div className="bg-gradient-to-br from-primary/90 to-primary rounded-3xl p-6 text-primary-foreground relative overflow-hidden group border border-primary/20">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Exclusive Deals for You</h3>
              <p className="text-primary-foreground/90 text-sm mb-6 leading-relaxed">Based on your recent browsing, we've selected items you'll love with up to 40% off.</p>
              <button className="bg-background text-primary px-4 py-2 rounded-xl text-xs font-bold hover:bg-muted transition-colors">
                Explore Offers
              </button>
            </div>
            <ShoppingBag className="absolute -right-4 -bottom-4 w-32 h-32 text-primary-foreground/10 -rotate-12 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
