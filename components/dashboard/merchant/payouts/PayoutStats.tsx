"use client";

import React from 'react';
import { DollarSign, Wallet, ArrowUpRight, Clock } from 'lucide-react';

const PAYOUT_STATS = [
    {
        label: 'Available Balance',
        value: 'KES 84,200',
        subtext: 'Next payout in 2 days',
        icon: Wallet,
        color: 'text-secondary',
        bg: 'bg-secondary/10'
    },
    {
        label: 'Total Payouts',
        value: 'KES 1,240,500',
        subtext: 'Lifetime earnings',
        icon: DollarSign,
        color: 'text-green-600 dark:text-green-400',
        bg: 'bg-green-500/10'
    },
    {
        label: 'Pending Payouts',
        value: 'KES 15,800',
        subtext: '3 transactions pending',
        icon: Clock,
        color: 'text-orange-600 dark:text-orange-400',
        bg: 'bg-orange-500/10'
    },
    {
        label: 'Average Payout',
        value: 'KES 45,000',
        subtext: 'Per transaction',
        icon: ArrowUpRight,
        color: 'text-blue-600 dark:text-blue-400',
        bg: 'bg-blue-500/10'
    },
];

export default function PayoutStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PAYOUT_STATS.map((stat) => (
                <div key={stat.label} className="bg-background border border-border p-5 rounded-2xl group hover:border-secondary/30 transition-all shadow-sm">
                    <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                        <h3 className="text-2xl font-bold text-foreground mt-0.5">{stat.value}</h3>
                        <p className="text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-wider">{stat.subtext}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
