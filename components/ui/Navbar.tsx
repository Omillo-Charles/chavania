import React from 'react';
import Link from 'next/link';
import { Search, User, Heart, ShoppingCart, HelpCircle } from 'lucide-react';
import ThemeToggle from '../../utils/ThemeToggle';

export default function Navbar() {
  return (
    <header className="w-full border-b border-border bg-background">
      {/* Top Level - Support / Contact */}
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
      <div className="w-full px-6 py-4 flex items-center justify-between gap-8">
        
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="text-3xl font-bold tracking-tighter font-segoe text-primary">
            <span className="text-secondary">.</span>soko
          </span>
        </Link>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-2xl relative group">
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
        <div className="hidden lg:flex items-center gap-8">
          
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
            <Link href="/profile" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group">
              <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-medium uppercase tracking-wider">Profile</span>
            </Link>
            <Link href="/wishlist" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group relative">
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-medium uppercase tracking-wider">Wishlist</span>
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </Link>
            <Link href="/cart" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group relative">
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-medium uppercase tracking-wider">Cart</span>
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </Link>
            
            {/* Theme Toggle */}
            <div className="w-px h-6 bg-border mx-1"></div>
            <ThemeToggle />
          </div>
        </div>
        
      </div>
    </header>
  );
}
