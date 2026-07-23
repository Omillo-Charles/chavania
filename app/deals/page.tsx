"use client";

import React from 'react';
import LeftSidebar from '@/components/ui/LeftSidebar';
import RightSidebar from '@/components/ui/RightSidebar';
import ProductDisplay, { PostData } from '@/components/features/ProductDisplay';

const DEALS_FEED: PostData[] = [
  {
    id: 101,
    user: 'TechHaven Official',
    handle: '@techhaven',
    time: '30m',
    content: '🔥 FLASH SALE — 40% off all laptops today only! Use code TECH40 at checkout. Limited units, grab yours before they\'re gone. ⚡',
    likes: 1240,
    comments: 87,
    retweets: 312,
    verified: true,
    price: 'KES 54,999',
    media: [{ type: 'image', url: '/categories/computers.jpeg' }],
  },
  {
    id: 102,
    user: 'SneakerHeadz',
    handle: '@sneakerheadz',
    time: '1h',
    content: 'Clearance drop 🧹 Up to 60% off selected Air Max, Jordan, and New Balance. Sizes are going fast — shop the sale now! 👟',
    likes: 876,
    comments: 54,
    retweets: 198,
    verified: true,
    price: 'KES 6,200',
    media: [{ type: 'image', url: '/categories/clothing.jpeg' }],
  },
  {
    id: 103,
    user: 'Glamour Beauty',
    handle: '@glamour',
    time: '2h',
    content: 'Buy 2, Get 1 FREE on all skincare bundles this weekend ✨ No code needed — discount applied at cart. Ends Sunday midnight 🌙',
    likes: 543,
    comments: 32,
    retweets: 121,
    price: 'KES 2,800',
    media: [{ type: 'image', url: '/categories/beauty.jpeg' }],
  },
  {
    id: 104,
    user: 'Home Essentials',
    handle: '@homeessentials',
    time: '3h',
    content: 'Mid-year furniture sale is LIVE 🛋️ Up to 35% off sofas, beds & dining sets. Free delivery on orders above KES 20,000. Shop now →',
    likes: 421,
    comments: 29,
    retweets: 88,
    verified: true,
    price: 'KES 29,250',
    media: [{ type: 'image', url: '/categories/homenkitchen.jpeg' }],
  },
  {
    id: 105,
    user: 'TechHaven Official',
    handle: '@techhaven',
    time: '5h',
    content: '📱 Smartphone bundle deal — buy any flagship phone and get a FREE wireless charger + screen protector worth KES 3,500. This week only.',
    likes: 988,
    comments: 76,
    retweets: 245,
    verified: true,
    price: 'KES 21,999',
    media: [{ type: 'image', url: '/categories/phones.jpeg' }],
  },
  {
    id: 106,
    user: 'Glamour Beauty',
    handle: '@glamour',
    time: '7h',
    content: 'Our biggest perfume sale yet 🌸 Premium fragrances starting at KES 1,500. Use code SCENT20 for an extra 20% off. While stocks last!',
    likes: 654,
    comments: 41,
    retweets: 103,
    price: 'KES 1,500',
    media: [{ type: 'image', url: '/categories/beauty.jpeg' }],
  },
];

export default function DealsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto flex lg:grid lg:grid-cols-4 gap-0 lg:gap-6 min-h-[calc(100vh-104px)] relative">

      {/* Left Sidebar (Sticky) */}
      <div className="hidden lg:block lg:col-span-1 h-[calc(100vh-104px)] sticky top-0 lg:top-[104px]">
        <LeftSidebar />
      </div>

      {/* Main Feed (Scrollable) */}
      <div className="w-full lg:col-span-2 border-x border-border min-h-[150vh]">

        {/* Header */}
        <div className="sticky top-0 lg:top-[104px] z-10 bg-background/80 backdrop-blur-md border-b border-border p-4">
          <h1 className="text-xl font-bold font-ubuntu leading-tight">
            Hot Deals &amp; Offers
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Flash sales, promo codes &amp; limited-time discounts
          </p>
        </div>

        {/* Feed List */}
        <div className="flex flex-col">
          {DEALS_FEED.map((post) => (
            <ProductDisplay key={post.id} post={post} />
          ))}

          {/* Duplicate feed for scrolling effect */}
          {DEALS_FEED.map((post) => (
            <ProductDisplay key={`${post.id}-dup`} post={post} />
          ))}
        </div>
      </div>

      {/* Right Sidebar (Sticky) */}
      <div className="hidden lg:block lg:col-span-1 h-[calc(100vh-104px)] sticky top-0 lg:top-[104px]">
        <RightSidebar />
      </div>

    </div>
  );
}
