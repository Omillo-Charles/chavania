"use client";

import React from 'react';
import { MapPin, Plus, MoreVertical, Home, Briefcase } from 'lucide-react';

const ADDRESSES = [
    { id: 1, type: 'Home', name: 'John Doe', address: '123 Main St, Apt 4B', city: 'New York, NY 10001', phone: '+1 (555) 000-0000', isDefault: true, icon: Home },
    { id: 2, type: 'Work', name: 'John Doe', address: '456 Tech Plaza, Floor 12', city: 'San Francisco, CA 94105', phone: '+1 (555) 111-2222', isDefault: false, icon: Briefcase },
];

export default function AddressManagement() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold font-ubuntu">Saved Addresses</h2>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors">
                    <Plus className="w-4 h-4" /> Add New
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ADDRESSES.map((addr) => (
                    <div key={addr.id} className={`p-5 rounded-2xl border transition-all ${addr.isDefault ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-border bg-background hover:border-muted-foreground/30'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2 rounded-lg ${addr.isDefault ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                <addr.icon className="w-5 h-5" />
                            </div>
                            <button className="p-1 hover:bg-muted rounded-md transition-colors text-muted-foreground">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h4 className="font-bold text-foreground">{addr.type}</h4>
                                {addr.isDefault && <span className="text-[10px] font-bold bg-primary/20 text-primary px-1.5 py-0.5 rounded uppercase">Default</span>}
                            </div>
                            <p className="text-sm font-medium text-foreground">{addr.name}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{addr.address}<br />{addr.city}</p>
                            <p className="text-sm text-muted-foreground mt-2 font-medium">{addr.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
