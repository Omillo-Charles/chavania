"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Package, Truck, CheckCircle2, Clock, ExternalLink, MoreVertical, User, MapPin, ChevronDown, Edit3, XCircle } from 'lucide-react';

export type MerchantOrderStatus = 'Delivered' | 'Shipped' | 'Processing' | 'Cancelled';

const STATUS_OPTIONS: { label: MerchantOrderStatus; icon: React.ElementType; color: string }[] = [
  { label: 'Processing', icon: Clock, color: 'text-orange-500' },
  { label: 'Shipped', icon: Truck, color: 'text-blue-500' },
  { label: 'Delivered', icon: CheckCircle2, color: 'text-green-500' },
  { label: 'Cancelled', icon: XCircle, color: 'text-red-500' },
];

interface MerchantOrderCardProps {
  order: {
    id: string;
    customer: {
      name: string;
      email: string;
      address: string;
    };
    date: string;
    status: MerchantOrderStatus;
    total: string;
    items: {
      name: string;
      quantity: number;
      price: string;
    }[];
  };
}

const getStatusStyles = (status: MerchantOrderStatus) => {
  switch (status) {
    case 'Delivered': return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20';
    case 'Shipped': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
    case 'Processing': return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
    case 'Cancelled': return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
    default: return 'bg-muted text-muted-foreground border-border';
  }
};

const getStatusIcon = (status: MerchantOrderStatus) => {
  switch (status) {
    case 'Delivered': return <CheckCircle2 className="w-4 h-4" />;
    case 'Shipped': return <Truck className="w-4 h-4" />;
    case 'Processing': return <Clock className="w-4 h-4" />;
    case 'Cancelled': return <XCircle className="w-4 h-4" />;
  }
};

export default function MerchantOrderCard({ order }: MerchantOrderCardProps) {
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<MerchantOrderStatus>(order.status);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsStatusDropdownOpen(false);
      }
    }
    if (isStatusDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isStatusDropdownOpen]);

  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
      {/* Order Header */}
      <div className="p-4 sm:p-6 border-b border-border bg-muted/5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Order ID</p>
            <p className="text-sm font-bold text-foreground group-hover:text-secondary transition-colors">{order.id}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Placed On</p>
            <p className="text-sm font-medium text-foreground">{order.date}</p>
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Earnings</p>
            <p className="text-sm font-bold text-foreground">{order.total}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusStyles(currentStatus)}`}>
            {getStatusIcon(currentStatus)}
            {currentStatus}
          </span>
          <button className="p-2 hover:bg-muted rounded-xl transition-colors text-muted-foreground">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Customer & Items Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Customer Details */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">{order.customer.name}</h4>
              <p className="text-xs text-muted-foreground">{order.customer.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
            <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
            <span>{order.customer.address}</span>
          </div>
        </div>

        {/* Order Items */}
        <div className="p-6 lg:col-span-2 space-y-4">
          {order.items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center border border-border overflow-hidden flex-shrink-0">
                  <Package className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-tight">{item.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Merchant Actions */}
      <div className="px-4 py-4 sm:px-6 bg-muted/5 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <button className="text-sm font-bold text-secondary hover:underline flex items-center gap-1">
          Print Shipping Label <ExternalLink className="w-3 h-3" />
        </button>
        <div className="flex items-center gap-2">
          {currentStatus === 'Processing' && (
            <button className="px-4 py-2 rounded-xl bg-secondary text-secondary-foreground text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-secondary/10">
              Mark as Shipped
            </button>
          )}

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-bold hover:bg-muted transition-colors"
            >
              Update Status <ChevronDown className={`w-4 h-4 transition-transform ${isStatusDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isStatusDropdownOpen && (
              <div className="absolute right-0 bottom-full mb-2 w-48 bg-background border border-border rounded-xl shadow-xl py-2 z-30 animate-in fade-in slide-in-from-bottom-2 duration-100">
                <p className="px-4 py-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Select Status</p>
                {STATUS_OPTIONS.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => {
                      setCurrentStatus(option.label);
                      setIsStatusDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${currentStatus === option.label
                      ? 'text-secondary bg-secondary/5 font-bold'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                  >
                    <option.icon className={`w-4 h-4 ${option.color}`} />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
