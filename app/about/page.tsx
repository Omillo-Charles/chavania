"use client";

import React from 'react';
import Link from 'next/link';
import {
    Globe, Users, ShieldCheck, Zap,
    Store, ShoppingBag, Target, ArrowRight,
    TrendingUp, Sparkles, HeartHandshake, Box
} from 'lucide-react';
import Footer from '@/components/ui/Footer';

const CORE_VALUES = [
    {
        title: "Empowering Merchants",
        description: "We give independent sellers the tools to build their own brands, offering complete customizability alongside powerful discovery features.",
        icon: Store,
        color: "from-blue-500/10 to-blue-600/5",
        iconColor: "text-blue-500",
    },
    {
        title: "Absolute Trust",
        description: "Our secure escrow payment system and Buyer Protection guarantee ensure that every transaction is safe, transparent, and reliable.",
        icon: ShieldCheck,
        color: "from-green-500/10 to-green-600/5",
        iconColor: "text-green-500",
    },
    {
        title: "Social Discovery",
        description: "Shopping should be an experience. We merge e-commerce with social feeds so buyers can interact, share, and discover organically.",
        icon: Users,
        color: "from-purple-500/10 to-purple-600/5",
        iconColor: "text-purple-500",
    },
    {
        title: "Seamless Logistics",
        description: "With chavaniaExpress and our integrated local courier network, we bridge the gap between order placement and doorstep delivery.",
        icon: Zap,
        color: "from-orange-500/10 to-orange-600/5",
        iconColor: "text-orange-500",
    }
];

const MILESTONES = [
    { year: "2026", title: "The Inception", description: "Chavania was born from a vision to democratize digital commerce for local businesses." },
    { year: "2027", title: "Social Commerce", description: "Launched our interactive buyer feeds and fully customizable merchant storefronts." },
    { year: "2028", title: "chavaniaExpress Logistics", description: "Rolled out an integrated fulfillment network reducing delivery times by 40%." },
    { year: "Future", title: "Borderless Trade", description: "Expanding across borders to connect merchants and buyers continent-wide." }
];

export default function AboutPage() {
    return (
        <div className="w-full bg-background min-h-screen text-foreground">

            {/* 1. HERO SECTION */}
            <section className="relative overflow-hidden border-b border-border pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-muted/20 to-transparent">
                {/* Subtle grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

                {/* Ambient glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Our Vision</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight font-ubuntu mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000">
                        About <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                        Chavania
                        </span>
                    </h1>

                    <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
                        We are building the infrastructure for the next generation of trade. Chavania bridges the gap between fragmented social commerce and rigid giant platforms, giving power back to local merchants and delivering absolute trust to buyers.
                    </p>
                </div>
            </section>

            {/* 2. THE MISSION / THE PROBLEM WE SOLVE */}
            <section className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                            <Target className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold font-ubuntu leading-tight">
                            The sweet spot between <br />
                            <span className="text-secondary">Shopify</span> and <span className="text-primary">Amazon</span>.
                        </h2>
                        <div className="space-y-6 text-muted-foreground leading-relaxed">
                            <p>
                                For too long, businesses had to choose between building an isolated storefront that struggles to get traffic, or listing on a massive marketplace where their brand gets lost among millions of identical listings.
                            </p>
                            <p>
                                <strong className="text-foreground">Chavania changes the paradigm.</strong> We provide merchants with the direct-to-consumer storefront tools they need to stand out, while plugging them into a massive, social-feed-driven ecosystem where buyers can organically discover, share, and purchase their products.
                            </p>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold font-ubuntu text-foreground">10k+</span>
                                <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Active Merchants</span>
                            </div>
                            <div className="w-px h-12 bg-border"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold font-ubuntu text-foreground">2.5M</span>
                                <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Products Listed</span>
                            </div>
                            <div className="w-px h-12 bg-border"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold font-ubuntu text-foreground">100%</span>
                                <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Secure Escrow</span>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Graphic / Image Placeholder */}
                    <div className="relative">
                        <div className="aspect-square max-w-md mx-auto relative flex items-center justify-center bg-transparent">
                            <div className="grid grid-cols-2 gap-4 p-8 relative z-10 w-full h-full">
                                <div className="bg-background rounded-3xl border border-border/50 shadow-sm p-6 flex flex-col items-center justify-center gap-3 transform translate-y-8 animate-[bounce_6s_ease-in-out_infinite]">
                                    <ShoppingBag className="w-10 h-10 text-primary" />
                                    <div className="w-16 h-2 bg-muted rounded-full"></div>
                                    <div className="w-10 h-2 bg-muted rounded-full"></div>
                                </div>
                                <div className="bg-background rounded-3xl border border-border/50 shadow-sm p-6 flex flex-col items-center justify-center gap-3 transform -translate-y-4 animate-[bounce_5s_ease-in-out_infinite_reverse]">
                                    <Store className="w-10 h-10 text-secondary" />
                                    <div className="w-20 h-2 bg-muted rounded-full"></div>
                                    <div className="w-14 h-2 bg-muted rounded-full"></div>
                                </div>
                                <div className="bg-background rounded-3xl border border-border/50 shadow-sm p-6 flex flex-col items-center justify-center gap-3 transform translate-y-4 animate-[bounce_7s_ease-in-out_infinite]">
                                    <Users className="w-10 h-10 text-purple-500" />
                                    <div className="w-12 h-2 bg-muted rounded-full"></div>
                                    <div className="w-16 h-2 bg-muted rounded-full"></div>
                                </div>
                                <div className="bg-background rounded-3xl border border-border/50 shadow-sm p-6 flex flex-col items-center justify-center gap-3 transform -translate-y-8 animate-[bounce_6.5s_ease-in-out_infinite_reverse]">
                                    <Box className="w-10 h-10 text-orange-500" />
                                    <div className="w-16 h-2 bg-muted rounded-full"></div>
                                    <div className="w-8 h-2 bg-muted rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE VALUES */}
            <section className="border-y border-border bg-muted/5 py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold font-ubuntu mb-4">Our Core Pillars</h2>
                        <p className="text-muted-foreground text-lg">
                            The foundational principles that guide every feature we build and every market we enter.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CORE_VALUES.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-background border border-border/80 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 group"
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                                        <Icon className={`w-7 h-7 ${value.iconColor}`} />
                                    </div>
                                    <h3 className="text-xl font-bold font-ubuntu text-foreground mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. DUAL SIDED MARKETPLACE */}
            <section className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* For Buyers */}
                    <div className="bg-background border border-border rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <ShoppingBag className="w-40 h-40" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
                                <HeartHandshake className="w-4 h-4" /> For Buyers
                            </div>
                            <h3 className="text-3xl font-bold font-ubuntu mb-4">Shop with Absolute Confidence</h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Discover unique products from verified local sellers through an engaging social feed. With our escrow payment system, your money is held securely until you confirm your order has arrived perfectly.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {['100% Buyer Protection Guarantee', 'Interactive social shopping feeds', 'Real-time order tracking', 'Seamless return process'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                        <ShieldCheck className="w-5 h-5 text-primary" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/categories"
                                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                            >
                                Start Shopping <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* For Merchants */}
                    <div className="bg-muted/30 border border-border rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Store className="w-40 h-40" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-8">
                                <TrendingUp className="w-4 h-4" /> For Merchants
                            </div>
                            <h3 className="text-3xl font-bold font-ubuntu mb-4">Build Your Digital Empire</h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Set up a fully customized storefront in minutes. Get access to built-in marketing tools, detailed analytics, and integrated logistics, allowing you to focus on what you do best: creating great products.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {['Customizable Brand Storefronts', 'Integrated chavaniaExpress fulfillment', 'Lower transaction fees', 'Direct customer engagement tools'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                        <Sparkles className="w-5 h-5 text-secondary" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/profile/auth?tab=signup"
                                className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all"
                            >
                                Become a Seller <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* 5. ROADMAP / TIMELINE */}
            <section className="border-t border-border bg-background py-20 lg:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold font-ubuntu mb-4">The Journey So Far</h2>
                        <p className="text-muted-foreground text-lg">
                            We are moving fast, but we're just getting started. Here is a glimpse into our roadmap.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-gradient-to-b from-primary/50 via-border to-transparent md:-translate-x-1/2"></div>

                        <div className="space-y-8 md:space-y-12 relative z-10">
                            {MILESTONES.map((milestone, idx) => (
                                <div key={idx} className="relative flex items-center md:justify-between group">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full border-4 border-background bg-primary/10 flex items-center justify-center md:-translate-x-1/2 transition-colors duration-300 group-hover:bg-primary/20">
                                        <div className="w-3 h-3 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></div>
                                    </div>

                                    {/* Content */}
                                    <div className={`w-full pl-20 md:pl-0 md:w-[calc(50%-3rem)] ${idx % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                                        <div className="bg-background border border-border/50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1">
                                            <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-foreground font-bold text-sm tracking-widest uppercase mb-4">
                                                {milestone.year}
                                            </span>
                                            <h4 className="font-bold font-ubuntu text-foreground text-xl lg:text-2xl mb-3">
                                                {milestone.title}
                                            </h4>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
