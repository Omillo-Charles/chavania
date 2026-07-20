"use client";

import React from 'react';
import { Store, Globe, Mail, Phone, MapPin, Camera } from 'lucide-react';

export default function StoreSettings() {
  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="p-6 border-b border-border bg-muted/5">
        <h2 className="text-lg font-bold font-ubuntu">Store Profile</h2>
        <p className="text-sm text-muted-foreground mt-1">Manage your public store presence and contact information.</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Store Logo & Banner */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative group">
            <div className="w-24 h-24 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary font-bold text-2xl border-2 border-dashed border-secondary/30 group-hover:border-secondary transition-all overflow-hidden">
              TH
            </div>
            <button className="absolute -bottom-2 -right-2 p-2 bg-background border border-border rounded-xl shadow-lg text-muted-foreground hover:text-secondary transition-all">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 space-y-4">
            <h4 className="text-sm font-bold text-foreground">Store Logo</h4>
            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
              Your store logo will be visible to all customers on your product pages and store profile. PNG or JPG. Max 2MB.
            </p>
            <div className="flex items-center gap-3">
              <button className="text-xs font-bold text-secondary hover:underline">Upload New Logo</button>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <button className="text-xs font-bold text-red-500 hover:underline">Remove</button>
            </div>
          </div>
        </div>

        {/* Store Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground flex items-center gap-2">
              <Store className="w-4 h-4 text-muted-foreground" /> Store Name
            </label>
            <input 
              type="text" 
              defaultValue="TechHaven Store"
              className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" /> Store URL
            </label>
            <div className="flex">
              <span className="px-3 py-2.5 bg-muted/50 border border-r-0 border-border rounded-l-xl text-xs font-medium text-muted-foreground flex items-center">
                chavania.com/
              </span>
              <input 
                type="text" 
                defaultValue="techhaven"
                className="flex-1 px-4 py-2.5 bg-muted/30 border border-border rounded-r-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-bold text-foreground">Store Description</label>
            <textarea 
              rows={3}
              defaultValue="Premium tech gadgets and accessories delivered straight to your door in Nairobi and across Kenya."
              className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" /> Support Email
            </label>
            <input 
              type="email" 
              defaultValue="support@techhaven.co.ke"
              className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground flex items-center gap-2">
              <Phone className="w-4 h-4 text-muted-foreground" /> Support Phone
            </label>
            <input 
              type="tel" 
              defaultValue="+254 711 222 333"
              className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="bg-secondary text-secondary-foreground px-8 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-secondary/10">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
