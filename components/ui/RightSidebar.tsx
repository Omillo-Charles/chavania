"use client";

import React from 'react';
import Link from 'next/link';
import { Store, Tag, ChevronRight } from 'lucide-react';
import VerificationCheck from '../features/verificationCheck';

const POPULAR_STORES = [
  { name: 'TechHaven Official', handle: 'techhaven', followers: '45.1k', verified: 'blue' as const },
  { name: 'SneakerHeadz',       handle: 'sneakerheadz', followers: '12.4k', verified: 'blue' as const },
  { name: 'Home Essentials',    handle: 'homeessentials', followers: '8.2k',  verified: 'blue' as const },
  { name: 'Glamour Beauty',     handle: 'glamour', followers: '3.9k',  verified: 'blue' as const },
];

const POPULAR_BRANDS = [
  { name: 'Apple', items: '1,204 items', verified: 'gold' as const },
  { name: 'Nike', items: '842 items', verified: 'gold' as const },
  { name: 'Samsung', items: '931 items', verified: 'gold' as const },
  { name: 'Sony', items: '412 items', verified: 'gold' as const },
];


export default function RightSidebar() {
  return (
    <aside className="w-full h-full overflow-y-auto hide-scrollbar border-l border-border bg-background p-4 space-y-6">
      
      {/* Popular Stores Section */}
      <div className="bg-muted/30 rounded-2xl p-4 border border-border/50">
        <h2 className="text-lg font-bold text-foreground mb-4 font-ubuntu">Popular Stores</h2>
        <ul className="space-y-4">
          {POPULAR_STORES.map((store, idx) => (
            <li key={idx}>
              <Link
                href={`/store/${store.handle}`}
                className="flex items-center justify-between group cursor-pointer hover:bg-muted/50 rounded-xl p-1.5 -mx-1.5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Store className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground flex items-center gap-1">
                      {store.name}
                      {store.verified && <VerificationCheck type={store.verified} className="w-4 h-4" />}
                    </span>
                    <span className="text-xs text-muted-foreground">{store.followers} followers</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
        <button className="w-full mt-4 py-2 text-sm text-primary hover:bg-primary/10 rounded-full transition-colors font-medium">
          Show more
        </button>
      </div>

      {/* Popular Brands Section */}
      <div className="bg-muted/30 rounded-2xl p-4 border border-border/50">
        <h2 className="text-lg font-bold text-foreground mb-4 font-ubuntu">Trending Brands</h2>
        <ul className="space-y-4">
          {POPULAR_BRANDS.map((brand, idx) => (
            <li key={idx} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <Tag className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground flex items-center gap-1">
                    {brand.name}
                    {brand.verified && <VerificationCheck type={brand.verified} className="w-4 h-4" />}
                  </span>
                  <span className="text-xs text-muted-foreground">{brand.items}</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </li>
          ))}
        </ul>
        <button className="w-full mt-4 py-2 text-sm text-primary hover:bg-primary/10 rounded-full transition-colors font-medium">
          Show more
        </button>
      </div>


      {/* Footer links inside right sidebar (like X.com) */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 px-2 text-[11px] text-muted-foreground">
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Cookie Policy</a>
        <a href="#" className="hover:underline">Accessibility</a>
        <a href="#" className="hover:underline">Ads info</a>
        <span>© 2026 Chavania Inc.</span>
      </div>

    </aside>
  );
}
