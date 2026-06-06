"use client";

import React from 'react';
import { Bell, ShoppingCart, MessageSquare, Tag, Package } from 'lucide-react';

export default function MerchantNotificationSettings() {
  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="p-6 border-b border-border bg-muted/5">
        <h2 className="text-lg font-bold font-ubuntu">Notification Preferences</h2>
        <p className="text-sm text-muted-foreground mt-1">Control how you want to be notified about store activities.</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-muted/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">New Orders</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Instant alerts when a customer places an order.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-muted/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Customer Messages</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Notifications for new customer inquiries and chats.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-muted/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Low Stock Alerts</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Get notified when products fall below your set threshold.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-muted/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Marketing & Tips</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Weekly seller insights and growth recommendations.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            </label>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="text-sm font-bold text-secondary hover:underline">Reset to defaults</button>
        </div>
      </div>
    </div>
  );
}
