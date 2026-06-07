"use client";

import React from 'react';
import { User, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ShippingDetails() {
    return (
        <div className="bg-background border border-border rounded-3xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-border bg-muted/5">
                <h2 className="text-xl font-bold font-ubuntu flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" /> Shipping Details
                </h2>
                <p className="text-sm text-muted-foreground mt-1">Where should we deliver your order?</p>
            </div>

            <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground flex items-center gap-2">
                            <User className="w-4 h-4 text-muted-foreground" /> Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" /> Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="john.doe@example.com"
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
                                placeholder="700123456"
                                className="flex-1 px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground flex items-center gap-2">
                            <Globe className="w-4 h-4 text-muted-foreground" /> City / Region
                        </label>
                        <select className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
                            <option>Nairobi</option>
                            <option>Mombasa</option>
                            <option>Kisumu</option>
                            <option>Nakuru</option>
                            <option>Eldoret</option>
                        </select>
                    </div>

                    <div className="md:col-span-2 space-y-2">
                        <label className="text-sm font-bold text-foreground flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" /> Street Address / Apartment
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. 123 Ngong Road, Suite 4B"
                            className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                    <input type="checkbox" id="save-address" className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20" />
                    <label htmlFor="save-address" className="text-xs font-medium text-muted-foreground cursor-pointer">Save this address for future orders</label>
                </div>
            </div>
        </div>
    );
}
