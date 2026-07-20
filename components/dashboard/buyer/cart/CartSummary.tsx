"use client";

import React from 'react';
import { ShieldCheck, ArrowRight, Tag } from 'lucide-react';

export default function CartSummary() {
  return (
    <div className="bg-background border border-border rounded-3xl p-6 lg:p-8 shadow-sm space-y-6 sticky top-[192px]">
      <h3 className="text-xl font-bold font-ubuntu">Order Summary</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Subtotal (3 items)</span>
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

      <div className="space-y-4">
        <div className="relative">
          <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Promo Code" 
            className="w-full pl-10 pr-20 py-3 bg-muted/50 border border-transparent focus:border-primary/30 focus:bg-background rounded-xl text-sm transition-all outline-none font-medium"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/10 rounded-lg transition-all">
            Apply
          </button>
        </div>

        <button className="w-full py-4 bg-foreground text-background rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-foreground/10 group">
          Checkout Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10">
        <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
        <p className="text-[10px] text-muted-foreground leading-relaxed font-medium">
          Your payment is secured by <span className="text-primary font-bold">Chavania Buyer Protection</span>. Funds are only released after delivery confirmation.
        </p>
      </div>
    </div>
  );
}
