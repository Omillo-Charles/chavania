"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShoppingBag, Store, Truck, RotateCcw,
  ShieldCheck, CreditCard, ChevronRight, MessageSquare,
  HelpCircle, BookOpen, ArrowRight, LifeBuoy
} from 'lucide-react';
import Footer from '@/components/ui/Footer';
import Searchbar from '@/components/features/Searchbar';

const SUPPORT_CATEGORIES = [
  {
    title: "Buying & Orders",
    description: "Track orders, manage purchases, and buyer protection.",
    icon: ShoppingBag,
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-500",
    href: "/support/buying"
  },
  {
    title: "Selling & Merchant Hub",
    description: "Store setup, listing products, and seller policies.",
    icon: Store,
    color: "from-secondary/15 to-secondary/5",
    iconColor: "text-secondary",
    href: "/support/selling"
  },
  {
    title: "Shipping & Delivery",
    description: "Delivery times, tracking issues, and sokoExpress.",
    icon: Truck,
    color: "from-orange-500/10 to-orange-600/5",
    iconColor: "text-orange-500",
    href: "/support/shipping"
  },
  {
    title: "Returns & Refunds",
    description: "How to return an item and get your money back.",
    icon: RotateCcw,
    color: "from-red-500/10 to-red-600/5",
    iconColor: "text-red-500",
    href: "/support/returns"
  },
  {
    title: "Account & Security",
    description: "Manage your password, email, and privacy settings.",
    icon: ShieldCheck,
    color: "from-green-500/10 to-green-600/5",
    iconColor: "text-green-500",
    href: "/support/account"
  },
  {
    title: "Payments & Pricing",
    description: "M-Pesa, cards, escrow, and merchant fees.",
    icon: CreditCard,
    color: "from-purple-500/10 to-purple-600/5",
    iconColor: "text-purple-500",
    href: "/support/payments"
  }
];

const POPULAR_ARTICLES = [
  {
    title: "How do I track my order?",
    category: "Buying & Orders"
  },
  {
    title: "Setting up your Merchant Store",
    category: "Selling & Merchant Hub"
  },
  {
    title: "What is the Buyer Protection policy?",
    category: "Buying & Orders"
  },
  {
    title: "How to process a return request",
    category: "Returns & Refunds"
  },
  {
    title: "Understanding sokoExpress fulfillment",
    category: "Shipping & Delivery"
  },
  {
    title: "Linking your M-Pesa till number",
    category: "Payments & Pricing"
  }
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would route to a search results page
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-full bg-background min-h-screen text-foreground">

      {/* 1. HERO SECTION WITH SEARCH */}
      <section className="relative overflow-hidden border-b border-border py-20 lg:py-28 bg-gradient-to-b from-muted/20 to-transparent">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <LifeBuoy className="w-3.5 h-3.5" />
            <span>Support Center</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight font-ubuntu mb-8">
            How can we <span className="text-primary">help</span> you?
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto group">
            <Searchbar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for articles, guides, or topics..."
              className="w-full"
              inputClassName="bg-background border border-border/80 rounded-2xl py-4 pl-12 pr-32 text-base shadow-sm focus:border-primary !py-4"
              iconClassName="w-5 h-5 left-4 text-muted-foreground group-focus-within:text-primary transition-colors"
            />
            <button
              type="submit"
              className="absolute inset-y-2 right-2 px-6 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              Search
            </button>
          </form>

          <div className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>Popular searches:</span>
            <button className="hover:text-primary hover:underline transition-colors">track order</button>
            <span className="w-1 h-1 rounded-full bg-border"></span>
            <button className="hover:text-primary hover:underline transition-colors">returns</button>
            <span className="w-1 h-1 rounded-full bg-border"></span>
            <button className="hover:text-primary hover:underline transition-colors">merchant fees</button>
          </div>
        </div>
      </section>

      {/* 2. SUPPORT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu mb-3">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the answers you need by browsing our comprehensive help topics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUPPORT_CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Link
                key={idx}
                href={category.href}
                className="bg-background border border-border/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 group flex items-start gap-5"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300`}>
                  <Icon className={`w-6 h-6 ${category.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-ubuntu text-foreground mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. POPULAR ARTICLES & QUICK LINKS */}
      <section className="border-t border-border bg-muted/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

            {/* Popular Articles */}
            <div className="flex-1 w-full">
              <div className="mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Most Read</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu text-foreground">Popular Articles</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {POPULAR_ARTICLES.map((article, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="flex items-center justify-between p-4 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                        {article.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {article.category}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Need More Help CTA */}
            <div className="lg:w-1/3 w-full bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <MessageSquare className="w-32 h-32 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-ubuntu mb-3">Still need help?</h3>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                  Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
                </p>
                <Link
                  href="/contact"
                  className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  Contact Support
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
