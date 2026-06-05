"use client";

import React from 'react';
import { Bell, Mail, Smartphone } from 'lucide-react';

export default function NotificationSettings() {
  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-bold font-ubuntu">Notification Preferences</h2>
        <p className="text-sm text-muted-foreground mt-1">Control how and when you receive updates from us.</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-muted/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Email Notifications</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Receive updates about your orders and account via email.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-muted/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Push Notifications</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Get real-time alerts on your device for order status changes.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-muted/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Marketing & Offers</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Receive personalized deals and recommendations.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="text-sm font-bold text-primary hover:underline">Reset to defaults</button>
        </div>
      </div>
    </div>
  );
}
