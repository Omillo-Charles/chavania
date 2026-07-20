"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  MessageCircle,
  Repeat2,
  Heart,
  ShoppingCart,
  Bookmark,
  Share2,
  MoreHorizontal,
  UserPlus,
  UserMinus,
  VolumeX,
  Volume2,
  Ban,
  Flag,
  Check
} from 'lucide-react';
import VerificationCheck from './verificationCheck';

export interface PostMedia {
  type: 'image' | 'video';
  url: string;
}

export interface PostData {
  id: number | string;
  user: string;
  handle: string;
  time: string;
  content: string;
  likes?: number;
  comments?: number;
  retweets?: number;
  media: PostMedia[];
  verified?: boolean;
  verifiedType?: 'blue' | 'gold';
  price: string;
  avatar?: string;
}

interface ProductDisplayProps {
  post: PostData;
}

// Format numbers like X (e.g. 1500 -> 1.5K)
const formatNumber = (num?: number) => {
  if (!num) return '';
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
};

export default function ProductDisplay({ post }: ProductDisplayProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${window.location.origin}/product/${post.id}`);
    setToastMessage("Product link copied to clipboard!");
    setIsMenuOpen(false);
    setTimeout(() => setToastMessage(null), 3000);
  };

  if (isBlocked) {
    return (
      <article className="px-6 py-5 border-b border-border flex items-center justify-between bg-muted/20 text-muted-foreground text-sm font-ubuntu">
        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground">{post.handle}</span>
          <span>is blocked. You won&apos;t see their listings.</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsBlocked(false);
          }}
          className="px-4 py-1.5 bg-foreground text-background font-bold text-xs rounded-full hover:opacity-90 transition-all shadow-md"
        >
          Undo
        </button>
      </article>
    );
  }

  if (isReported) {
    return (
      <article className="px-6 py-5 border-b border-border flex items-center justify-between bg-muted/20 text-muted-foreground text-sm font-ubuntu">
        <div className="flex items-center gap-2">
          <span>You reported this listing. Thanks for helping us keep Chavania safe.</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsReported(false);
          }}
          className="px-4 py-1.5 bg-foreground text-background font-bold text-xs rounded-full hover:opacity-90 transition-all shadow-md"
        >
          Undo
        </button>
      </article>
    );
  }

  return (
    <article
      onClick={() => router.push(`/product/${post.id}`)}
      className="px-4 pt-3 pb-2 border-b border-border hover:bg-muted/5 transition-colors cursor-pointer flex gap-3 relative"
    >
      {/* Avatar Column */}
      <div className="flex-shrink-0 pt-1">
        {post.avatar ? (
          <img
            src={post.avatar}
            alt={post.user}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">
            {post.user[0]}
          </div>
        )}
      </div>

      {/* Main Content Column */}
      <div className="flex flex-col w-full min-w-0">
        {/* Header: Name, Handle, Time, More Icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-hidden whitespace-nowrap text-[15px]">
            <Link
              href={`/store/${post.handle.replace('@', '')}`}
              onClick={(e) => e.stopPropagation()}
              className="font-bold text-foreground hover:underline truncate"
            >
              {post.user}
            </Link>
            {post.verified && (
              <VerificationCheck type={post.verifiedType ?? 'blue'} className="w-4 h-4" />
            )}
            <Link
              href={`/store/${post.handle.replace('@', '')}`}
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground truncate hover:underline"
            >
              {post.handle}
            </Link>
            {isFollowing && (
              <span className="text-[10px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded-md shrink-0">
                Following
              </span>
            )}
            {isMuted && (
              <span className="text-[10px] bg-secondary/10 text-secondary font-bold px-1.5 py-0.5 rounded-md inline-flex items-center gap-0.5 shrink-0">
                <VolumeX className="w-3 h-3" /> Muted
              </span>
            )}
            <span className="text-muted-foreground px-1">·</span>
            <span className="text-muted-foreground hover:underline">
              {post.time}
            </span>
          </div>

          <div className="relative" ref={menuRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-muted-foreground hover:text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors group"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>

            {isMenuOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 mt-1 w-64 bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFollowing(!isFollowing);
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-muted/50 transition-colors text-left"
                >
                  {isFollowing ? (
                    <>
                      <UserMinus className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">Unfollow {post.handle}</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4 text-primary" />
                      <span className="font-medium">Follow {post.handle}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-muted/50 transition-colors text-left"
                >
                  {isMuted ? (
                    <>
                      <Volume2 className="w-4 h-4 text-primary" />
                      <span className="font-medium">Unmute {post.handle}</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">Mute {post.handle}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsBlocked(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-secondary hover:bg-secondary/5 transition-colors text-left"
                >
                  <Ban className="w-4 h-4" />
                  <span className="font-medium">Block {post.handle}</span>
                </button>

                <div className="h-px bg-border my-1 mx-2"></div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsBookmarked(!isBookmarked);
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-muted/50 transition-colors text-left"
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                  <span className="font-medium">
                    {isBookmarked ? 'Remove Bookmark' : 'Bookmark Product'}
                  </span>
                </button>

                <button
                  onClick={handleShare}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-muted/50 transition-colors text-left"
                >
                  <Share2 className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">Share Product Link</span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsReported(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-secondary hover:bg-secondary/5 transition-colors text-left"
                >
                  <Flag className="w-4 h-4" />
                  <span className="font-medium">Report Listing</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Text Content */}
        <p className="mt-0.5 text-foreground text-[15px] whitespace-pre-wrap break-words leading-snug">
          {post.content}
        </p>

        {/* Media Container (Maintains original width aspect ratio within bounds, X style) */}
        <div className="mt-3 rounded-2xl overflow-hidden border border-border/50 relative bg-muted/20">
          {post.media[0].type === 'image' ? (
            <img
              src={post.media[0].url}
              alt="Post media"
              className="w-full h-auto max-h-[512px] object-cover block"
              loading="lazy"
            />
          ) : (
            <video
              src={post.media[0].url}
              className="w-full h-auto max-h-[512px] object-cover block"
              controls
            />
          )}

          {/* Price Tag Overlay */}
          <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm text-foreground font-bold px-3 py-1.5 rounded-full text-sm shadow-lg border border-border/50">
            {post.price}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-3 text-muted-foreground max-w-md">
          {/* Comment */}
          <button className="flex items-center gap-1 hover:text-blue-500 transition-colors group">
            <div className="p-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
              <MessageCircle className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[13px]">{formatNumber(post.comments)}</span>
          </button>

          {/* Retweet / Repost */}
          <button className="flex items-center gap-1 hover:text-green-500 transition-colors group">
            <div className="p-2 rounded-full group-hover:bg-green-500/10 transition-colors">
              <Repeat2 className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[13px]">{formatNumber(post.retweets)}</span>
          </button>

          {/* Like */}
          <button className="flex items-center gap-1 hover:text-secondary transition-colors group">
            <div className="p-2 rounded-full group-hover:bg-secondary/10 transition-colors">
              <Heart className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[13px]">{formatNumber(post.likes)}</span>
          </button>

          {/* Add to Cart / Buy */}
          <button className="flex items-center gap-1 hover:text-primary transition-colors group" title="Add to Cart">
            <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
              <ShoppingCart className="w-[18px] h-[18px]" />
            </div>
          </button>

          {/* Bookmark & Share */}
          <div className="flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsBookmarked(!isBookmarked);
              }}
              className={`flex items-center gap-1 hover:text-primary transition-colors group ${isBookmarked ? 'text-primary' : ''}`}
              title="Bookmark"
            >
              <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                <Bookmark className={`w-[18px] h-[18px] ${isBookmarked ? 'fill-primary text-primary' : ''}`} />
              </div>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-1 hover:text-primary transition-colors group"
              title="Share"
            >
              <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                <Share2 className="w-[18px] h-[18px]" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Share Link Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[9999] bg-foreground text-background px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-in fade-in slide-in-from-bottom-3 duration-300 border border-border/10">
          <Check className="w-4 h-4 text-emerald-500" />
          <span>{toastMessage}</span>
        </div>
      )}
    </article>
  );
}
