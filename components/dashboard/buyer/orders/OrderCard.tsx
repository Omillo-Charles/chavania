"use client";

import React from 'react';
import { Package, Truck, CheckCircle2, Clock, ExternalLink, MoreVertical } from 'lucide-react';

export type OrderStatus = 'Delivered' | 'In Transit' | 'Processing' | 'Cancelled';

interface OrderCardProps {
    order: {
        id: string;
        date: string;
        status: OrderStatus;
        total: string;
        items: {
            name: string;
            image?: string;
            quantity: number;
            price: string;
        }[];
    };
}

const getStatusStyles = (status: OrderStatus) => {
    switch (status) {
        case 'Delivered': return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20';
        case 'In Transit': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
        case 'Processing': return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
        case 'Cancelled': return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
        default: return 'bg-muted text-muted-foreground border-border';
    }
};

const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
        case 'Delivered': return <CheckCircle2 className="w-4 h-4" />;
        case 'In Transit': return <Truck className="w-4 h-4" />;
        case 'Processing': return <Clock className="w-4 h-4" />;
        case 'Cancelled': return <Package className="w-4 h-4" />;
    }
};

export default function OrderCard({ order }: OrderCardProps) {
    return (
        <div className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
            {/* Order Header */}
            <div className="p-4 sm:p-6 border-b border-border bg-muted/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                    <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Order ID</p>
                        <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{order.id}</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Date Placed</p>
                        <p className="text-sm font-medium text-foreground">{order.date}</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Total Amount</p>
                        <p className="text-sm font-bold text-foreground">{order.total}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusStyles(order.status)}`}>
                        {getStatusIcon(order.status)}
                        {order.status}
                    </span>
                    <button className="p-2 hover:bg-muted rounded-xl transition-colors text-muted-foreground">
                        <MoreVertical className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Order Items */}
            <div className="p-4 sm:p-6 space-y-4">
                {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center border border-border overflow-hidden flex-shrink-0">
                                {item.image ? (
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                ) : (
                                    <Package className="w-6 h-6 text-muted-foreground" />
                                )}
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-foreground hover:underline cursor-pointer leading-tight">{item.name}</h4>
                                <p className="text-xs text-muted-foreground mt-1">Quantity: {item.quantity}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-foreground">{item.price}</p>
                            <button className="text-[10px] font-bold text-primary hover:underline mt-1">View Product</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Actions */}
            <div className="px-4 py-4 sm:px-6 bg-muted/5 border-t border-border flex items-center justify-between">
                <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                    Track Package <ExternalLink className="w-3 h-3" />
                </button>
                <div className="flex items-center gap-2">
                    <button className="px-4 py-2 rounded-xl border border-border text-sm font-bold hover:bg-muted transition-colors">
                        Order Details
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-foreground text-background text-sm font-bold hover:opacity-90 transition-all">
                        Buy it again
                    </button>
                </div>
            </div>
        </div>
    );
}
