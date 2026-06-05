"use client";

import React from 'react';
import { ExternalLink, Clock, CheckCircle2, Truck } from 'lucide-react';

const RECENT_ORDERS = [
  { id: '#ORD-7721', date: 'Oct 12, 2023', status: 'Delivered', total: 'KES 12,900', items: 2 },
  { id: '#ORD-8812', date: 'Oct 15, 2023', status: 'In Transit', total: 'KES 4,500', items: 1 },
  { id: '#ORD-9901', date: 'Oct 18, 2023', status: 'Processing', total: 'KES 21,000', items: 3 },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'Delivered': return 'bg-green-500/10 text-green-600 dark:text-green-400';
    case 'In Transit': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
    case 'Processing': return 'bg-orange-500/10 text-orange-600 dark:text-orange-400';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Delivered': return <CheckCircle2 className="w-3.5 h-3.5" />;
    case 'In Transit': return <Truck className="w-3.5 h-3.5" />;
    case 'Processing': return <Clock className="w-3.5 h-3.5" />;
    default: return null;
  }
};

export default function RecentOrders() {
  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <h2 className="text-lg font-bold font-ubuntu">Recent Orders</h2>
        <button className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
          View all <ExternalLink className="w-3 h-3" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-muted/50 text-muted-foreground text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-bold">Order ID</th>
              <th className="px-6 py-4 font-bold">Date</th>
              <th className="px-6 py-4 font-bold">Status</th>
              <th className="px-6 py-4 font-bold">Items</th>
              <th className="px-6 py-4 font-bold text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {RECENT_ORDERS.map((order) => (
              <tr key={order.id} className="hover:bg-muted/5 transition-colors group cursor-pointer">
                <td className="px-6 py-4 text-sm font-bold text-foreground group-hover:text-primary transition-colors">{order.id}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{order.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${getStatusStyles(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{order.items} items</td>
                <td className="px-6 py-4 text-sm font-bold text-foreground text-right">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
