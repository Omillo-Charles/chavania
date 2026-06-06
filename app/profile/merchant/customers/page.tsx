"use client";

import React from 'react';
import CustomerFilters from '@/components/dashboard/merchant/customers/CustomerFilters';
import CustomerGrid from '@/components/dashboard/merchant/customers/CustomerGrid';
import { Users, ArrowLeft, MessageSquare, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function MerchantCustomersPage() {
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
              Customer Directory <Users className="w-7 h-7 text-secondary" />
            </h1>
            <p className="text-muted-foreground mt-1 text-lg">Manage relationships and view shopping habits of your store patrons.</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="hidden sm:block px-4 py-2 bg-muted text-muted-foreground rounded-xl text-sm font-bold">
               842 Total Customers
             </div>
             <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-secondary text-secondary-foreground rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-secondary/10">
               <MessageSquare className="w-4 h-4" /> Broadcast Message
             </button>
          </div>
        </div>
      </div>

      {/* Stats Quick Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-background border border-border p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">New Customers</p>
            <h3 className="text-xl font-bold text-foreground">+24 this week</h3>
          </div>
        </div>
        <div className="bg-background border border-border p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Retention Rate</p>
            <h3 className="text-xl font-bold text-foreground">68% Monthly</h3>
          </div>
        </div>
        <div className="bg-background border border-border p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Active Chats</p>
            <h3 className="text-xl font-bold text-foreground">12 Unread</h3>
          </div>
        </div>
      </div>

      {/* Filters */}
      <CustomerFilters />

      {/* Customer Grid */}
      <CustomerGrid />

      {/* Engagement Tip */}
      <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 mt-12 overflow-hidden relative">
        <div className="space-y-4 relative z-10">
          <h3 className="text-2xl font-bold text-foreground">Boost Customer Loyalty</h3>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Personalized messages to your top spenders can increase retention by up to 30%. Try sending a discount code to your "Top Spenders" today.
          </p>
        </div>
        <div className="flex items-center gap-4 pt-2 md:pt-0 shrink-0 relative z-10">
          <button className="px-5 py-2 bg-blue-500 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all whitespace-nowrap shadow-lg shadow-blue-500/20">
            Create Promo
          </button>
          <button className="px-5 py-2 border border-border text-foreground rounded-xl text-sm font-bold hover:bg-muted transition-all whitespace-nowrap">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
