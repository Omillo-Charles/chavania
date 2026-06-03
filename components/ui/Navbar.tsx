"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, Bookmark, ShoppingCart, HelpCircle, Grid, Tag, Store, X } from 'lucide-react';
import ThemeToggle from '../../utils/ThemeToggle';

export default function Navbar() {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsMobileSearchOpen(false);
      }
    }

    if (isMobileSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileSearchOpen]);

  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      {/* Top Level - Support / Contact (Desktop Only) */}
      <div className="hidden lg:flex w-full bg-muted/30 py-1.5 px-6 items-center justify-between text-xs text-muted-foreground border-b border-border/50">
        {/* Left Content */}
        <div className="flex items-center gap-2">
          <span className="text-primary font-medium font-ubuntu">Welcome to .soko!</span>
          <span className="hidden xl:inline-block">Enjoy free shipping on all orders over $50.</span>
        </div>

        {/* Right Content */}
        <div className="flex items-center gap-4">
          <Link href="/support" className="flex items-center gap-1 hover:text-primary transition-colors">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>.sokosupport</span>
          </Link>
          <span>|</span>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact Us
          </Link>
          <span>|</span>
          <Link href="/track" className="hover:text-primary transition-colors">
            Track Order
          </Link>
        </div>
      </div>

      {/* Main Level - Navigation */}
      <div className="w-full px-4 lg:px-6 py-3 lg:py-4">
        {/* DESKTOP LAYOUT (Hidden on mobile) */}
        <div className="hidden lg:flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-3xl font-bold tracking-tighter font-segoe text-primary">
              <span className="text-secondary">.</span>soko
            </span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative group">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="w-full bg-muted border border-border rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Links & Actions */}
          <div className="flex items-center gap-8">

            {/* Main Links */}
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/categories" className="text-foreground hover:text-primary transition-colors">Categories</Link>
              <Link href="/brands" className="text-foreground hover:text-primary transition-colors">Brands</Link>
              <Link href="/stores" className="text-foreground hover:text-primary transition-colors">Stores</Link>
            </nav>

            {/* Divider */}
            <div className="w-px h-6 bg-border"></div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <Link href="/profile/auth" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group">
                <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium uppercase tracking-wider">Profile</span>
              </Link>
              <Link href="/wishlist" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group">
                <div className="relative">
                  <Bookmark className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider">Wishlist</span>
              </Link>
              <Link href="/cart" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider">Cart</span>
              </Link>

              {/* Theme Toggle */}
              <div className="w-px h-6 bg-border mx-1"></div>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (Hidden on desktop) */}
        <div className="flex flex-col lg:hidden w-full gap-4">

          {/* Mobile Top Navbar: Logo + Profile, Wishlist, Cart */}
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-3xl font-bold tracking-tighter font-segoe text-primary">
                <span className="text-secondary">.</span>soko
              </span>
            </Link>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Link href="/profile/auth" className="text-muted-foreground hover:text-primary transition-colors">
                <User className="w-6 h-6" />
              </Link>
              <Link href="/wishlist" className="text-muted-foreground hover:text-primary transition-colors relative">
                <Bookmark className="w-6 h-6" />
                <span className="absolute -top-1.5 -right-1.5 bg-secondary text-secondary-foreground text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </Link>
              <Link href="/cart" className="text-muted-foreground hover:text-primary transition-colors relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </Link>
            </div>
          </div>

          {/* Mobile Bottom Navbar: Links + Search Toggle + Theme Toggle */}
          <div className="flex items-center justify-between w-full pt-2 border-t border-border/50">
            {/* Left: Links with Icons */}
            <nav className="flex items-center gap-5">
              <Link href="/categories" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <Grid className="w-5 h-5" />
                <span className="text-[10px] font-medium tracking-wider">Categories</span>
              </Link>
              <Link href="/brands" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <Tag className="w-5 h-5" />
                <span className="text-[10px] font-medium tracking-wider">Brands</span>
              </Link>
              <Link href="/stores" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <Store className="w-5 h-5" />
                <span className="text-[10px] font-medium tracking-wider">Stores</span>
              </Link>
            </nav>

            {/* Right: Search & Theme Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                aria-expanded={isMobileSearchOpen}
              >
                <Search className="w-5 h-5" />
                <span className="text-[10px] font-medium tracking-wider">Search</span>
              </button>

              <div className="w-px h-6 bg-border mx-1"></div>

              <ThemeToggle />
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Search Dropdown */}
      <div
        ref={searchRef}
        className={`lg:hidden absolute left-0 w-full bg-background border-b border-border p-4 shadow-lg transition-all duration-300 origin-top ${isMobileSearchOpen ? "opacity-100 scale-y-100 top-[100%]" : "opacity-0 scale-y-0 -top-full pointer-events-none"
          }`}
      >
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search products, brands..."
            className="w-full bg-muted border border-border rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
          />
          <button
            onClick={() => setIsMobileSearchOpen(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
