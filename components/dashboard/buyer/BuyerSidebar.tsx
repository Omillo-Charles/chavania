"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    ShoppingBag,
    MapPin,
    User,
    Heart,
    Bell,
    Settings,
    LogOut,
    ChevronRight
} from 'lucide-react';

export const MENU_ITEMS = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/profile/buyer' },
    { name: 'My Orders', icon: ShoppingBag, href: '/profile/buyer/orders' },
    { name: 'My Addresses', icon: MapPin, href: '/profile/buyer/addresses' },
    { name: 'Wishlist', icon: Heart, href: '/profile/buyer/wishlist' },
    { name: 'Notifications', icon: Bell, href: '/profile/buyer/notifications' },
    { name: 'Account Settings', icon: User, href: '/profile/buyer/settings' },
];

export default function BuyerSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-full h-full flex flex-col bg-background">
            <div className="p-6">
                <h2 className="text-xl font-bold font-ubuntu text-foreground">Buyer Portal</h2>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-medium">Manage your shopping</p>
            </div>

            <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto hide-scrollbar">
                {MENU_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                ? 'bg-primary/10 text-primary'
                                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon className={`w-5 h-5 transition-colors ${isActive ? 'text-primary' : 'group-hover:text-foreground'}`} />
                                <span className="font-medium text-[15px]">{item.name}</span>
                            </div>
                            {isActive && <ChevronRight className="w-4 h-4" />}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-border mt-auto">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-secondary hover:bg-secondary/10 transition-all duration-200 font-medium text-[15px]">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}
