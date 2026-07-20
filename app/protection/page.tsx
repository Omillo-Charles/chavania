"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck, Lock, CreditCard, CheckCircle,
  AlertTriangle, FileText, ArrowRight, ChevronDown,
  HelpCircle, Clock, Package, RefreshCcw
} from 'lucide-react';
import Footer from '@/components/ui/Footer';

const PROTECTION_FEATURES = [
  {
    title: "Secure Escrow Payments",
    description: "Your payment is held securely until you confirm you've received your order as described.",
    icon: Lock,
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-500"
  },
  {
    title: "Full Refund Guarantee",
    description: "Get a full refund if your item doesn't arrive or isn't as described.",
    icon: CreditCard,
    color: "from-secondary/15 to-secondary/5",
    iconColor: "text-secondary"
  },
  {
    title: "Easy Returns",
    description: "Return items within 30 days for a full refund or exchange.",
    icon: RefreshCcw,
    color: "from-green-500/10 to-green-600/5",
    iconColor: "text-green-500"
  },
  {
    title: "24/7 Support",
    description: "Our support team is always available to help resolve any issues.",
    icon: HelpCircle,
    color: "from-purple-500/10 to-purple-600/5",
    iconColor: "text-purple-500"
  }
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Place Your Order",
    description: "Shop confidently knowing your payment is protected.",
    icon: Package,
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-500"
  },
  {
    step: "02",
    title: "Payment Held Securely",
    description: "Your payment is held in escrow until you confirm delivery.",
    icon: Lock,
    color: "from-secondary/15 to-secondary/5",
    iconColor: "text-secondary"
  },
  {
    step: "03",
    title: "Receive & Confirm",
    description: "Check your order and confirm when you're satisfied.",
    icon: CheckCircle,
    color: "from-green-500/10 to-green-600/5",
    iconColor: "text-green-500"
  },
  {
    step: "04",
    title: "Payment Released",
    description: "Funds are released to the seller once you confirm.",
    icon: CreditCard,
    color: "from-orange-500/10 to-orange-600/5",
    iconColor: "text-orange-500"
  }
];

const PROTECTION_FAQS = [
  {
    question: "What is Chavania Buyer Protection?",
    answer: "Chavania Buyer Protection is a comprehensive program that protects your purchases from the moment you place an order until you're completely satisfied. Your payment is held securely in escrow until you confirm that your order has been received and is as described."
  },
  {
    question: "What does Buyer Protection cover?",
    answer: "Buyer Protection covers: items not received, items significantly not as described, damaged or defective items, missing parts, and items that fail to meet quality standards. You're protected for the full purchase price plus shipping costs on eligible orders."
  },
  {
    question: "How long do I have to report a problem?",
    answer: "You have up to 48 hours after delivery to report any issues with your order. If you don't confirm delivery within 14 days, we'll automatically confirm it for you, so please inspect your items promptly upon arrival."
  },
  {
    question: "How do I file a dispute?",
    answer: "To file a dispute, go to your orders page, select the order in question, and click 'Report a Problem'. Provide details about the issue and any supporting documentation (photos, videos, etc.). Our team will review your case within 24-48 business hours."
  },
  {
    question: "How long does the dispute process take?",
    answer: "Most disputes are resolved within 3-7 business days. The timeline depends on the complexity of the issue and how quickly both parties respond. We'll keep you updated throughout the process via email and notifications."
  },
  {
    question: "What if the seller doesn't respond?",
    answer: "If the seller doesn't respond to your dispute within 3 business days, we'll automatically review the case and issue a full refund if your claim is valid. We work hard to ensure buyers are protected at all times."
  },
  {
    question: "Are all purchases covered by Buyer Protection?",
    answer: "Most purchases are covered, but there are some exceptions: digital products (once downloaded), personalized/custom-made items (unless defective), perishable goods, and items that violate our policies. Always check the product page for specific details."
  }
];

const COVERAGE_DETAILS = [
  {
    title: "Full Purchase Price",
    description: "Covered up to KSh 500,000 per order",
    icon: CreditCard
  },
  {
    title: "Shipping Costs",
    description: "Included in eligible refunds",
    icon: Package
  },
  {
    title: "Return Shipping",
    description: "Covered for defective or wrong items",
    icon: RefreshCcw
  },
  {
    title: "Quick Resolution",
    description: "Most cases resolved within 7 days",
    icon: Clock
  }
];

export default function ProtectionPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(prev => prev === index ? null : index);
  };

  return (
    <div className="w-full bg-background min-h-screen text-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border py-16 lg:py-24 bg-gradient-to-b from-muted/20 to-transparent">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Buyer Protection</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight font-ubuntu mb-6 max-w-3xl mx-auto leading-tight">
            Shop with complete <span className="text-primary">confidence</span>
          </h1>
          
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
            Your purchases are protected from click to delivery. Shop safely knowing we've got your back every step of the way.
          </p>
        </div>
      </section>

      {/* 2. PROTECTION FEATURES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu mb-3">What You Get</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive protection for every purchase on Chavania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROTECTION_FEATURES.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <div 
                key={idx} 
                className="bg-background border border-border/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                  <FeatureIcon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold font-ubuntu text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="border-t border-border bg-muted/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu mb-3">How Buyer Protection Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process that keeps your money safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-background border border-border/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold font-ubuntu text-muted-foreground/30">{step.step}</span>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                      <StepIcon className={`w-6 h-6 ${step.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-ubuntu text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. COVERAGE DETAILS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Coverage Cards */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Coverage Details</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu text-foreground mb-4">What's Covered</h2>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive coverage for your peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COVERAGE_DETAILS.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex items-start gap-4 p-5 bg-background border border-border rounded-2xl hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ItemIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-background border border-border rounded-3xl p-8 lg:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-ubuntu text-foreground mb-1">Important Exclusions</h3>
                <p className="text-sm text-muted-foreground">Please note these exceptions</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Digital Products:</strong> Once downloaded, digital products are non-returnable and non-refundable unless defective.
              </p>
              <p>
                <strong className="text-foreground">Personalized Items:</strong> Custom-made or personalized items cannot be returned unless they're defective or significantly different from what was ordered.
              </p>
              <p>
                <strong className="text-foreground">Perishable Goods:</strong> Food, flowers, and other perishable items are not eligible for return after delivery.
              </p>
              <p>
                <strong className="text-foreground">Used Items:</strong> Items that have been used, damaged by the buyer, or altered after delivery are not covered.
              </p>
              <p>
                <strong className="text-foreground">Policy Violations:</strong> Items that violate our terms of service or community guidelines are not eligible for protection.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="border-t border-border bg-muted/5 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions?</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu text-foreground">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {PROTECTION_FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="border border-border rounded-2xl overflow-hidden bg-background hover:bg-background transition-colors duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium text-sm lg:text-base focus:outline-none"
                  >
                    <span className="font-semibold pr-4">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 border-t border-border/50' : 'max-h-0'}`}
                  >
                    <p className="p-5 text-sm text-muted-foreground leading-relaxed bg-muted/10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">Still have questions about Buyer Protection?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-border rounded-xl hover:bg-muted/50 transition-colors font-medium"
            >
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="border-t border-border bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold font-ubuntu mb-4">Ready to shop with confidence?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Every purchase on Chavania is automatically covered by our Buyer Protection program. Start shopping today!
          </p>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Browse Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
