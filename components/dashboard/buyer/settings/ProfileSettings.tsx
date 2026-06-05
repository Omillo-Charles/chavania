"use client";

import React from 'react';
import { User, Mail, Phone, Camera } from 'lucide-react';

export default function ProfileSettings() {
  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-bold font-ubuntu">Profile Information</h2>
        <p className="text-sm text-muted-foreground mt-1">Update your personal details and how others see you.</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Profile Picture */}
        <div className="flex items-center gap-6">
          <div className="relative group">
            <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl border-2 border-dashed border-primary/30 group-hover:border-primary transition-all overflow-hidden">
              JD
            </div>
            <button className="absolute -bottom-2 -right-2 p-2 bg-background border border-border rounded-xl shadow-lg text-muted-foreground hover:text-primary transition-all">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">Profile Picture</h4>
            <p className="text-xs text-muted-foreground mt-1">PNG, JPG or GIF. Max 2MB.</p>
            <div className="flex items-center gap-3 mt-3">
              <button className="text-xs font-bold text-primary hover:underline">Upload New</button>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <button className="text-xs font-bold text-secondary hover:underline">Remove</button>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" /> Full Name
            </label>
            <input 
              type="text" 
              defaultValue="John Doe"
              className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" /> Email Address
            </label>
            <input 
              type="email" 
              defaultValue="john.doe@example.com"
              className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground flex items-center gap-2">
              <Phone className="w-4 h-4 text-muted-foreground" /> Phone Number
            </label>
            <div className="flex gap-2">
              <div className="px-3 py-2.5 bg-muted/50 border border-border rounded-xl text-sm font-bold text-muted-foreground">
                +254
              </div>
              <input 
                type="tel" 
                defaultValue="700123456"
                className="flex-1 px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
