"use client";

import React from 'react';
import { MoreVertical, Edit2, Trash2, Eye, Package, Tag, Layers } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    price: string;
    stock: number;
    sales: number;
    status: 'Active' | 'Draft' | 'Out of Stock';
    image?: string;
  };
}

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'Active': return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20';
    case 'Draft': return 'bg-muted text-muted-foreground border-border';
    case 'Out of Stock': return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
    default: return 'bg-muted text-muted-foreground border-border';
  }
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-md transition-all group flex flex-col">
      {/* Product Image */}
      <div className="aspect-video bg-muted relative overflow-hidden">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="w-12 h-12 text-muted-foreground/20" />
          </div>
        )}
        <div className="absolute top-3 right-3 flex gap-2">
          <button className="p-2 bg-background/80 backdrop-blur-md rounded-xl text-muted-foreground hover:text-primary transition-all shadow-sm">
            <Edit2 className="w-4 h-4" />
          </button>
          <button className="p-2 bg-background/80 backdrop-blur-md rounded-xl text-muted-foreground hover:text-secondary transition-all shadow-sm">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getStatusStyles(product.status)}`}>
            {product.status}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <Tag className="w-3 h-3 text-secondary" />
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{product.category}</span>
        </div>

        <h4 className="font-bold text-foreground text-sm line-clamp-1 hover:text-secondary transition-colors cursor-pointer mb-4">
          {product.name}
        </h4>

        <div className="grid grid-cols-2 gap-4 mt-auto">
          <div className="space-y-1">
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Price</p>
            <p className="text-sm font-bold text-foreground">{product.price}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Inventory</p>
            <p className={`text-sm font-bold ${product.stock < 10 ? 'text-orange-500' : 'text-foreground'}`}>
              {product.stock} units
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Layers className="w-3.5 h-3.5" />
            {product.sales} sales
          </div>
          <button className="text-xs font-bold text-secondary hover:underline flex items-center gap-1">
            View Analytics <Eye className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
