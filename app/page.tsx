"use client";

import React from 'react';
import LeftSidebar from '@/components/ui/LeftSidebar';
import RightSidebar from '@/components/ui/RightSidebar';
import { Share2, Heart, MessageCircle, Repeat2, Bookmark, ShoppingCart, Image as ImageIcon, Video, FileText, Globe2 } from 'lucide-react';

const DUMMY_FEED = [
  { id: 1, user: 'SneakerHeadz', handle: '@sneakerheadz', time: '2h', content: 'Just dropped the new Air Max collection! Limited stock available. 👟🔥', likes: 124, comments: 12, retweets: 4 },
  { id: 2, user: 'TechHaven Official', handle: '@techhaven', time: '4h', content: 'Unboxing the latest smartphone series tomorrow at 10 AM EST. Who is tuning in? 📱👀', likes: 892, comments: 145, retweets: 56 },
  { id: 3, user: 'Glamour Beauty', handle: '@glamour', time: '5h', content: 'Our summer skincare routine bundle is finally here! Get 20% off using code SUMMER20. ☀️🧴', likes: 432, comments: 23, retweets: 18 },
  { id: 4, user: 'Alex Johnson', handle: '@alexj', time: '8h', content: 'Just bought my first mechanical keyboard from @techhaven and the switches feel amazing! ⌨️💯', likes: 56, comments: 2, retweets: 1 },
  { id: 5, user: 'Home Essentials', handle: '@homeessentials', time: '12h', content: 'Transform your living space with our new minimalist furniture collection. Shop now link in bio! 🛋️✨', likes: 321, comments: 45, retweets: 22 },
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
        <div className="p-4 border-b border-border flex gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0 mt-1"></div>
          <div className="flex-1">
            <textarea
              placeholder="What are you selling today?"
              className="w-full bg-transparent border-none resize-none focus:outline-none text-lg placeholder:text-muted-foreground placeholder:font-normal py-2 overflow-hidden"
              rows={2}
              onInput={(e) => {
                e.currentTarget.style.height = 'auto';
                e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
              }}
            ></textarea>

            {/* Everyone can reply */}
            <div className="pb-3 border-b border-border/50">
              <button className="flex items-center gap-1.5 text-primary text-sm font-medium hover:bg-primary/10 px-3 py-0.5 rounded-full transition-colors -ml-3">
                <Globe2 className="w-4 h-4" />
                <span>Everyone can resell</span>
              </button>
            </div>

            <div className="flex items-center justify-between mt-3">
              {/* Action Icons */}
              <div className="flex items-center gap-1 text-primary">
                <button className="p-2 rounded-full hover:bg-primary/10 transition-colors" aria-label="Image">
                  <ImageIcon className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-primary/10 transition-colors" aria-label="Video">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-primary/10 transition-colors" aria-label="Document">
                  <FileText className="w-5 h-5" />
                </button>
              </div>

              <button disabled className="px-5 py-1.5 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 disabled:opacity-50 transition-colors">
                Post
              </button>
            </div>
          </div>
        </div>

        {/* Feed List */}
        <div className="flex flex-col">
          {DUMMY_FEED.map((post) => (
            <article key={post.id} className="p-4 border-b border-border hover:bg-muted/10 transition-colors cursor-pointer flex gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center font-bold text-secondary">
                {post.user[0]}
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-foreground hover:underline">{post.user}</span>
                  <span className="text-muted-foreground text-sm">{post.handle}</span>
                  <span className="text-muted-foreground text-sm">· {post.time}</span>
                </div>
                <p className="mt-1 text-foreground text-[15px]">{post.content}</p>

                {/* Actions */}
                <div className="flex items-center justify-between mt-3 text-muted-foreground max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500 transition-colors group">
                    <div className="p-1.5 rounded-full group-hover:bg-blue-500/10"><MessageCircle className="w-4 h-4" /></div>
                    <span className="text-xs">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500 transition-colors group">
                    <div className="p-1.5 rounded-full group-hover:bg-green-500/10"><Repeat2 className="w-4 h-4" /></div>
                    <span className="text-xs">{post.retweets}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-secondary transition-colors group">
                    <div className="p-1.5 rounded-full group-hover:bg-secondary/10"><Heart className="w-4 h-4" /></div>
                    <span className="text-xs">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors group">
                    <div className="p-1.5 rounded-full group-hover:bg-primary/10"><ShoppingCart className="w-4 h-4" /></div>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors group">
                    <div className="p-1.5 rounded-full group-hover:bg-primary/10"><Bookmark className="w-4 h-4" /></div>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors group">
                    <div className="p-1.5 rounded-full group-hover:bg-primary/10"><Share2 className="w-4 h-4" /></div>
                  </button>
                </div>
              </div>
            </article>
          ))}

          {/* Duplicate feed for scrolling effect */}
          {DUMMY_FEED.map((post) => (
            <article key={`${post.id}-dup`} className="p-4 border-b border-border hover:bg-muted/10 transition-colors cursor-pointer flex gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center font-bold text-secondary">
                {post.user[0]}
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-foreground hover:underline">{post.user}</span>
                  <span className="text-muted-foreground text-sm">{post.handle}</span>
                  <span className="text-muted-foreground text-sm">· {post.time}</span>
                </div>
                <p className="mt-1 text-foreground text-[15px]">{post.content}</p>

                {/* Actions */}
                <div className="flex items-center justify-between mt-3 text-muted-foreground max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500 transition-colors group">
                    <div className="p-1.5 rounded-full group-hover:bg-blue-500/10"><MessageCircle className="w-4 h-4" /></div>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500 transition-colors group">
                    <div className="p-1.5 rounded-full group-hover:bg-green-500/10"><Repeat2 className="w-4 h-4" /></div>
                  </button>
                  <button className="flex items-center gap-1 hover:text-secondary transition-colors group">
                    <div className="p-1.5 rounded-full group-hover:bg-secondary/10"><Heart className="w-4 h-4" /></div>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors group">
                    <div className="p-1.5 rounded-full group-hover:bg-primary/10"><ShoppingCart className="w-4 h-4" /></div>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors group">
                    <div className="p-1.5 rounded-full group-hover:bg-primary/10"><Bookmark className="w-4 h-4" /></div>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors group">
                    <div className="p-1.5 rounded-full group-hover:bg-primary/10"><Share2 className="w-4 h-4" /></div>
                  </button>
                </div>
              </div>
            </article>
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
