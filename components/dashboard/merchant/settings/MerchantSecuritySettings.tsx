"use client";

import React from 'react';
import { Lock, ShieldCheck, Smartphone, Fingerprint } from 'lucide-react';

export default function MerchantSecuritySettings() {
  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="p-6 border-b border-border bg-muted/5">
        <h2 className="text-lg font-bold font-ubuntu">Security & Access</h2>
        <p className="text-sm text-muted-foreground mt-1">Protect your store account and manage security preferences.</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Password Update */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-foreground">Update Password</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Current Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">New Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Confirm Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-foreground text-background px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
              Change Password
            </button>
          </div>
        </div>

        <div className="h-px bg-border"></div>

        {/* 2FA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-md">
                Secure your seller account with 2FA. We will ask for a code whenever you log in from a new device.
              </p>
            </div>
          </div>
          <button className="bg-secondary/10 text-secondary px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-secondary/20 transition-all self-start md:self-center">
            Enable 2FA
          </button>
        </div>

        <div className="h-px bg-border"></div>

        {/* Authorized Devices */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-foreground">Authorized Devices</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center">
                  <Fingerprint className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Linux PC • Nairobi, KE</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Current Session</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-0.5 rounded">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
