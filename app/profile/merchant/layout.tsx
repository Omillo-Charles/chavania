"use client";

import React from 'react';
import MerchantSidebar from '@/components/dashboard/merchant/MerchantSidebar';
import MerchantHeader from '@/components/dashboard/merchant/MerchantHeader';

export default function MerchantDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-104px)] bg-muted/30 relative">
      {/* Sidebar - Desktop Only */}
      <div className="hidden lg:block w-72 h-[calc(100vh-104px)] sticky top-[104px] overflow-hidden flex-shrink-0 border-r border-border bg-background">
        <MerchantSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <MerchantHeader />
        
        <main className="flex-1 p-8 lg:p-10 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
