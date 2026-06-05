"use client";

import React from 'react';
import AddressList from '@/components/dashboard/buyer/addresses/AddressList';
import { MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BuyerAddressesPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Page Header */}
            <div className="flex flex-col gap-4">
                <Link
                    href="/profile/buyer"
                    className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                </Link>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold font-ubuntu tracking-tight text-foreground flex items-center gap-3">
                            My Addresses <MapPin className="w-7 h-7 text-primary" />
                        </h1>
                        <p className="text-muted-foreground mt-1 text-lg">Manage your shipping and billing addresses for a seamless experience.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-xl text-sm font-bold">
                        3 Saved Addresses
                    </div>
                </div>
            </div>

            {/* Addresses List */}
            <AddressList />

            {/* Info Box */}
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 flex items-start gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                    <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                    <h4 className="text-sm font-bold text-foreground">Delivery Tip</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Ensure your "Default" address is the one you use most frequently. You can change this at any time by selecting "Set as Default" on another address card.
                    </p>
                </div>
            </div>
        </div>
    );
}
