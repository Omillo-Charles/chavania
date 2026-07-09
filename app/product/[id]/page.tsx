"use client";

import React, { use, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  MessageCircle,
  Repeat2,
  Heart,
  ShoppingCart,
  Bookmark,
  Share2,
  MoreHorizontal,
  Star,
  Check,
  UserPlus,
  UserMinus,
  VolumeX,
  Volume2,
  Ban,
  Flag,
  Globe2,
  ImageIcon,
  Video,
  FileText
} from 'lucide-react';
import LeftSidebar from '@/components/ui/LeftSidebar';
import RightSidebar from '@/components/ui/RightSidebar';
import VerificationCheck from '@/components/features/verificationCheck';

// Mock database matching homepage
const PRODUCT_DATABASE = [
  {
    id: '1',
    user: 'SneakerHeadz',
    handle: '@sneakerheadz',
    time: '2h',
    content: 'Just dropped the new Air Max collection! Limited stock available. 👟🔥',
    likes: 124,
    comments: 12,
    retweets: 4,
    verified: true,
    price: 'KES 15,500',
    media: '/categories/clothing.jpeg',
    stock: 8,
    category: 'Clothing, Shoes & Jewelry',
    rating: 4.8,
    reviewsCount: 38,
    views: '14.5K',
    date: '11:24 AM · Jul 9, 2026',
    reviews: [
      { id: 1, user: 'Mercy W.', handle: '@mercyw', rating: 5, comment: 'Absolutely love these! Super comfortable and the design is fire.', time: '1h' },
      { id: 2, user: 'Kevin K.', handle: '@kevink', rating: 4, comment: 'Good value for money. Highly recommended.', time: '4h' },
      { id: 3, user: 'Anita O.', handle: '@anitao', rating: 5, comment: 'Came exactly as described, prompt shipping too!', time: '1d' }
    ]
  },
  {
    id: '2',
    user: 'TechHaven Official',
    handle: '@techhaven',
    time: '4h',
    content: 'Unboxing the latest smartphone series tomorrow at 10 AM EST. Who is tuning in? 📱👀',
    likes: 892,
    comments: 145,
    retweets: 56,
    verified: true,
    price: 'KES 24,999',
    media: '/categories/phones.jpeg',
    stock: 15,
    category: 'Cell Phones',
    rating: 4.9,
    reviewsCount: 112,
    views: '84.2K',
    date: '9:15 AM · Jul 9, 2026',
    reviews: [
      { id: 1, user: 'Daniel M.', handle: '@danm', rating: 5, comment: 'The display on this new series is absolutely stunning!', time: '2h' },
      { id: 2, user: 'Sarah L.', handle: '@sarahl', rating: 5, comment: 'Battery life easily lasts 2 days. Best upgrade in years.', time: '3h' }
    ]
  },
  {
    id: '3',
    user: 'Glamour Beauty',
    handle: '@glamour',
    time: '5h',
    content: 'Our summer skincare routine bundle is finally here! Get 20% off using code SUMMER20. ☀️🧴',
    likes: 432,
    comments: 23,
    retweets: 18,
    verified: false,
    price: 'KES 4,200',
    media: '/categories/beauty.jpeg',
    stock: 24,
    category: 'Beauty & Personal Care',
    rating: 4.6,
    reviewsCount: 54,
    views: '12.8K',
    date: '8:42 AM · Jul 9, 2026',
    reviews: [
      { id: 1, user: 'Evelyn P.', handle: '@evelyn', rating: 5, comment: 'Makes my skin feel hydrated all day. Buying another set immediately.', time: '4h' }
    ]
  },
  {
    id: '4',
    user: 'Alex Johnson',
    handle: '@alexj',
    time: '8h',
    content: 'Just bought my first mechanical keyboard from @techhaven and the switches feel amazing! ⌨️💯',
    likes: 56,
    comments: 2,
    retweets: 1,
    verified: false,
    price: 'KES 8,500',
    media: '/categories/computers.jpeg',
    stock: 3,
    category: 'Computers',
    rating: 4.7,
    reviewsCount: 9,
    views: '3.1K',
    date: '5:10 AM · Jul 9, 2026',
    reviews: [
      { id: 1, user: 'James T.', handle: '@jamest', rating: 5, comment: 'Switches feel super crisp. Great build quality.', time: '6h' }
    ]
  },
  {
    id: '5',
    user: 'Home Essentials',
    handle: '@homeessentials',
    time: '12h',
    content: 'Transform your living space with our new minimalist furniture collection. Shop now link in bio! 🛋️✨',
    likes: 321,
    comments: 45,
    retweets: 22,
    verified: true,
    price: 'KES 45,000',
    media: '/categories/homenkitchen.jpeg',
    stock: 5,
    category: 'Home & Kitchen',
    rating: 4.5,
    reviewsCount: 16,
    views: '24.9K',
    date: '1:12 AM · Jul 9, 2026',
    reviews: [
      { id: 1, user: 'Grace K.', handle: '@gracek', rating: 4, comment: 'Delivery was slightly delayed, but the sofa is top notch.', time: '8h' }
    ]
  }
];

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const productId = unwrappedParams.id;

  // Find product by id, default to first product if not found
  const product = PRODUCT_DATABASE.find((p) => p.id === productId) || PRODUCT_DATABASE[0];

  // Component States
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(product.likes);
  const [isReposted, setIsReposted] = useState(false);
  const [repostsCount, setRepostsCount] = useState(product.retweets);
  const [commentsCount, setCommentsCount] = useState(product.comments);

  // New Comment Input
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(product.reviews);

  // Rating States
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [userReviewText, setUserReviewText] = useState('');

  // General Interactivity states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  const handleRepost = () => {
    if (isReposted) {
      setIsReposted(false);
      setRepostsCount((prev) => prev - 1);
    } else {
      setIsReposted(true);
      setRepostsCount((prev) => prev + 1);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setToastMessage("Product link copied to clipboard!");
    setIsMenuOpen(false);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newReply = {
      id: Date.now(),
      user: 'Anonymous Buyer',
      handle: '@buyer',
      rating: 5,
      comment: newComment,
      time: 'Just now'
    };

    setComments([newReply, ...comments]);
    setCommentsCount((prev) => prev + 1);
    setNewComment('');
    setToastMessage("Comment posted successfully!");
    setTimeout(() => setToastMessage(null), 3000);
  };

  if (isBlocked) {
    return (
      <div className="w-full max-w-7xl mx-auto flex lg:grid lg:grid-cols-4 min-h-[calc(100vh-104px)] relative bg-background">
        <div className="hidden lg:block lg:col-span-1 h-[calc(100vh-104px)] sticky top-[104px]">
          <LeftSidebar />
        </div>
        <div className="w-full lg:col-span-2 border-x border-border min-h-[100vh] p-8 flex flex-col items-center justify-center text-center gap-4">
          <Ban className="w-12 h-12 text-secondary" />
          <h2 className="text-xl font-bold font-ubuntu">You blocked {product.handle}</h2>
          <p className="text-muted-foreground text-sm max-w-md">You will not see any products, listings, or comments from this merchant.</p>
          <button
            onClick={() => setIsBlocked(false)}
            className="px-6 py-2 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/95 transition-all shadow-md mt-2"
          >
            Unblock Store
          </button>
        </div>
        <div className="hidden lg:block lg:col-span-1 h-[calc(100vh-104px)] sticky top-[104px]">
          <RightSidebar />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto flex lg:grid lg:grid-cols-4 min-h-[calc(100vh-104px)] relative bg-background">
      {/* Left Sidebar (Sticky) */}
      <div className="hidden lg:block lg:col-span-1 h-[calc(100vh-104px)] sticky top-[104px]">
        <LeftSidebar />
      </div>

      {/* Main Details Feed */}
      <div className="w-full lg:col-span-2 border-x border-border min-h-screen pb-24">
        {/* Detail Header: Back button + title */}
        <div className="border-b border-border p-4 flex items-center gap-6">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full hover:bg-muted text-foreground transition-colors"
            title="Go Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold font-ubuntu tracking-tight">Product Details</h1>
            <p className="text-xs text-muted-foreground">{product.category}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-6">
          {/* Merchant Profile Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary text-lg">
                {product.user[0]}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-foreground hover:underline text-[16px] leading-tight">
                    {product.user}
                  </span>
                  {product.verified && (
                    <VerificationCheck className="w-4 h-4" />
                  )}
                </div>
                <span className="text-sm text-muted-foreground">{product.handle}</span>
              </div>
            </div>

            {/* Follow & Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-4 py-1.5 rounded-full font-bold text-sm transition-all border ${
                  isFollowing
                    ? 'bg-transparent border-border text-foreground hover:bg-secondary/10 hover:text-secondary hover:border-secondary/30'
                    : 'bg-foreground text-background border-transparent hover:opacity-90'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
              
              {/* Dropdown menu container */}
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 border border-border rounded-full hover:bg-muted text-muted-foreground transition-all"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-2xl shadow-xl py-2 z-40 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                      onClick={() => {
                        setIsMuted(!isMuted);
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors text-left"
                    >
                      {isMuted ? (
                        <>
                          <Volume2 className="w-4 h-4 text-primary" />
                          <span className="font-medium">Unmute Store</span>
                        </>
                      ) : (
                        <>
                          <VolumeX className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">Mute Store</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setIsBlocked(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-secondary hover:bg-secondary/5 transition-colors text-left"
                    >
                      <Ban className="w-4 h-4" />
                      <span className="font-medium">Block Store</span>
                    </button>
                    <div className="h-px bg-border my-1 mx-2"></div>
                    <button
                      onClick={() => {
                        setIsReported(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-secondary hover:bg-secondary/5 transition-colors text-left"
                    >
                      <Flag className="w-4 h-4" />
                      <span className="font-medium">Report Listing</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="space-y-4">
            <p className="text-foreground text-lg leading-relaxed whitespace-pre-wrap">
              {product.content}
            </p>

            {/* Media Image */}
            <div className="rounded-3xl overflow-hidden border border-border relative bg-muted/20">
              <img
                src={product.media}
                alt="Product media"
                className="w-full h-auto max-h-[600px] object-cover block"
              />
              
              {/* Product Price Tag */}
              <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm text-foreground font-black px-5 py-2.5 rounded-full text-[16px] shadow-2xl border border-border/50">
                {product.price}
              </div>
            </div>
          </div>

          {/* Timestamp and Views Metadata */}
          <div className="py-3 border-y border-border text-sm text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 font-medium">
            <span>{product.date}</span>
            <span>·</span>
            <span className="text-foreground font-bold">{product.views}</span> Views
            <span>·</span>
            <span className="text-primary font-bold">{product.stock} left</span> in stock
          </div>

          {/* Counts metrics */}
          <div className="py-3 border-b border-border text-sm flex gap-6 text-muted-foreground font-medium">
            <span>
              <strong className="text-foreground">{repostsCount}</strong> Reposts
            </span>
            <span>
              <strong className="text-foreground">{likesCount}</strong> Likes
            </span>
            <span>
              <strong className="text-foreground">{commentsCount}</strong> Comments
            </span>
          </div>

          {/* Actions Row */}
          <div className="flex items-center justify-around py-2 border-b border-border text-muted-foreground">
            <button className="p-2.5 rounded-full hover:bg-blue-500/10 hover:text-blue-500 transition-colors" title="Reply">
              <MessageCircle className="w-[22px] h-[22px]" />
            </button>
            <button
              onClick={handleRepost}
              className={`p-2.5 rounded-full hover:bg-green-500/10 hover:text-green-500 transition-colors ${
                isReposted ? 'text-green-500' : ''
              }`}
              title="Repost"
            >
              <Repeat2 className="w-[22px] h-[22px]" />
            </button>
            <button
              onClick={handleLike}
              className={`p-2.5 rounded-full hover:bg-secondary/10 hover:text-secondary transition-colors ${
                isLiked ? 'text-secondary font-bold' : ''
              }`}
              title="Like"
            >
              <Heart className={`w-[22px] h-[22px] ${isLiked ? 'fill-secondary text-secondary' : ''}`} />
            </button>
            <button className="p-2.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors" title="Add to Cart">
              <ShoppingCart className="w-[22px] h-[22px]" />
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors ${
                isBookmarked ? 'text-primary' : ''
              }`}
              title="Bookmark"
            >
              <Bookmark className={`w-[22px] h-[22px] ${isBookmarked ? 'fill-primary text-primary' : ''}`} />
            </button>
            <button onClick={handleShare} className="p-2.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors" title="Share">
              <Share2 className="w-[22px] h-[22px]" />
            </button>
          </div>

          {/* e-Commerce Ratings Breakdown Section */}
          <div className="bg-muted/30 rounded-3xl p-6 border border-border/60 space-y-4">
            <h3 className="text-lg font-bold font-ubuntu text-foreground">Ratings & Reviews</h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Left Score */}
              <div className="text-center md:border-r md:border-border/60 md:pr-8 flex-shrink-0">
                <span className="text-5xl font-black text-foreground font-ubuntu">{product.rating}</span>
                <div className="flex items-center gap-0.5 justify-center mt-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500/30 text-amber-500/30" />
                </div>
                <span className="text-xs text-muted-foreground mt-2 block">{product.reviewsCount} verified ratings</span>
              </div>

              {/* Right Bars */}
              <div className="flex-1 w-full space-y-2">
                {[
                  { stars: 5, pct: '82%' },
                  { stars: 4, pct: '12%' },
                  { stars: 3, pct: '4%' },
                  { stars: 2, pct: '2%' },
                  { stars: 1, pct: '0%' }
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-3 font-semibold text-muted-foreground">{row.stars}</span>
                    <Star className="w-3 h-3 fill-muted-foreground text-muted-foreground shrink-0" />
                    <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: row.pct }} />
                    </div>
                    <span className="w-8 text-right font-medium text-muted-foreground">{row.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rate this Product */}
          <div className="bg-gradient-to-br from-muted/40 to-muted/10 rounded-3xl p-6 border border-border/60 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-ubuntu text-foreground">Rate this Product</h3>
              {ratingSubmitted && (
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full">
                  <Check className="w-3.5 h-3.5" /> Rating Submitted
                </span>
              )}
            </div>

            {ratingSubmitted ? (
              /* Success State */
              <div className="flex flex-col items-center gap-3 py-4 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Check className="w-7 h-7 text-emerald-500" />
                </div>
                <p className="font-semibold text-foreground">Thanks for your rating!</p>
                <p className="text-sm text-muted-foreground">You rated this product <strong>{userRating} star{userRating !== 1 ? 's' : ''}</strong>. Your feedback helps other buyers.</p>
                <button
                  onClick={() => { setRatingSubmitted(false); setUserRating(0); setUserReviewText(''); }}
                  className="text-xs text-primary hover:underline mt-1"
                >
                  Edit my rating
                </button>
              </div>
            ) : (
              /* Rating Input State */
              <div className="space-y-4">
                {/* Star Selector */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setUserRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="group transition-transform hover:scale-125 active:scale-110 duration-150"
                        title={`Rate ${star} star${star !== 1 ? 's' : ''}`}
                      >
                        <Star
                          className={`w-9 h-9 transition-colors duration-100 ${
                            star <= (hoverRating || userRating)
                              ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]'
                              : 'fill-border text-border'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {(hoverRating || userRating) > 0 && (
                    <span className="text-sm font-semibold text-amber-500 animate-in fade-in duration-150">
                      {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent!'][(hoverRating || userRating)]}
                    </span>
                  )}
                </div>

                {/* Optional Review Text */}
                {userRating > 0 && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-200 space-y-3">
                    <textarea
                      placeholder="Share more about your experience (optional)..."
                      value={userReviewText}
                      onChange={(e) => setUserReviewText(e.target.value)}
                      rows={3}
                      className="w-full bg-background border border-border rounded-2xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-muted-foreground"
                    />
                    <button
                      onClick={() => {
                        setRatingSubmitted(true);
                        setToastMessage(`You rated this product ${userRating} star${userRating !== 1 ? 's' : ''}!`);
                        setTimeout(() => setToastMessage(null), 3000);
                      }}
                      className="w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/95 transition-all shadow-md text-sm"
                    >
                      Submit Rating
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Reply/Comment Input Box */}
          <form onSubmit={handleAddComment} className="flex gap-3 py-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary shrink-0 mt-1">
              B
            </div>
            <div className="flex-1 space-y-3">
              <textarea
                placeholder="Post your reply..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full bg-transparent border-none resize-none focus:outline-none text-base placeholder:text-muted-foreground py-2 min-h-[60px]"
                rows={2}
              />
              <div className="flex items-center justify-between border-t border-border/50 pt-3">
                <div className="flex items-center gap-1 text-primary">
                  <button type="button" className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                    <ImageIcon className="w-4 h-4" />
                  </button>
                  <button type="button" className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                    <Video className="w-4 h-4" />
                  </button>
                  <button type="button" className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                    <FileText className="w-4 h-4" />
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="px-5 py-1.5 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/95 transition-colors disabled:opacity-50 text-sm shadow-md"
                >
                  Reply
                </button>
              </div>
            </div>
          </form>

          {/* Replies/Comments list */}
          <div className="divide-y divide-border">
            {comments.map((review) => (
              <div key={review.id} className="py-4 flex gap-3 text-sm">
                <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center font-bold text-secondary text-xs shrink-0 mt-0.5">
                  {review.user[0]}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-foreground hover:underline">{review.user}</span>
                      <span className="text-xs text-muted-foreground">{review.handle}</span>
                      <span className="text-muted-foreground text-xs">·</span>
                      <span className="text-xs text-muted-foreground hover:underline">{review.time}</span>
                    </div>
                    {/* Star Rating for Review */}
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < review.rating ? 'fill-amber-500 text-amber-500' : 'fill-muted/20 text-muted/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {review.comment}
                  </p>
                  {/* Review micro actions */}
                  <div className="flex items-center gap-6 text-muted-foreground pt-1.5 text-xs">
                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors group">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>0</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-green-500 transition-colors group">
                      <Repeat2 className="w-3.5 h-3.5" />
                      <span>0</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-secondary transition-colors group">
                      <Heart className="w-3.5 h-3.5" />
                      <span>0</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar (Sticky) */}
      <div className="hidden lg:block lg:col-span-1 h-[calc(100vh-104px)] sticky top-[104px]">
        <RightSidebar />
      </div>

      {/* Shared Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[9999] bg-foreground text-background px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-in fade-in slide-in-from-bottom-3 duration-300 border border-border/10">
          <Check className="w-4 h-4 text-emerald-500" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
