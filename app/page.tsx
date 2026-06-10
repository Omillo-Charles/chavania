"use client";

import React from 'react';
import LeftSidebar from '@/components/ui/LeftSidebar';
import RightSidebar from '@/components/ui/RightSidebar';
import ProductDisplay, { PostData } from '@/components/features/ProductDisplay';
import ProductPostInput from '@/components/features/ProductPostInput';

const DUMMY_FEED: PostData[] = [
  {
    id: 1,
    user: 'SneakerHeadz',
    handle: '@sneakerheadz',
    time: '2h',
    content: 'Just dropped the new Air Max collection! Limited stock available. 👟🔥',
    likes: 124,
    comments: 12,
    retweets: 4,
    verified: true,
    price: 'KES 15,500',
    media: [
      { type: 'image', url: '/categories/clothing.jpeg' }
    ]
  },
  {
    id: 2,
    user: 'TechHaven Official',
    handle: '@techhaven',
    time: '4h',
    content: 'Unboxing the latest smartphone series tomorrow at 10 AM EST. Who is tuning in? 📱👀',
    likes: 892,
    comments: 145,
    retweets: 56,
    verified: true,
    price: 'KES 24,999',
    media: [
      { type: 'image', url: '/categories/phones.jpeg' }
    ]
  },
  {
    id: 3,
    user: 'Glamour Beauty',
    handle: '@glamour',
    time: '5h',
    content: 'Our summer skincare routine bundle is finally here! Get 20% off using code SUMMER20. ☀️🧴',
    likes: 432,
    comments: 23,
    retweets: 18,
    price: 'KES 4,200',
    media: [
      { type: 'image', url: '/categories/beauty.jpeg' }
    ]
  },
  {
    id: 4,
    user: 'Alex Johnson',
    handle: '@alexj',
    time: '8h',
    content: 'Just bought my first mechanical keyboard from @techhaven and the switches feel amazing! ⌨️💯',
    likes: 56,
    comments: 2,
    retweets: 1,
    price: 'KES 8,500',
    media: [
      { type: 'image', url: '/categories/computers.jpeg' }
    ]
  },
  {
    id: 5,
    user: 'Home Essentials',
    handle: '@homeessentials',
    time: '12h',
    content: 'Transform your living space with our new minimalist furniture collection. Shop now link in bio! 🛋️✨',
    likes: 321,
    comments: 45,
    retweets: 22,
    verified: true,
    price: 'KES 45,000',
    media: [
      { type: 'image', url: '/categories/homenkitchen.jpeg' }
    ]
  },
];

export default function Home() {
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
          <h1 className="text-xl font-bold font-ubuntu">For you</h1>
        </div>

        {/* Post Input (X.com style) */}
        <ProductPostInput />

        {/* Feed List */}
        <div className="flex flex-col">
          {DUMMY_FEED.map((post) => (
            <ProductDisplay key={post.id} post={post} />
          ))}

          {/* Duplicate feed for scrolling effect */}
          {DUMMY_FEED.map((post) => (
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
