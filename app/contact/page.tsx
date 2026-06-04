"use client";

import React, { useState } from 'react';
import { 
  Mail, Phone, Store, MessageSquare, ShieldCheck, 
  ChevronDown, HelpCircle, ArrowRight, Send, Clock, User, 
  Building, CheckCircle, RefreshCw 
} from 'lucide-react';
import Footer from '@/components/ui/Footer';

const CONTACT_DEPARTMENTS = [
  {
    title: "Buyer Support",
    description: "Assistance with orders, payments, returns, and buyer account issues.",
    email: "support@dotsoko.com",
    phone: "+254 (0) 700 123 456",
    hours: "24/7 Support via live chat & email",
    icon: User,
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-500",
    hoverBorder: "hover:border-blue-500/40"
  },
  {
    title: "Merchant & Seller Hub",
    description: "Resources and support for shops, independent sellers, and brand partners.",
    email: "merchant@dotsoko.com",
    phone: "+254 (0) 700 987 654",
    hours: "Mon - Fri, 8:00 AM - 6:00 PM EAT",
    icon: Store,
    color: "from-secondary/15 to-secondary/5",
    iconColor: "text-secondary",
    hoverBorder: "hover:border-secondary/40"
  },
  {
    title: "Partnerships & API",
    description: "Integrations, payment gateway cooperations, and logistics partnerships.",
    email: "partners@dotsoko.com",
    phone: "partnerships.dotsoko (Skype)",
    hours: "Response within 24 business hours",
    icon: Building,
    color: "from-purple-500/10 to-purple-600/5",
    iconColor: "text-purple-500",
    hoverBorder: "hover:border-purple-500/40"
  },
  {
    title: "Corporate & Press",
    description: "Media inquiries, corporate announcements, and investor relations.",
    email: "press@dotsoko.com",
    phone: "+254 (0) 722 000 111",
    hours: "Mon - Fri, 9:00 AM - 5:00 PM GMT",
    icon: ShieldCheck,
    color: "from-green-500/10 to-green-600/5",
    iconColor: "text-green-500",
    hoverBorder: "hover:border-green-500/40"
  }
];

const FAQS = [
  {
    question: "How do I start selling on dotSoko?",
    answer: "Getting started is simple! Click the 'Profile' icon in the navbar, toggle to 'Sign Up', and select 'Merchant Account'. Once your email and business details are verified, you can immediately begin listing products and customized store configurations."
  },
  {
    question: "How does dotSoko compare to Shopify or Amazon?",
    answer: "dotSoko merges the localized direct-to-consumer storefront tools of Shopify with the social feed discovery and logistics infrastructure of Amazon. It empowers merchants with complete customizability, lower transaction fees, and interactive client feeds where buyers can directly comment, share, and buy products."
  },
  {
    question: "What payment gateways are supported?",
    answer: "We support a wide array of payment channels tailored for diverse markets, including M-Pesa, card payments (Visa, Mastercard), bank transfers, and standard digital wallets. All payments are secured with end-to-end encryption and buyer protection escrow."
  },
  {
    question: "What is dotSoko's Buyer Protection policy?",
    answer: "Buyer Protection guarantees that your funds are kept in escrow until the shipping tracking confirms successful delivery and you verify that the items match the seller's description. If there's an issue, you can raise a dispute within 48 hours for a full refund."
  },
  {
    question: "How is delivery and logistics handled?",
    answer: "Sellers can choose to fulfill orders independently, use integrated local couriers, or opt for dotSoko Fulfillment (sokoExpress). For buyers, shipping choices and estimated delivery times are clearly calculated during checkout."
  }
];


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'buyer',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormStatus('loading');
    
    // Simulate API request
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        role: 'buyer',
        subject: '',
        message: ''
      });
    }, 1500);
  };

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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with .soko</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight font-ubuntu mb-6 max-w-3xl mx-auto leading-tight">
            How can we help your <span className="text-primary">business</span> grow?
          </h1>
          
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
            Whether you are a buyer looking for support, or a merchant ready to take on the global market, our dedicated teams are here to support your journey.
          </p>
        </div>
      </section>

      {/* 2. CORE CONTACT DEPARTMENTS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACT_DEPARTMENTS.map((dept, idx) => {
            const DeptIcon = dept.icon;
            return (
              <div 
                key={idx} 
                className={`bg-muted/10 border border-border/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 group flex flex-col justify-between ${dept.hoverBorder}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                    <DeptIcon className={`w-6 h-6 ${dept.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold font-ubuntu text-foreground mb-2 group-hover:text-primary transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {dept.description}
                  </p>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-border/50 text-xs">
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <Mail className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                    <a href={`mailto:${dept.email}`} className="hover:text-primary hover:underline truncate">{dept.email}</a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{dept.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{dept.hours}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FORM & FAQ SECTION */}
      <section className="border-t border-border bg-muted/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Form Container (7 Cols on desktop) */}
          <div className="lg:col-span-7 bg-background border border-border rounded-3xl p-6 lg:p-10 shadow-sm relative overflow-hidden">
            
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-12 px-4 transition-all">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold font-ubuntu mb-3">Message Sent Successfully!</h3>
                <p className="text-muted-foreground max-w-md mb-8">
                  Thank you for reaching out to .soko. Our team has received your ticket and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  Send another message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu mb-2">Send us a Message</h2>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and we will route your inquiry to the appropriate department.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full bg-muted/30 border border-border rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@example.com"
                          className="w-full bg-muted/30 border border-border rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Account Type */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground">Account Type</label>
                      <div className="relative">
                        <Store className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full bg-muted/30 border border-border rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
                        >
                          <option value="buyer">I am a Buyer</option>
                          <option value="merchant">I am a Merchant/Seller</option>
                          <option value="partner">Partnership Inquiry</option>
                          <option value="developer">Developer / API Integrator</option>
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help?"
                        className="w-full bg-muted/30 border border-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-foreground">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here... Please include order IDs or merchant details if applicable."
                      className="w-full bg-muted/30 border border-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'loading' || !formData.name || !formData.email || !formData.message}
                    className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Ticket
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* FAQs Accordion (5 Cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Instant Answers</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu text-foreground">Frequently Asked</h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div 
                    key={index} 
                    className="border border-border rounded-2xl overflow-hidden bg-background/50 hover:bg-background transition-colors duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 text-left font-medium text-sm lg:text-base focus:outline-none"
                    >
                      <span className="font-semibold pr-4">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 border-t border-border/50' : 'max-h-0'}`}
                    >
                      <p className="p-5 text-sm text-muted-foreground leading-relaxed bg-muted/10">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
}
