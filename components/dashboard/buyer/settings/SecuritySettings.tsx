"use client";

import React from 'react';
import { Lock, ShieldCheck, Smartphone } from 'lucide-react';

export default function SecuritySettings() {
    return (
        <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-border">
                <h2 className="text-lg font-bold font-ubuntu">Security & Authentication</h2>
                <p className="text-sm text-muted-foreground mt-1">Manage your password and account security settings.</p>
            </div>

            <div className="p-6 space-y-8">
                {/* Password Update */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Lock className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-foreground">Change Password</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase">Current Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase">New Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-foreground text-background px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                            Update Password
                        </button>
                    </div>
                </div>

                <div className="h-px bg-border"></div>

                {/* Two-Factor Authentication */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground">Two-Factor Authentication (2FA)</h3>
                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-md">
                                Add an extra layer of security to your account by requiring a code from your phone in addition to your password.
                            </p>
                        </div>
                    </div>
                    <button className="bg-primary/10 text-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/20 transition-all self-start md:self-center">
                        Enable 2FA
                    </button>
                </div>
            </div>
        </div>
    );
}
