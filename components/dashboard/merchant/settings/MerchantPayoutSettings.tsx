"use client";

import React from 'react';
import { CreditCard, Landmark, Smartphone, Plus, Info } from 'lucide-react';

export default function MerchantPayoutSettings() {
    return (
        <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-border bg-muted/5">
                <h2 className="text-lg font-bold font-ubuntu">Payout Methods</h2>
                <p className="text-sm text-muted-foreground mt-1">Configure where you want to receive your store earnings.</p>
            </div>

            <div className="p-6 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* M-Pesa Method */}
                    <div className="p-5 rounded-2xl border-2 border-secondary bg-secondary/5 relative group">
                        <div className="absolute top-4 right-4">
                            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-0.5 rounded">Primary</span>
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">M-Pesa Business</h4>
                                <p className="text-xs text-muted-foreground">Linked to 0711...333</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="text-xs font-bold text-secondary hover:underline">Edit Details</button>
                        </div>
                    </div>

                    {/* Bank Method */}
                    <div className="p-5 rounded-2xl border border-border bg-background hover:border-secondary/30 transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                                <Landmark className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">Equity Bank</h4>
                                <p className="text-xs text-muted-foreground">Account ending in ****8890</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="text-xs font-bold text-secondary hover:underline">Edit Details</button>
                            <span className="w-1 h-1 rounded-full bg-border"></span>
                            <button className="text-xs font-bold text-muted-foreground hover:text-foreground">Set as Primary</button>
                        </div>
                    </div>

                    {/* Add New */}
                    <button className="p-8 rounded-2xl border-2 border-dashed border-border hover:border-secondary hover:bg-secondary/5 transition-all flex flex-col items-center justify-center gap-3 group">
                        <div className="w-12 h-12 rounded-full bg-muted group-hover:bg-secondary group-hover:text-secondary-foreground flex items-center justify-center transition-all">
                            <Plus className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-bold text-muted-foreground group-hover:text-secondary transition-colors">Add Payout Method</p>
                    </button>
                </div>

                {/* Info Box */}
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 flex items-start gap-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                        <Info className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-sm font-bold text-foreground">Payout Information</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Standard payouts are processed every Monday at 10:00 AM EAT. Ensure your primary payout method is verified to avoid delays. Chavania charges a flat <span className="text-foreground font-bold">2.5%</span> transaction fee on all successful sales.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
