"use client";

import React, { useState } from 'react';
import { CreditCard, Smartphone, Landmark, CheckCircle2 } from 'lucide-react';

const PAYMENT_METHODS = [
  { id: 'mpesa', name: 'M-Pesa', icon: Smartphone, description: 'Pay via Lipa na M-Pesa', color: 'text-green-600', bg: 'bg-green-500/10' },
  { id: 'card', name: 'Credit / Debit Card', icon: CreditCard, description: 'Visa, Mastercard, American Express', color: 'text-blue-600', bg: 'bg-blue-500/10' },
  { id: 'bank', name: 'Bank Transfer', icon: Landmark, description: 'Direct transfer from your bank', color: 'text-purple-600', bg: 'bg-purple-500/10' },
];

export default function PaymentMethodSelector() {
  const [selected, setSelected] = useState('mpesa');

  return (
    <div className="bg-background border border-border rounded-3xl overflow-hidden shadow-sm">
      <div className="p-6 border-b border-border bg-muted/5">
        <h2 className="text-xl font-bold font-ubuntu flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-primary" /> Payment Method
        </h2>
        <p className="text-sm text-muted-foreground mt-1">Choose your preferred way to pay.</p>
      </div>

      <div className="p-6 space-y-4">
        {PAYMENT_METHODS.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelected(method.id)}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
              selected === method.id 
                ? 'border-primary bg-primary/5 ring-1 ring-primary/20' 
                : 'border-border bg-background hover:border-primary/30 hover:bg-muted/30'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center ${method.color}`}>
                <method.icon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-foreground">{method.name}</p>
                <p className="text-xs text-muted-foreground">{method.description}</p>
              </div>
            </div>
            {selected === method.id && (
              <CheckCircle2 className="w-5 h-5 text-primary" />
            )}
          </button>
        ))}

        {selected === 'mpesa' && (
          <div className="mt-6 p-4 bg-muted/50 rounded-2xl border border-border animate-in fade-in slide-in-from-top-2 duration-300">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-2 px-1">M-Pesa Phone Number</label>
            <div className="flex gap-2">
              <div className="px-3 py-2.5 bg-background border border-border rounded-xl text-sm font-bold text-muted-foreground flex items-center">
                +254
              </div>
              <input 
                type="tel" 
                placeholder="712345678"
                className="flex-1 px-4 py-2.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 px-1 italic">
              A payment request will be sent to your phone.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
