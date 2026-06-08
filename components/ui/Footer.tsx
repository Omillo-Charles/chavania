"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Globe, Mail, Send, ArrowUpRight, CheckCircle, RefreshCw
} from 'lucide-react';

const FOOTER_LINKS = [
  {
    title: "Shop",
    links: [
      { label: "All Categories", href: "/categories" },
      { label: "Trending Brands", href: "/brands" },
      { label: "Popular Stores", href: "/stores" },
      { label: "Hot Deals & Offers", href: "/deals" },
      { label: "Buyer Protection", href: "/protection" }
    ]
  },
  {
    title: "Sell & Integrate",
    links: [
      { label: "Sell on dotSoko", href: "/sell" },
      { label: "Merchant Dashboard", href: "/profile/auth?tab=signup" },
      { label: "Developer API Docs", href: "/docs/api" },
      { label: "Logistics Hub", href: "/logistics" },
      { label: "Fees & Payouts", href: "/fees" }
    ]
  },
  {
    title: "Support & Help",
    links: [
      { label: "dotSoko Support", href: "/support" },
      { label: "Track Your Order", href: "/track" },
      { label: "Returns & Exchanges", href: "/returns" },
      { label: "Contact Us", href: "/contact" },
      { label: "System Status", href: "/status" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About dotSoko", href: "/about" },
      { label: "Careers (Hiring!)", href: "/careers" },
      { label: "Press Room", href: "/press" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Privacy Policy", href: "/privacy" }
    ]
  }
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setEmail("");
    }, 1200);
  };

  return (
    <footer className="w-full bg-muted/20 border-t border-border mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">

        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-border">

          {/* Logo & Description */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold tracking-tighter font-segoe text-primary">
                <span className="text-secondary">.</span>soko
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              The next-generation social commerce and direct-to-consumer marketplace. Empowering independent brands, local stores, and resellers with full agency over their storefronts, feeds, and customer relationships.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-muted-foreground pt-2">
              <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="w-5 h-5 inline-block">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" className="w-5 h-5 inline-block">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.52 11.52 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Input Card */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-background border border-border rounded-2xl p-6 lg:p-8 shadow-sm">
              <h3 className="text-base lg:text-lg font-bold font-ubuntu text-foreground mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Subscribe to dotSoko Merchant & Platform updates
              </h3>
              <p className="text-xs lg:text-sm text-muted-foreground mb-4">
                Get weekly tips on scale, new feature rollouts, API updates, and seller guides. Unsubscribe anytime.
              </p>

              {status === 'success' ? (
                <div className="flex items-center gap-2 text-green-600 bg-green-500/10 border border-green-500/20 rounded-xl p-3.5 text-sm font-semibold transition-all">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Success! You have been subscribed to our merchant updates list.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="flex-1 bg-muted/40 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="px-5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-60 flex items-center justify-center gap-1.5"
                  >
                    {status === 'submitting' ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Join</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle Section: Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {FOOTER_LINKS.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-ubuntu">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, lidx) => (
                  <li key={lidx}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-0.5 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                        {link.label}
                      </span>
                      {link.label.includes("(Hiring!)") && (
                        <span className="ml-1 px-1.5 py-0.2 bg-secondary/15 text-secondary rounded-full text-[9px] font-bold">
                          We are hiring
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright & Regional */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">

          {/* Copyright & Core Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            <span>© {new Date().getFullYear()} dotSoko Inc. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Settings</Link>
            <Link href="/security" className="hover:text-primary transition-colors">Security Audit</Link>
          </div>

          {/* Regional Settings */}
          <div className="flex items-center gap-2 border border-border bg-background rounded-full px-3.5 py-1.5 cursor-pointer hover:border-primary/35 transition-colors">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-semibold text-foreground">English (KE)</span>
            <span className="text-[10px]">|</span>
            <span>KES</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
