"use client";

import React from 'react';
import PayoutStats from '@/components/dashboard/merchant/payouts/PayoutStats';
import PayoutHistory from '@/components/dashboard/merchant/payouts/PayoutHistory';
import { CreditCard, ArrowLeft, Download, Plus, Landmark, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function MerchantPayoutsPage() {
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
              Payouts & Earnings <CreditCard className="w-7 h-7 text-secondary" />
            </h1>
            <p className="text-muted-foreground mt-1 text-lg">Manage your withdrawals, payment methods, and financial history.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-secondary text-secondary-foreground rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-secondary/10">
            <Plus className="w-4 h-4" /> Request Payout
          </button>
        </div>
      </div>

      {/* Payout Stats */}
      <PayoutStats />

      {/* Payment Methods & History Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Payout History - Spans 2 columns */}
        <div className="xl:col-span-2">
          <PayoutHistory />
        </div>

        {/* Payment Methods Sidebar */}
        <div className="space-y-8">
          <div className="bg-background border border-border rounded-3xl p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-foreground">Payment Methods</h3>
              <button className="text-[10px] font-bold text-secondary hover:underline">Manage</button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl border border-secondary/20 bg-secondary/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">M-Pesa</p>
                    <p className="text-[10px] text-muted-foreground">0712...345</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-0.5 rounded">Primary</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl border border-border hover:bg-muted transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Equity Bank</p>
                    <p className="text-[10px] text-muted-foreground">****8890</p>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 border-2 border-dashed border-border rounded-2xl text-xs font-bold text-muted-foreground hover:border-secondary/30 hover:text-secondary hover:bg-secondary/5 transition-all flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Add New Method
              </button>
            </div>
          </div>

          {/* Quick Tip */}
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-6 space-y-3">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span> 
              Withdrawal Schedule
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Payouts requested before <span className="font-bold text-foreground">10:00 AM</span> are typically processed same-day. M-Pesa withdrawals are near-instant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
