"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Home,
  Compass,
  ShoppingBag,
  Store,
  ArrowRight,
  Package,
} from "lucide-react";

const LINKS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Categories", href: "/categories", icon: Compass },
  { label: "Shop", href: "/categories", icon: ShoppingBag },
  { label: "Open a Store", href: "/profile/auth?tab=signup", icon: Store },
];

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-104px)] w-full flex flex-col lg:flex-row">

      {/* ── Left panel ── */}
      <div className="relative flex-1 flex flex-col items-center justify-center bg-muted/30 border-b lg:border-b-0 lg:border-r border-border px-8 py-16 lg:py-0 overflow-hidden">

        {/* Large faint "404" watermark */}
        <span
          aria-hidden
          className="absolute select-none pointer-events-none font-black font-ubuntu leading-none"
          style={{
            fontSize: "clamp(10rem, 30vw, 22rem)",
            color: "transparent",
            WebkitTextStroke: "1.5px hsl(var(--border))",
            bottom: "-2rem",
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
          }}
        >
          404
        </span>

        {/* Illustration — stacked delivery boxes */}
        <div className="relative z-10 flex flex-col items-center gap-6 mb-10">
          {/* Box stack */}
          <div className="relative w-48 h-48 flex items-end justify-center">
            {/* Shadow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-3 bg-foreground/5 rounded-full blur-md" />

            {/* Back box */}
            <div
              className="absolute"
              style={{ bottom: "2.8rem", left: "50%", transform: "translateX(-62%)" }}
            >
              <div className="w-24 h-20 rounded-xl border-2 border-border bg-background shadow-sm flex items-center justify-center">
                <Package className="w-8 h-8 text-muted-foreground/30" />
              </div>
            </div>

            {/* Middle box */}
            <div
              className="absolute"
              style={{ bottom: "2.8rem", right: "50%", transform: "translateX(58%)" }}
            >
              <div className="w-20 h-16 rounded-xl border-2 border-border bg-muted/60 shadow-sm" />
            </div>

            {/* Front main box */}
            <div className="relative z-10">
              <div className="w-28 h-24 rounded-2xl border-2 border-primary/30 bg-background shadow-lg flex flex-col items-center justify-center gap-1.5">
                {/* Box lid crease lines */}
                <div className="absolute top-3 left-0 right-0 flex justify-center gap-1 opacity-20">
                  <div className="h-px w-8 bg-foreground" />
                  <div className="h-px w-4 bg-foreground" />
                </div>
                <Package className="w-10 h-10 text-primary/60" />
                <span className="text-[10px] font-bold font-ubuntu text-primary/50 uppercase tracking-widest">
                  Lost
                </span>
              </div>
            </div>
          </div>

          {/* Question mark tag */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-dashed border-primary/30 bg-primary/5">
            <span className="text-primary font-black text-lg font-ubuntu">?</span>
          </div>
        </div>

        {/* Status pill */}
        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          Page not found
        </div>

        <p className="relative z-10 text-center text-muted-foreground text-sm max-w-xs leading-relaxed">
          This delivery went to the wrong address. The page you&apos;re
          looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      {/* ── Right panel ── */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-16 lg:py-0 max-w-none lg:max-w-lg">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">
            Error 404
          </p>
          <h1 className="text-4xl lg:text-5xl font-black font-ubuntu text-foreground leading-[1.05] tracking-tight mb-4">
            Oops. <br />
            Wrong turn.
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-sm">
            No package here. Let&apos;s get you back on track - pick a
            destination below or head straight home.
          </p>
        </div>

        {/* Quick links */}
        <div className="space-y-2.5 mb-10">
          {LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="group flex items-center gap-4 w-full p-4 rounded-2xl border border-border bg-background hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-150"
              >
                <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-150">
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-150" />
                </div>
                <span className="flex-1 text-sm font-semibold text-foreground font-ubuntu">
                  {link.label}
                </span>
                <ArrowRight className="w-4 h-4 text-border group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-150 shrink-0" />
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground font-medium">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Go back */}
        <button
          onClick={() => window.history.back()}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors self-start"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-150" />
          Go back to previous page
        </button>
      </div>

    </div>
  );
}
