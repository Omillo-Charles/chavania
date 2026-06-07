"use client";

import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

const ITEMS = [
    { id: 1, name: 'Wireless Noise Cancelling Headphones', quantity: 1, price: 'KES 8,500' },
    { id: 2, name: 'Leather Slim Wallet', quantity: 1, price: 'KES 4,500' },
    { id: 3, name: 'USB-C Fast Charger', quantity: 2, price: 'KES 4,400' }
];

export default function CheckoutSummary() {
    return (
        <div className="bg-background border border-border rounded-3xl p-6 lg:p-8 shadow-sm space-y-6 sticky top-[120px]">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-ubuntu">Order Summary</h3>
                <span className="px-2 py-1 bg-muted text-muted-foreground rounded-lg text-[10px] font-bold uppercase">3 Items</span>
            </div>

            {/* Items Preview */}
            <div className="space-y-3 py-2 max-h-48 overflow-y-auto hide-scrollbar">
                {ITEMS.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-foreground truncate">{item.name}</p>
                            <p className="text-[10px] text-muted-foreground font-medium">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-bold text-foreground shrink-0">{item.price}</p>
                    </div>
                ))}
            </div>

            <div className="h-px bg-border my-2"></div>

            <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-bold text-foreground">KES 17,300</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Shipping Fee</span>
                    <span className="font-bold text-green-600">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-bold text-foreground">KES 1,200</span>
                </div>

                <div className="h-px bg-border my-2"></div>

                <div className="flex items-center justify-between text-lg">
                    <span className="font-bold font-ubuntu">Total</span>
                    <span className="font-bold text-primary">KES 18,500</span>
                </div>
            </div>

            <div className="space-y-4 pt-2">
                <button className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group">
                    Place Order Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-center text-muted-foreground leading-relaxed">
                    By placing your order, you agree to our <button className="text-primary hover:underline">Terms of Service</button> and <button className="text-primary hover:underline">Privacy Policy</button>.
                </p>
            </div>

            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-2xl border border-border">
                <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
                <p className="text-[10px] text-muted-foreground leading-relaxed font-medium">
                    Your transaction is encrypted and secure. <span className="text-foreground font-bold">dotSoko</span> does not store your full payment details.
                </p>
            </div>
        </div>
    );
}
