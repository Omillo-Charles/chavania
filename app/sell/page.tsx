"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Store,
  HelpCircle,
  ChevronRight,
  ArrowRight,
  UserPlus,
  ShieldCheck,
  PackageCheck,
  BarChart3,
  Truck,
  Wallet,
  BadgeCheck,
  Megaphone,
  MessageSquare,
  Star,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import Footer from "@/components/ui/Footer";

/* DATA */

const STEPS = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Seller Account",
    description:
      "Sign up or log in to your Chavania account. Navigate to your profile and select 'Become a Seller'. Complete the seller registration form with your personal or business details.",
    details: [
      "Provide your full legal name or registered business name.",
      "Enter a valid Kenyan phone number for M-Pesa payout linkage.",
      "Upload a government-issued ID (National ID or passport).",
      "Accept the Seller Terms of Service.",
    ],
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "Complete KYC Verification",
    description:
      "Chavania verifies all sellers to protect buyers and maintain a trusted marketplace. The KYC process typically takes 1–3 business days.",
    details: [
      "Submit a clear photo of your ID document (front and back).",
      "Take a selfie holding your ID for liveness verification.",
      "Business sellers must also upload a business registration certificate and KRA PIN certificate.",
      "You will receive an email notification once your account is approved.",
    ],
  },
  {
    number: "03",
    icon: Store,
    title: "Set Up Your Storefront",
    description:
      "Your storefront is your brand's home on Chavania. Customise it to stand out and attract buyers scrolling through the social feed.",
    details: [
      "Choose a unique store handle (e.g. @yourbrand).",
      "Upload a high-resolution store logo and banner image.",
      "Write a compelling store description - this appears on your profile and in search results.",
      "Set your store's operating hours and response time expectations.",
      "Configure your delivery zones and standard processing time.",
    ],
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "List Your Products",
    description:
      "Create product listings that convert. High-quality images and detailed descriptions are the single biggest driver of sales on Chavania.",
    details: [
      "Write a clear, keyword-rich product title.",
      "Upload a minimum of 3 product images; use natural lighting and multiple angles.",
      "Set an accurate price in KES - artificial inflation to fake discounts is prohibited.",
      "Fill in all variant options: size, colour, material, etc.",
      "Enter accurate stock quantities to avoid overselling.",
      "Select the correct product category and add relevant tags.",
      "Enable 'Everyone can resell' if you want other sellers to resell your product.",
    ],
  },
  {
    number: "05",
    icon: Truck,
    title: "Configure Shipping",
    description:
      "Set up your fulfilment options before your first order arrives. Chavania supports self-fulfilment and chavaniaExpress integrated logistics.",
    details: [
      "Choose between self-fulfilment (your own courier) or chavaniaExpress (Chavania's logistics partner).",
      "Set shipping rates by zone: Nairobi, Nairobi suburbs, other counties, and international.",
      "Define your default processing time - orders must be dispatched within this window.",
      "For chavaniaExpress: schedule your weekly drop-off days at the nearest hub.",
      "Enable order tracking integration so buyers can follow their parcel in real time.",
    ],
  },
  {
    number: "06",
    icon: Wallet,
    title: "Set Up Payouts",
    description:
      "Add your M-Pesa number or bank account to receive earnings. Payouts are processed on a rolling 7-day basis after buyer confirmation.",
    details: [
      "Go to Merchant Dashboard > Payouts > Add Payout Method.",
      "M-Pesa: enter the registered Safaricom number - a verification STK push will be sent.",
      "Bank transfer: provide your bank name, branch, account number, and account holder name.",
      "Minimum payout threshold is KES 500.",
      "Funds are held in escrow until buyer confirmation or 14 days after dispatch, whichever comes first.",
    ],
  },
  {
    number: "07",
    icon: Megaphone,
    title: "Promote Your Store",
    description:
      "Chavania's social feed gives your products organic visibility the moment you post. Boost further with built-in promotional tools.",
    details: [
      "Post consistently - each product listing appears in buyer feeds and is shareable.",
      "Use Chavania Ads to promote listings to targeted buyer segments.",
      "Offer limited-time discount codes via the Promotions tab in your dashboard.",
      "Encourage satisfied buyers to leave reviews - social proof drives conversions.",
      "Cross-promote your Chavania store handle on your social media channels.",
    ],
  },
  {
    number: "08",
    icon: BarChart3,
    title: "Track Performance",
    description:
      "Your Merchant Dashboard gives you a real-time view of sales, traffic, and customer behaviour so you can make data-driven decisions.",
    details: [
      "Monitor daily, weekly, and monthly revenue from the Analytics tab.",
      "Track listing impressions, click-through rates, and conversion rates per product.",
      "Review your seller performance score - order defect rate, dispatch rate, and response time.",
      "Export sales reports in CSV format for accounting purposes.",
      "Use the Customer Insights panel to understand your buyer demographics.",
    ],
  },
];

const FEES = [
  { category: "Electronics & Gadgets", rate: "6.5%" },
  { category: "Fashion & Apparel", rate: "8%" },
  { category: "Beauty & Personal Care", rate: "9%" },
  { category: "Home & Kitchen", rate: "7%" },
  { category: "Phones & Accessories", rate: "6%" },
  { category: "Books & Stationery", rate: "5%" },
  { category: "Sports & Outdoors", rate: "7.5%" },
  { category: "All Other Categories", rate: "8%" },
];

const FAQS = [
  {
    q: "How long does seller verification take?",
    a: "KYC verification typically takes 1–3 business days. You will receive an email as soon as your account is reviewed. Submitting clear, valid documents speeds up the process.",
  },
  {
    q: "Can I sell as an individual, not a business?",
    a: "Yes. Individual sellers are welcome on Chavania. You will need a valid government-issued ID and an active M-Pesa number. A business registration certificate is only required if you are registering as a company.",
  },
  {
    q: "When do I get paid?",
    a: "Payouts are made on a rolling 7-day basis after the buyer confirms receipt of their order. If the buyer does not confirm within 14 days of dispatch, funds are released automatically.",
  },
  {
    q: "What happens if a buyer returns a product?",
    a: "If a return is approved under our platform policy, you must accept the item and issue a refund within 48 hours of receipt. Chavania mediates all disputes and you may appeal any return decision within 72 hours via the Seller Resolution Centre.",
  },
  {
    q: "Are there any listing fees?",
    a: "No. Listing products on Chavania is completely free. Chavania only charges a commission on completed sales. Optional paid features include promoted listings and Chavania Ads.",
  },
  {
    q: "Can I sell in multiple categories?",
    a: "Yes, you can list products across multiple categories from a single seller account. Some categories (e.g. pharmaceuticals, electronics above a certain value) require additional verification before listings go live.",
  },
];

/* FAQ ITEM */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-muted/30 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-foreground font-ubuntu leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 border-t border-border/50">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

/*STEP CARD */
function StepCard({
  step,
  active,
  onClick,
}: {
  step: (typeof STEPS)[0];
  active: boolean;
  onClick: () => void;
}) {
  const Icon = step.icon;
  return (
    <div
      id={`step-${step.number}`}
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        active ? "border-primary/40 shadow-lg shadow-primary/5" : "border-border"
      }`}
    >
      {/* Header - always visible, clickable */}
      <button
        onClick={onClick}
        className="w-full flex items-center gap-5 p-6 text-left hover:bg-muted/20 transition-colors"
      >
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
            active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className={`text-xs font-black tracking-widest uppercase font-ubuntu ${active ? "text-primary" : "text-muted-foreground"}`}>
              Step {step.number}
            </span>
          </div>
          <h3 className="text-base font-bold text-foreground font-ubuntu leading-snug truncate">
            {step.title}
          </h3>
        </div>
        <ChevronRight
          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${active ? "rotate-90 text-primary" : "text-border"}`}
        />
      </button>

      {/* Expandable body */}
      {active && (
        <div className="px-6 pb-6 border-t border-border/50 pt-5 space-y-4 bg-primary/[0.02]">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {step.description}
          </p>
          <ul className="space-y-2.5">
            {step.details.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/*PAGE */
export default function SellPage() {
  const [activeStep, setActiveStep] = useState("01");

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">

      {/* ── Page-level navbar (track-style) ── */}
      <div className="bg-background border-b border-border sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Shop</span>
            </Link>
            <div className="h-5 w-px bg-border hidden sm:block" />
            <h1 className="text-base font-bold font-ubuntu tracking-tight text-foreground flex items-center gap-2">
              <Store className="w-4 h-4 text-primary" />
              Sell on Chavania
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/support"
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              <HelpCircle className="w-3.5 h-3.5" /> Need Help?
            </Link>
            <Link
              href="/profile/auth?tab=signup"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-full hover:bg-primary/90 transition-colors"
            >
              Start Selling <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-1">

        {/* ── Stats bar ── */}
        <section className="bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-border">
              {[
                { value: "10,000+", label: "Active Merchants" },
                { value: "KES 0", label: "Listing Fee" },
                { value: "7 Days", label: "Payout Cycle" },
                { value: "2.5M+", label: "Products Listed" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:px-8">
                  <p className="text-2xl lg:text-3xl font-black font-ubuntu text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="how-it-works" className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <div className="mb-10">
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
              Step-by-step guide
            </p>
            <h2 className="text-3xl lg:text-4xl font-black font-ubuntu text-foreground">
              How to sell on Chavania
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed">
              Follow the eight steps below to go from zero to your first sale. Click any step to expand the full instructions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Steps list */}
            <div className="lg:col-span-2 space-y-3">
              {STEPS.map((step) => (
                <StepCard
                  key={step.number}
                  step={step}
                  active={activeStep === step.number}
                  onClick={() =>
                    setActiveStep((prev) =>
                      prev === step.number ? "" : step.number
                    )
                  }
                />
              ))}
            </div>

            {/* Sticky sidebar summary */}
            <div className="hidden lg:block sticky top-24">
              <div className="rounded-2xl border border-border bg-background p-6 space-y-4">
                <h3 className="text-sm font-bold font-ubuntu text-foreground uppercase tracking-wider">
                  Quick Navigation
                </h3>
                <ul className="space-y-1">
                  {STEPS.map((step) => (
                    <li key={step.number}>
                      <button
                        onClick={() => setActiveStep(step.number)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-left transition-colors ${
                          activeStep === step.number
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        <span
                          className={`text-xs font-black tabular-nums w-5 shrink-0 ${
                            activeStep === step.number
                              ? "text-primary"
                              : "text-muted-foreground/50"
                          }`}
                        >
                          {step.number}
                        </span>
                        {step.title}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <Link
                    href="/profile/auth?tab=signup"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors text-sm"
                  >
                    Start Selling <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fees ── */}
        <section className="border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
            <div className="mb-10">
              <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
                Transparent Pricing
              </p>
              <h2 className="text-3xl lg:text-4xl font-black font-ubuntu text-foreground">
                Commission rates
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed">
                Chavania charges a commission only on completed sales. Listing is always free. No hidden fees.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEES.map((fee) => (
                <div
                  key={fee.category}
                  className="p-5 rounded-2xl border border-border bg-muted/20 hover:border-primary/30 hover:bg-primary/[0.03] transition-all group"
                >
                  <p className="text-3xl font-black font-ubuntu text-primary mb-2 group-hover:scale-105 transition-transform origin-left">
                    {fee.rate}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {fee.category}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              * Rates are subject to change with 30 days' notice. See{" "}
              <Link href="/terms" className="text-primary hover:underline font-semibold">
                Seller Terms
              </Link>{" "}
              for full details.
            </p>
          </div>
        </section>

        {/* ── Why Chavania ── */}
        <section className="border-t border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
            <div className="mb-10">
              <p className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2">
                Why us
              </p>
              <h2 className="text-3xl lg:text-4xl font-black font-ubuntu text-foreground">
                The Chavania advantage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Secure Escrow Payments",
                  body: "Buyer funds are held in escrow and released to you only after confirmed delivery. No more chasing payments.",
                },
                {
                  icon: Truck,
                  title: "chavaniaExpress Logistics",
                  body: "Opt into our integrated fulfilment network and we handle pickup, delivery, and tracking for you.",
                },
                {
                  icon: BarChart3,
                  title: "Real-Time Analytics",
                  body: "Track impressions, conversions, and revenue per product from your merchant dashboard.",
                },
                {
                  icon: MessageSquare,
                  title: "Social Commerce Feed",
                  body: "Every product listing appears in buyer feeds and is shareable - organic discovery built in.",
                },
                {
                  icon: Star,
                  title: "Verified Seller Badge",
                  body: "Consistently high-performing sellers earn the Chavania Verified badge, boosting buyer trust.",
                },
                {
                  icon: Wallet,
                  title: "Weekly M-Pesa Payouts",
                  body: "Earnings hit your M-Pesa or bank account every 7 days. No holding periods beyond escrow.",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="p-6 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold font-ubuntu text-foreground mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="border-t border-border bg-background">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
            <div className="mb-10">
              <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
                FAQ
              </p>
              <h2 className="text-3xl lg:text-4xl font-black font-ubuntu text-foreground">
                Common questions
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20 text-center">
            <h2 className="text-3xl lg:text-5xl font-black font-ubuntu text-foreground mb-4 tracking-tight">
              Ready to start selling?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Set up your store in minutes. No listing fees, no upfront costs - just a commission on what you sell.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/profile/auth?tab=signup"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors"
              >
                Open Your Store <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-border bg-background font-bold rounded-full hover:bg-muted/50 transition-colors text-foreground"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
