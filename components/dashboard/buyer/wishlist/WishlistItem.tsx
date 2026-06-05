"use client";

import React from 'react';
import { ShoppingCart, Trash2, Star, Bookmark } from 'lucide-react';

interface WishlistItemProps {
  item: {
    id: number;
    name: string;
    price: string;
    oldPrice?: string;
    rating: number;
    reviews: number;
    image?: string;
    inStock: boolean;
  };
}

export default function WishlistItem({ item }: WishlistItemProps) {
  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all group flex flex-col">
      {/* Product Image */}
      <div className="aspect-square bg-muted relative overflow-hidden">
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Bookmark className="w-12 h-12 text-muted-foreground/20" />
          </div>
        )}
        <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-md rounded-xl text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all shadow-sm">
          <Trash2 className="w-4 h-4" />
        </button>
        {!item.inStock && (
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-muted text-muted-foreground px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < Math.floor(item.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}`} />
          ))}
          <span className="text-[10px] text-muted-foreground font-medium ml-1">({item.reviews})</span>
        </div>

        <h4 className="font-bold text-foreground text-sm line-clamp-2 hover:text-primary transition-colors cursor-pointer mb-2 leading-tight">
          {item.name}
        </h4>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">{item.price}</span>
            {item.oldPrice && (
              <span className="text-xs text-muted-foreground line-through">{item.oldPrice}</span>
            )}
          </div>
          <button 
            disabled={!item.inStock}
            className="p-2.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary transition-all shadow-md shadow-primary/10"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
