"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Bell, ChevronDown, LogOut, Store, ExternalLink } from 'lucide-react';
import { MERCHANT_MENU_ITEMS } from './MerchantSidebar';

export default function MerchantHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="h-[72px] border-b border-border bg-background/80 backdrop-blur-md relative lg:sticky lg:top-[104px] z-20 px-4 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative w-48 sm:w-64 lg:w-96 max-w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search orders, products..."
            className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-transparent focus:border-secondary/30 focus:bg-background rounded-xl text-sm transition-all outline-none"
          />
        </div>
        
        <Link 
          href="/" 
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:bg-muted text-xs font-bold text-muted-foreground transition-all"
        >
          View Shop <ExternalLink className="w-3 h-3" />
        </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="p-2 sm:p-2.5 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-all relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-secondary rounded-full border-2 border-background"></span>
        </button>

        <div className="h-8 w-[1px] bg-border mx-1 hidden sm:block"></div>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 sm:gap-3 p-1.5 sm:pr-3 rounded-xl hover:bg-muted transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm flex-shrink-0">
              TH
            </div>
            <div className="text-left hidden md:block">
              <p className="text-xs font-bold text-foreground leading-tight">TechHaven Store</p>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">Gold Merchant</p>
            </div>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-2xl shadow-xl py-2 z-30 animate-in fade-in zoom-in-95 duration-100">
              <div className="px-4 py-2 border-b border-border mb-1 md:hidden">
                <p className="text-sm font-bold text-foreground">TechHaven Store</p>
                <p className="text-[10px] text-muted-foreground uppercase">Gold Merchant</p>
              </div>
              
              <div className="lg:hidden">
                {MERCHANT_MENU_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        isActive ? 'text-secondary bg-secondary/5 font-bold' : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
                <div className="h-px bg-border my-1"></div>
              </div>

              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-500/5 transition-colors">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
