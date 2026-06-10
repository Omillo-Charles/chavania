"use client";

import React from 'react';
import {
  MessageCircle,
  Repeat2,
  Heart,
  ShoppingCart,
  Bookmark,
  Share2,
  MoreHorizontal
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
  return (
    <article className="px-4 pt-3 pb-2 border-b border-border hover:bg-muted/5 transition-colors cursor-pointer flex gap-3">
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
          <div className="flex items-center gap-1 overflow-hidden whitespace-nowrap text-[15px]">
            <span className="font-bold text-foreground hover:underline truncate">
              {post.user}
            </span>
            {post.verified && (
              <VerificationCheck className="w-4 h-4" />
            )}
            <span className="text-muted-foreground truncate">
              {post.handle}
            </span>
            <span className="text-muted-foreground px-1">·</span>
            <span className="text-muted-foreground hover:underline">
              {post.time}
            </span>
          </div>
          <button className="text-muted-foreground hover:text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors group">
            <MoreHorizontal className="w-4 h-4" />
          </button>
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
            <button className="flex items-center gap-1 hover:text-primary transition-colors group" title="Bookmark">
              <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                <Bookmark className="w-[18px] h-[18px]" />
              </div>
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition-colors group" title="Share">
              <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                <Share2 className="w-[18px] h-[18px]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
