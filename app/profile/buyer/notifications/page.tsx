"use client";

import React from 'react';
import NotificationFilters from '@/components/dashboard/buyer/notifications/NotificationFilters';
import NotificationList from '@/components/dashboard/buyer/notifications/NotificationList';
import { Bell, ArrowLeft, Settings } from 'lucide-react';
import Link from 'next/link';

export default function BuyerNotificationsPage() {
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
              Notifications <Bell className="w-7 h-7 text-primary" />
            </h1>
            <p className="text-muted-foreground mt-1 text-lg">Stay updated with your orders, offers, and account activity.</p>
          </div>
          <Link 
            href="/profile/buyer/settings#notifications"
            className="p-3 bg-muted hover:bg-muted/80 rounded-2xl transition-all text-muted-foreground hover:text-foreground"
            title="Notification Settings"
          >
            <Settings className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Filters & Actions */}
      <NotificationFilters />

      {/* Notifications List */}
      <NotificationList />

      {/* Bottom Info */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex items-start gap-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <Bell className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-foreground">Notification Tip</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You can customize which notifications you receive and where you get them (Email, Push, or SMS) in your <Link href="/profile/buyer/settings#notifications" className="text-primary font-bold hover:underline">Notification Settings</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
