"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    RotateCcw, Package, Truck, CheckCircle,
    CreditCard, ShieldCheck, ChevronDown, HelpCircle,
    Clock, ArrowRight, FileText, AlertTriangle
} from 'lucide-react';
import Footer from '@/components/ui/Footer';

const RETURN_STEPS = [
    {
        step: "01",
        title: "Initiate Return",
        description: "Go to your orders page, select the item you want to return, and click 'Request Return'.",
        icon: FileText,
        color: "from-blue-500/10 to-blue-600/5",
        iconColor: "text-blue-500"
    },
    {
        step: "02",
        title: "Package Your Item",
        description: "Pack the item securely in its original packaging with all accessories and tags.",
        icon: Package,
        color: "from-secondary/15 to-secondary/5",
        iconColor: "text-secondary"
    },
    {
        step: "03",
        title: "Ship It Back",
        description: "Drop off the package at the designated courier location or schedule a pickup.",
        icon: Truck,
        color: "from-orange-500/10 to-orange-600/5",
        iconColor: "text-orange-500"
    },
    {
        step: "04",
        title: "Get Your Refund",
        description: "Once we receive and inspect the item, we'll process your refund or exchange.",
        icon: CreditCard,
        color: "from-green-500/10 to-green-600/5",
        iconColor: "text-green-500"
    }
];

const RETURN_FAQS = [
    {
        question: "What is Chavania's return policy?",
        answer: "You can return most items within 30 days of delivery for a full refund or exchange. Items must be in their original condition with all tags and packaging intact. Some items like personalized products, perishables, and intimate apparel may be non-returnable."
    },
    {
        question: "How long does it take to get a refund?",
        answer: "Once we receive and inspect your returned item (usually within 3-5 business days of delivery to our warehouse), we'll process your refund. The time it takes for the refund to appear in your account depends on your payment method: M-Pesa (1-2 hours), card payments (3-7 business days), bank transfer (5-10 business days)."
    },
    {
        question: "Do I have to pay for return shipping?",
        answer: "Return shipping is free if the item is defective, damaged, or if we sent you the wrong item. If you're returning an item because you changed your mind, you'll be responsible for the return shipping costs."
    },
    {
        question: "Can I exchange an item instead of returning it?",
        answer: "Yes! You can exchange your item for a different size, color, or product of equal or greater value. Simply initiate a return and select the exchange option during the process."
    },
    {
        question: "What if my item is damaged or defective?",
        answer: "If you receive a damaged or defective item, please contact our support team within 48 hours of delivery. We'll arrange a free return and send you a replacement or issue a full refund, including any shipping costs."
    },
    {
        question: "Are there any items that cannot be returned?",
        answer: "Some items are non-returnable for hygiene and safety reasons, including: intimate apparel, swimwear, personal care products, perishable goods, customized/personalized items, and digital products. These items will be clearly marked as non-returnable on the product page."
    }
];

const ELIGIBILITY_RULES = [
    {
        title: "30-Day Return Window",
        description: "Most items can be returned within 30 days of delivery.",
        icon: Clock
    },
    {
        title: "Original Condition",
        description: "Items must be unworn, unwashed, and with all tags attached.",
        icon: CheckCircle
    },
    {
        title: "Original Packaging",
        description: "Please include all original packaging and accessories.",
        icon: Package
    },
    {
        title: "Proof of Purchase",
        description: "Have your order number or receipt ready when initiating a return.",
        icon: FileText
    }
];

export default function ReturnsPage() {
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
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Returns & Refunds</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight font-ubuntu mb-6 max-w-3xl mx-auto leading-tight">
                        Simple, hassle-free <span className="text-primary">returns</span>
                    </h1>

                    <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
                        Not quite what you expected? No problem. Our easy return process makes it simple to send items back and get the refund or exchange you deserve.
                    </p>
                </div>
            </section>

            {/* 2. RETURN STEPS */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu mb-3">How to Return an Item</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Follow these simple steps to complete your return quickly and easily.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {RETURN_STEPS.map((step, idx) => {
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

                <div className="mt-12 text-center">
                    <Link
                        href="/profile/buyer/orders"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                        Start a Return
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* 3. ELIGIBILITY & POLICY DETAILS */}
            <section className="border-t border-border bg-muted/5 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Eligibility Rules */}
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span>Eligibility</span>
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu text-foreground mb-4">Return Eligibility</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    To be eligible for a return, your item must meet the following criteria:
                                </p>
                            </div>

                            <div className="space-y-4">
                                {ELIGIBILITY_RULES.map((rule, idx) => {
                                    const RuleIcon = rule.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-4 p-5 bg-background border border-border rounded-2xl hover:border-primary/30 hover:shadow-sm transition-all"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <RuleIcon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-foreground mb-1">{rule.title}</h4>
                                                <p className="text-xs text-muted-foreground leading-relaxed">{rule.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Policy Details */}
                        <div className="bg-background border border-border rounded-3xl p-8 lg:p-10">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                    <AlertTriangle className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-ubuntu text-foreground mb-1">Important Notes</h3>
                                    <p className="text-sm text-muted-foreground">Please read these important details</p>
                                </div>
                            </div>

                            <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
                                <p>
                                    <strong className="text-foreground">Refund Processing:</strong> Refunds are processed within 3-5 business days after we receive and inspect your returned item.
                                </p>
                                <p>
                                    <strong className="text-foreground">Original Payment Method:</strong> Refunds will be issued to the original payment method used for the purchase.
                                </p>
                                <p>
                                    <strong className="text-foreground">Sale Items:</strong> Items purchased on sale are eligible for return within 15 days of delivery. Final sale items cannot be returned.
                                </p>
                                <p>
                                    <strong className="text-foreground">Gift Cards:</strong> Gift cards are non-returnable and non-refundable unless required by law.
                                </p>
                                <p>
                                    <strong className="text-foreground">International Returns:</strong> International returns may be subject to additional shipping costs and customs fees.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQS */}
            <section className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Questions?</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu text-foreground">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {RETURN_FAQS.map((faq, index) => {
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
                    <p className="text-muted-foreground mb-4">Still have questions about returns?</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-2.5 border border-border rounded-xl hover:bg-muted/50 transition-colors font-medium"
                    >
                        Contact Support
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
