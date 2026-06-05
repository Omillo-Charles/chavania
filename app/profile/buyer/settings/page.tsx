"use client";

import React from 'react';
import ProfileSettings from '@/components/dashboard/buyer/settings/ProfileSettings';
import SecuritySettings from '@/components/dashboard/buyer/settings/SecuritySettings';
import NotificationSettings from '@/components/dashboard/buyer/settings/NotificationSettings';
import { Settings, ArrowLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function BuyerSettingsPage() {
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
        <div>
          <h1 className="text-3xl font-bold font-ubuntu tracking-tight text-foreground flex items-center gap-3">
            Account Settings <Settings className="w-7 h-7 text-primary" />
          </h1>
          <p className="text-muted-foreground mt-1 text-lg">Manage your personal information, security, and preferences.</p>
        </div>
      </div>

      <div className="space-y-10">
        {/* Profile Section */}
        <section id="profile">
          <ProfileSettings />
        </section>

        {/* Security Section */}
        <section id="security">
          <SecuritySettings />
        </section>

        {/* Notifications Section */}
        <section id="notifications">
          <NotificationSettings />
        </section>

        {/* Danger Zone */}
        <section id="danger" className="pt-6">
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                  <Trash2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-red-600 dark:text-red-400">Delete Account</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-md">
                    Permanently delete your account and all of your data. This action cannot be undone.
                  </p>
                </div>
              </div>
              <button className="bg-red-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-red-600 transition-all self-start md:self-center shadow-lg shadow-red-500/20">
                Delete Account
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
