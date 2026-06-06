"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    BarChart3,
    Settings,
    LogOut,
    ChevronRight,
    Store,
    CreditCard,
    MessageSquare
} from 'lucide-react';

export const MERCHANT_MENU_ITEMS = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/profile/merchant' },
    { name: 'Orders', icon: ShoppingCart, href: '/profile/merchant/orders' },
    { name: 'Products', icon: Package, href: '/profile/merchant/products' },
    { name: 'Customers', icon: Users, href: '/profile/merchant/customers' },
    { name: 'Analytics', icon: BarChart3, href: '/profile/merchant/analytics' },
    { name: 'Payouts', icon: CreditCard, href: '/profile/merchant/payouts' },
    { name: 'Messages', icon: MessageSquare, href: '/profile/merchant/messages' },
    { name: 'Store Settings', icon: Settings, href: '/profile/merchant/settings' },
];

export default function MerchantSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-full h-full flex flex-col bg-background">
            <div className="p-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground">
                        <Store className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold font-ubuntu text-foreground">Merchant</h2>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Seller Central</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto hide-scrollbar">
                {MERCHANT_MENU_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                    ? 'bg-secondary/10 text-secondary'
                                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon className={`w-5 h-5 transition-colors ${isActive ? 'text-secondary' : 'group-hover:text-foreground'}`} />
                                <span className="font-medium text-[15px]">{item.name}</span>
                            </div>
                            {isActive && <ChevronRight className="w-4 h-4" />}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-border mt-auto">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-all duration-200 font-medium text-[15px]">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}
