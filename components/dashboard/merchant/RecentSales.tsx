"use client";

import React from 'react';
import { ExternalLink, CheckCircle2, Clock, Truck, MoreHorizontal } from 'lucide-react';

const RECENT_SALES = [
  { id: '#SL-7721', customer: 'Alice Wambui', date: '2h ago', status: 'Processing', total: 'KES 12,900', items: 2 },
  { id: '#SL-8812', customer: 'David Maina', date: '5h ago', status: 'Shipped', total: 'KES 4,500', items: 1 },
  { id: '#SL-9901', customer: 'Sarah Kemunto', date: 'Yesterday', status: 'Delivered', total: 'KES 21,000', items: 3 },
  { id: '#SL-4452', customer: 'John Kamau', date: 'Yesterday', status: 'Delivered', total: 'KES 8,500', items: 1 },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'Delivered': return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20';
    case 'Shipped': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
    case 'Processing': return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
    default: return 'bg-muted text-muted-foreground border-border';
  }
};

export default function RecentSales() {
  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="p-6 border-b border-border flex items-center justify-between bg-muted/5">
        <div>
          <h2 className="text-lg font-bold font-ubuntu">Recent Sales</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Manage your latest incoming orders.</p>
        </div>
        <button className="text-secondary text-sm font-bold hover:underline flex items-center gap-1">
          View All <ExternalLink className="w-3 h-3" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-muted/30 text-muted-foreground text-[10px] uppercase tracking-wider font-bold">
              <th className="px-6 py-4">Order</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {RECENT_SALES.map((sale) => (
              <tr key={sale.id} className="hover:bg-muted/10 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground group-hover:text-secondary transition-colors">{sale.id}</span>
                    <span className="text-[10px] text-muted-foreground">{sale.date}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-foreground">{sale.customer}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getStatusStyles(sale.status)}`}>
                    {sale.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-foreground">{sale.total}</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-muted rounded-xl transition-colors text-muted-foreground">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
