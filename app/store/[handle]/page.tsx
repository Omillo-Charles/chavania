"use client";

import React, { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft, MapPin, Globe, Calendar, Star, Package,
  Users, ShoppingBag, MoreHorizontal, Share2, MessageSquare,
  Check, VolumeX, Volume2, Ban, Flag, BadgeCheck, Heart,
  ShoppingCart, Repeat2, LayoutGrid, MessageCircle, Info
} from 'lucide-react';
import VerificationCheck from '@/components/features/verificationCheck';
import ProductDisplay from '@/components/features/ProductDisplay';
import LeftSidebar from '@/components/ui/LeftSidebar';
import RightSidebar from '@/components/ui/RightSidebar';

//Mock store data
const STORE_DATABASE: Record<string, StoreData> = {
  sneakerheadz: {
    handle: '@sneakerheadz',
    name: 'SneakerHeadz',
    verified: true,
    verifiedType: 'blue' as const,
    bio: 'Kenya\'s #1 destination for authentic sneakers & streetwear. Limited drops every Friday. 🔥👟 DMs open for bulk orders.',
    location: 'Nairobi, Kenya',
    website: 'sneakerheadz.co.ke',
    joined: 'Joined March 2023',
    banner: '/categories/clothing.jpeg',
    followersCount: 12400,
    followingCount: 340,
    productsCount: 84,
    salesCount: 2100,
    rating: 4.8,
    reviewsCount: 638,
    products: [
      { id: '1', title: 'Air Max Collection', price: 'KES 15,500', image: '/categories/clothing.jpeg', likes: 124, comments: 12 },
      { id: '6', title: 'Jordan Retro IV', price: 'KES 22,000', image: '/categories/clothing.jpeg', likes: 89, comments: 7 },
      { id: '7', title: 'Adidas Ultraboost', price: 'KES 18,500', image: '/categories/clothing.jpeg', likes: 204, comments: 31 },
      { id: '8', title: 'Nike Dunk Low', price: 'KES 14,000', image: '/categories/clothing.jpeg', likes: 57, comments: 4 },
      { id: '9', title: 'New Balance 550', price: 'KES 12,500', image: '/categories/clothing.jpeg', likes: 143, comments: 18 },
      { id: '10', title: 'Converse Chuck 70', price: 'KES 8,500', image: '/categories/clothing.jpeg', likes: 76, comments: 9 },
    ],
    reviews: [
      { id: 1, user: 'Mercy W.', handle: '@mercyw', rating: 5, text: 'Legit kicks, fast delivery. Will buy again!', time: '2d' },
      { id: 2, user: 'Kevin K.', handle: '@kevink', rating: 4, text: 'Great selection, slightly pricey but worth it.', time: '5d' },
      { id: 3, user: 'Anita O.', handle: '@anitao', rating: 5, text: 'Super authentic. The packaging was fire too.', time: '1w' },
      { id: 4, user: 'Brian M.', handle: '@brianm', rating: 5, text: 'Ordered the Jordan 4s, arrived in 2 days!', time: '2w' },
    ],
  },
  techhaven: {
    handle: '@techhaven',
    name: 'TechHaven Official',
    verified: true,
    verifiedType: 'gold' as const,
    bio: 'Your premium tech destination. Phones, laptops, accessories & more. Official authorized dealer. 📱💻',
    location: 'Westlands, Nairobi',
    website: 'techhaven.co.ke',
    joined: 'Joined January 2022',
    banner: '/categories/phones.jpeg',
    followersCount: 45100,
    followingCount: 120,
    productsCount: 312,
    salesCount: 15800,
    rating: 4.9,
    reviewsCount: 2841,
    products: [
      { id: '2', title: 'Latest Smartphone Series', price: 'KES 24,999', image: '/categories/phones.jpeg', likes: 892, comments: 145 },
      { id: '11', title: 'MacBook Pro M3', price: 'KES 189,000', image: '/categories/computers.jpeg', likes: 421, comments: 67 },
      { id: '12', title: 'iPad Pro 13"', price: 'KES 94,000', image: '/categories/electronics.jpeg', likes: 308, comments: 42 },
      { id: '13', title: 'AirPods Pro Gen 3', price: 'KES 28,500', image: '/categories/electronics.jpeg', likes: 512, comments: 88 },
    ],
    reviews: [
      { id: 1, user: 'Daniel M.', handle: '@danm', rating: 5, text: 'The display on this new series is absolutely stunning!', time: '1d' },
      { id: 2, user: 'Sarah L.', handle: '@sarahl', rating: 5, text: 'Battery life easily lasts 2 days. Best upgrade in years.', time: '3d' },
    ],
  },
};

type StoreData = {
  handle: string; name: string; verified: boolean; verifiedType: 'blue' | 'gold';
  bio: string; location: string; website: string; joined: string; banner: string;
  followersCount: number; followingCount: number; productsCount: number; salesCount: number;
  rating: number; reviewsCount: number;
  products: { id: string; title: string; price: string; image: string; likes: number; comments: number }[];
  reviews: { id: number; user: string; handle: string; rating: number; text: string; time: string }[];
};

const DEFAULT_STORE: StoreData = STORE_DATABASE['sneakerheadz'];

type Tab = 'products' | 'reviews' | 'about';

const formatCount = (n: number) => n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n.toString();

//Component
export default function StoreProfilePage({ params }: { params: Promise<{ handle: string }> }) {
  const router = useRouter();
  const { handle } = use(params);
  const store = STORE_DATABASE[handle.toLowerCase()] || DEFAULT_STORE;

  const [activeTab, setActiveTab] = useState<Tab>('products');
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(store.followersCount);
  const [isMuted, setIsMuted] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleFollow = () => {
    setIsFollowing((f) => !f);
    setFollowersCount((c) => isFollowing ? c - 1 : c + 1);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setToastMessage('Store link copied!');
    setIsMenuOpen(false);
    setTimeout(() => setToastMessage(null), 3000);
  };

  if (isBlocked) return (
    <div className="w-full max-w-7xl mx-auto flex lg:grid lg:grid-cols-4 min-h-[calc(100vh-104px)]">
      <div className="hidden lg:block lg:col-span-1 h-[calc(100vh-104px)] sticky top-[104px]"><LeftSidebar /></div>
      <div className="w-full lg:col-span-2 border-x border-border flex flex-col items-center justify-center gap-4 p-10 text-center">
        <Ban className="w-12 h-12 text-secondary" />
        <h2 className="text-xl font-bold font-ubuntu">You blocked {store.handle}</h2>
        <p className="text-sm text-muted-foreground max-w-xs">You won't see any listings or activity from this store.</p>
        <button onClick={() => setIsBlocked(false)} className="mt-2 px-6 py-2 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-all">Unblock Store</button>
      </div>
      <div className="hidden lg:block lg:col-span-1 h-[calc(100vh-104px)] sticky top-[104px]"><RightSidebar /></div>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto flex lg:grid lg:grid-cols-4 min-h-[calc(100vh-104px)] relative">
      {/* Left Sidebar */}
      <div className="hidden lg:block lg:col-span-1 h-[calc(100vh-104px)] sticky top-[104px]"><LeftSidebar /></div>

      {/* Main Column */}
      <div className="w-full lg:col-span-2 border-x border-border pb-24">

        {/* ── Back header ── */}
        <div className="flex items-center gap-4 p-4 border-b border-border">
          <button onClick={() => router.back()} className="p-2 rounded-full hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-bold font-ubuntu leading-tight">{store.name}</h1>
            <p className="text-xs text-muted-foreground">{formatCount(store.productsCount)} products</p>
          </div>
        </div>

        {/* ── Banner ── */}
        <div className="relative">
          <div className="h-40 md:h-52 w-full overflow-hidden bg-muted">
            <img src={store.banner} alt="Store banner" className="w-full h-full object-cover" />
          </div>

          {/* Avatar overlapping banner */}
          <div className="absolute -bottom-14 left-4">
            <div className="w-24 h-24 rounded-full border-4 border-background bg-secondary/20 flex items-center justify-center font-black text-secondary text-3xl shadow-xl">
              {store.name[0]}
            </div>
          </div>

          {/* Action buttons top-right */}
          <div className="absolute bottom-3 right-4 flex items-center gap-2">
            <button onClick={handleShare} className="p-2 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-muted transition-all" title="Share">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-muted transition-all" title="Message">
              <MessageSquare className="w-4 h-4" />
            </button>

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-muted transition-all"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-background border border-border rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button onClick={() => { setIsMuted(!isMuted); setIsMenuOpen(false); }} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted transition-colors text-left">
                    {isMuted ? <><Volume2 className="w-4 h-4 text-primary" /><span className="font-medium">Unmute Store</span></> : <><VolumeX className="w-4 h-4 text-muted-foreground" /><span className="font-medium">Mute Store</span></>}
                  </button>
                  <button onClick={() => { setIsBlocked(true); setIsMenuOpen(false); }} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-secondary hover:bg-secondary/5 transition-colors text-left">
                    <Ban className="w-4 h-4" /><span className="font-medium">Block Store</span>
                  </button>
                  <div className="h-px bg-border my-1 mx-2" />
                  <button onClick={() => setIsMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-secondary hover:bg-secondary/5 transition-colors text-left">
                    <Flag className="w-4 h-4" /><span className="font-medium">Report Store</span>
                  </button>
                </div>
              )}
            </div>

            {/* Follow button */}
            <button
              onClick={handleFollow}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all border shadow-sm ${isFollowing
                  ? 'bg-transparent border-border text-foreground hover:bg-secondary/10 hover:text-secondary hover:border-secondary/30'
                  : 'bg-foreground text-background border-transparent hover:opacity-90'
                }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>

        {/* ── Store Info ── */}
        <div className="pt-16 px-4 pb-4 space-y-3">
          {/* Name & verification */}
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl font-black font-ubuntu text-foreground">{store.name}</h2>
            {store.verified && <VerificationCheck type={store.verifiedType} className="w-5 h-5" />}
            {isMuted && (
              <span className="text-[10px] bg-secondary/10 text-secondary font-bold px-2 py-0.5 rounded-md flex items-center gap-0.5">
                <VolumeX className="w-3 h-3" /> Muted
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{store.handle}</p>

          {/* Bio */}
          <p className="text-sm text-foreground leading-relaxed">{store.bio}</p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{store.location}</span>
            <span className="flex items-center gap-1 text-primary"><Globe className="w-4 h-4" />{store.website}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{store.joined}</span>
          </div>

          {/* Rating badge */}
          <div className="flex items-center gap-1.5 text-sm">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className={`w-4 h-4 ${i <= Math.round(store.rating) ? 'fill-amber-400 text-amber-400' : 'fill-border text-border'}`} />
              ))}
            </div>
            <span className="font-bold text-foreground">{store.rating}</span>
            <span className="text-muted-foreground">({formatCount(store.reviewsCount)} reviews)</span>
          </div>

          {/* Stats row */}
          <div className="flex gap-6 text-sm pt-1">
            <button onClick={handleFollow} className="hover:underline">
              <strong className="text-foreground">{formatCount(followersCount)}</strong>
              <span className="text-muted-foreground ml-1">Followers</span>
            </button>
            <span>
              <strong className="text-foreground">{formatCount(store.followingCount)}</strong>
              <span className="text-muted-foreground ml-1">Following</span>
            </span>
            <span>
              <strong className="text-foreground">{formatCount(store.salesCount)}</strong>
              <span className="text-muted-foreground ml-1">Sales</span>
            </span>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="flex border-b border-border">
          {([
            { key: 'products', label: 'Products', icon: LayoutGrid },
            { key: 'reviews', label: 'Reviews', icon: Star },
            { key: 'about', label: 'About', icon: Info },
          ] as { key: Tab; label: string; icon: React.ElementType }[]).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold transition-colors relative ${activeTab === key ? 'text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
            >
              <Icon className="w-4 h-4" />
              {label}
              {activeTab === key && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* ── Tab Content ── */}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="flex flex-col">
            {store.products.map((p) => (
              <ProductDisplay
                key={p.id}
                post={{
                  id: p.id,
                  user: store.name,
                  handle: store.handle,
                  time: '·',
                  content: p.title,
                  likes: p.likes,
                  comments: p.comments,
                  retweets: 0,
                  verified: store.verified,
                  verifiedType: store.verifiedType,
                  price: p.price,
                  media: [{ type: 'image', url: p.image }],
                }}
              />
            ))}
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="divide-y divide-border">
            {/* Ratings overview */}
            <div className="p-5 flex items-center gap-6 bg-muted/20">
              <div className="text-center shrink-0">
                <p className="text-5xl font-black font-ubuntu">{store.rating}</p>
                <div className="flex items-center gap-0.5 justify-center mt-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className={`w-4 h-4 ${i <= Math.round(store.rating) ? 'fill-amber-400 text-amber-400' : 'fill-border text-border'}`} />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{formatCount(store.reviewsCount)} reviews</p>
              </div>
              <div className="flex-1 space-y-1.5">
                {[{ s: 5, w: '82%' }, { s: 4, w: '12%' }, { s: 3, w: '4%' }, { s: 2, w: '2%' }, { s: 1, w: '0%' }].map(r => (
                  <div key={r.s} className="flex items-center gap-2 text-xs">
                    <span className="w-2 text-muted-foreground">{r.s}</span>
                    <Star className="w-3 h-3 fill-muted-foreground text-muted-foreground shrink-0" />
                    <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: r.w }} />
                    </div>
                    <span className="w-7 text-right text-muted-foreground">{r.w}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual reviews */}
            {store.reviews.map((r) => (
              <div key={r.id} className="flex gap-3 p-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm shrink-0">{r.user[0]}</div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-foreground">{r.user}</span>
                      <span className="text-xs text-muted-foreground">{r.handle}</span>
                      <span className="text-muted-foreground text-xs">· {r.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i <= r.rating ? 'fill-amber-400 text-amber-400' : 'fill-border text-border'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{r.text}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                    <button className="flex items-center gap-1 hover:text-secondary transition-colors"><Heart className="w-3.5 h-3.5" /> 0</button>
                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors"><MessageCircle className="w-3.5 h-3.5" /> Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="p-5 space-y-6">
            {/* About card */}
            <div className="bg-muted/30 rounded-3xl p-5 border border-border/60 space-y-4">
              <h3 className="font-bold font-ubuntu text-foreground">About {store.name}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{store.bio}</p>
              <div className="space-y-2.5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" />{store.location}</div>
                <div className="flex items-center gap-2 text-primary"><Globe className="w-4 h-4 shrink-0" />{store.website}</div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 shrink-0" />{store.joined}</div>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Total Products', value: store.productsCount, icon: Package, color: 'text-primary bg-primary/10' },
                { label: 'Total Sales', value: formatCount(store.salesCount), icon: ShoppingBag, color: 'text-secondary bg-secondary/10' },
                { label: 'Followers', value: formatCount(store.followersCount), icon: Users, color: 'text-emerald-500 bg-emerald-500/10' },
                { label: 'Avg. Rating', value: `${store.rating} ★`, icon: Star, color: 'text-amber-500 bg-amber-500/10' },
              ].map((stat) => (
                <div key={stat.label} className="bg-muted/30 rounded-2xl p-4 border border-border/60 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-foreground leading-tight">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="bg-muted/30 rounded-3xl p-5 border border-border/60 space-y-3">
              <h3 className="font-bold font-ubuntu text-foreground">Store Badges</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Verified Merchant', color: 'bg-blue-500/10 text-blue-500', icon: BadgeCheck },
                  { label: 'Top Seller', color: 'bg-amber-500/10 text-amber-500', icon: Star },
                  { label: 'Fast Shipper', color: 'bg-emerald-500/10 text-emerald-500', icon: Check },
                  { label: '2+ Years Active', color: 'bg-primary/10 text-primary', icon: Calendar },
                ].map((b) => (
                  <span key={b.label} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${b.color}`}>
                    <b.icon className="w-3.5 h-3.5" />{b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block lg:col-span-1 h-[calc(100vh-104px)] sticky top-[104px]"><RightSidebar /></div>

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[9999] bg-foreground text-background px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-in fade-in slide-in-from-bottom-3 duration-300">
          <Check className="w-4 h-4 text-emerald-500" />
          {toastMessage}
        </div>
      )}
    </div>
  );
}
