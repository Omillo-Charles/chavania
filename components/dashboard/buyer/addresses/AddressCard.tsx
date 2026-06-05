"use client";

import React from 'react';
import { MoreVertical, Home, Briefcase, MapPin, CheckCircle2 } from 'lucide-react';

export type AddressType = 'Home' | 'Work' | 'Other';

interface AddressCardProps {
    address: {
        id: number;
        type: AddressType;
        name: string;
        street: string;
        city: string;
        state: string;
        zip: string;
        phone: string;
        isDefault: boolean;
    };
}

const getIcon = (type: AddressType) => {
    switch (type) {
        case 'Home': return Home;
        case 'Work': return Briefcase;
        default: return MapPin;
    }
};

export default function AddressCard({ address }: AddressCardProps) {
    const Icon = getIcon(address.type);

    return (
        <div className={`group relative p-6 rounded-2xl border transition-all duration-300 ${address.isDefault
                ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
                : 'border-border bg-background hover:border-primary/30 hover:shadow-md'
            }`}>
            {address.isDefault && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-primary text-primary-foreground rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    Default
                </div>
            )}

            <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl ${address.isDefault ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors'}`}>
                    <Icon className="w-6 h-6" />
                </div>
                {!address.isDefault && (
                    <button className="p-2 hover:bg-muted rounded-xl transition-colors text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                )}
            </div>

            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                        {address.type}
                    </h4>
                    <p className="text-sm font-semibold text-foreground/80 mt-1">{address.name}</p>
                </div>

                <div className="space-y-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {address.street}<br />
                        {address.city}, {address.state} {address.zip}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium pt-2 flex items-center gap-2">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground/60">Phone:</span>
                        {address.phone}
                    </p>
                </div>

                <div className="pt-4 flex items-center gap-3">
                    <button className="text-xs font-bold text-primary hover:underline transition-all">
                        Edit Address
                    </button>
                    {!address.isDefault && (
                        <>
                            <span className="w-1 h-1 rounded-full bg-border"></span>
                            <button className="text-xs font-bold text-muted-foreground hover:text-foreground transition-all">
                                Set as Default
                            </button>
                            <span className="w-1 h-1 rounded-full bg-border"></span>
                            <button className="text-xs font-bold text-secondary hover:underline transition-all">
                                Remove
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
