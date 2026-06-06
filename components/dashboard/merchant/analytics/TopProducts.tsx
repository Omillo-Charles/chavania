"use client";

import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

const TOP_PRODUCTS = [
  { id: 1, name: 'Wireless Noise Cancelling Headphones', sales: 124, revenue: 'KES 1,054,000', growth: '+12%', image: null },
  { id: 2, name: 'USB-C Fast Charger (65W)', sales: 342, revenue: 'KES 752,400', growth: '+8%', image: null },
  { id: 3, name: 'Leather Slim Wallet - Tan', sales: 89, revenue: 'KES 400,500', growth: '+15%', image: null },
  { id: 4, name: 'Mechanical RGB Gaming Keyboard', sales: 56, revenue: 'KES 840,000', growth: '+5%', image: null },
];

export default function TopProducts() {
  return (
    <div className="bg-background border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col h-full">
      <div className="p-6 border-b border-border flex items-center justify-between bg-muted/5">
        <h3 className="text-lg font-bold font-ubuntu">Top Products</h3>
        <button className="text-secondary text-xs font-bold hover:underline flex items-center gap-1">
          Full Report <ExternalLink className="w-3 h-3" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-border">
          {TOP_PRODUCTS.map((product) => (
            <div key={product.id} className="p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground/30 flex-shrink-0 border border-border">
                {/* Image Placeholder */}
                <div className="w-6 h-6 bg-muted-foreground/20 rounded-md"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-foreground truncate leading-tight mb-1">{product.name}</h4>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-muted-foreground font-medium">{product.sales} sales</span>
                  <div className="flex items-center gap-1 text-[10px] text-green-500 font-bold">
                    <TrendingUp className="w-2.5 h-2.5" />
                    {product.growth}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">{product.revenue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-muted/5 border-t border-border mt-auto">
        <button className="w-full py-2 text-xs font-bold text-muted-foreground hover:text-secondary transition-colors">
          View all products
        </button>
      </div>
    </div>
  );
}
