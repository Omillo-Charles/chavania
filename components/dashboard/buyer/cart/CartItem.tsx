"use client";

import React from 'react';
import { Minus, Plus, Trash2, Package } from 'lucide-react';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: string;
    quantity: number;
    image?: string;
    store: string;
  };
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6 bg-background border border-border rounded-2xl hover:shadow-md transition-shadow group">
      {/* Product Image */}
      <div className="w-full sm:w-24 h-24 rounded-xl bg-muted flex items-center justify-center border border-border overflow-hidden flex-shrink-0">
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <Package className="w-8 h-8 text-muted-foreground/30" />
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="font-bold text-foreground leading-tight hover:text-primary transition-colors cursor-pointer">{item.name}</h4>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-medium">Sold by: {item.store}</p>
            </div>
            <button className="p-2 text-muted-foreground hover:text-secondary hover:bg-secondary/10 rounded-xl transition-all">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1 bg-muted rounded-xl p-1">
            <button className="p-1.5 hover:bg-background rounded-lg transition-all text-muted-foreground hover:text-foreground">
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
            <button className="p-1.5 hover:bg-background rounded-lg transition-all text-muted-foreground hover:text-foreground">
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-lg font-bold text-foreground">{item.price}</p>
        </div>
      </div>
    </div>
  );
}
