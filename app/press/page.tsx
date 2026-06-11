"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Newspaper, MessageSquare, Download, FileText,
  Mail, Phone, Building, Calendar,
  ArrowRight, ChevronDown, HelpCircle
} from 'lucide-react';
import Footer from '@/components/ui/Footer';

const PRESS_RESOURCES = [
  {
    title: "Press Kit",
    description: "Official logos, brand guidelines, and press releases",
    icon: FileText,
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-500"
  },
  {
    title: "Media Contacts",
    description: "Connect with our communications team",
    icon: Mail,
    color: "from-secondary/15 to-secondary/5",
    iconColor: "text-secondary"
  },
  {
    title: "Company Factsheet",
    description: "Key statistics and company information",
    icon: Building,
    color: "from-green-500/10 to-green-600/5",
    iconColor: "text-green-500"
  },
  {
    title: "Press Releases",
    description: "Latest news and announcements",
    icon: Newspaper,
    color: "from-purple-500/10 to-purple-600/5",
    iconColor: "text-purple-500"
  }
];

const PRESS_FAQS = [
  {
    question: "How do I request an interview with dotSoko leadership?",
    answer: "To request an interview with a member of our leadership team, please email us at press@dotsoko.com with your request, including details about your media outlet, the topic you'd like to discuss, and your deadline. We'll get back to you as soon as possible."
  },
  {
    question: "Can I use dotSoko's logos and brand assets?",
    answer: "Yes! You can download our official brand assets from our press kit. Please follow our brand guidelines when using our logos and trademarks."
  },
  {
    question: "Does dotSoko accept guest post contributions?",
    answer: "We're always open to collaboration opportunities! Please send your pitch to press@dotsoko.com with details about your idea and audience reach."
  },
  {
    question: "How do I subscribe to press releases?",
    answer: "You can subscribe to our press releases by sending an email to press@dotsoko.com with 'Subscribe' in the subject line."
  }
];

const MEDIA_CONTACTS = [
  {
    name: "Sarah Johnson",
    role: "Head of Communications",
    email: "sarah.j@dotsoko.com",
    phone: "+254 (0) 700 123 456"
  },
  {
    name: "Michael Chen",
    role: "PR Manager",
    email: "michael.c@dotsoko.com",
    phone: "+254 (0) 700 987 654"
  }
];

const KEY_MILESTONES = [
  {
    date: "June 2026",
    title: "Company Founded",
    description: "dotSoko launched with a vision to democratize digital commerce for local businesses."
  },
  {
    date: "March 2027",
    title: "10K Merchants",
    description: "Reached 10,000 active merchants on the platform."
  },
  {
    date: "September 2027",
    title: "sokoExpress Launch",
    description: "Launched integrated logistics network across East Africa."
  },
  {
    date: "January 2028",
    title: "2.5M Products",
    description: "Platform now offers over 2.5 million products listed."
  }
];

export default function PressPage() {
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
            <Newspaper className="w-3.5 h-3.5" />
            <span>Press & Media</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight font-ubuntu mb-6 max-w-3xl mx-auto leading-tight">
            For the <span className="text-primary">press</span>
          </h1>
          
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
            Welcome to the dotSoko press room. Find press releases, brand assets, and media contacts.
          </p>
        </div>
      </section>

      {/* 2. PRESS RESOURCES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu mb-3">Press Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to cover dotSoko
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRESS_RESOURCES.map((resource, idx) => {
            const ResourceIcon = resource.icon;
            return (
              <div 
                key={idx} 
                className="bg-background border border-border/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                  <ResourceIcon className={`w-6 h-6 ${resource.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold font-ubuntu text-foreground mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
              </div>
              );
          })}
        </div>
      </section>

      {/* 3. MEDIA CONTACTS & COMPANY MILESTONES */}
      <section className="border-t border-border bg-muted/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Media Contacts */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Media Contacts</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold font-ubuntu text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reach out to our communications team for interviews, press inquiries, and collaborations.
                </p>
              </div>

              <div className="space-y-4">
                {MEDIA_CONTACTS.map((contact, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 bg-background border border-border rounded-2xl hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <h4 className="font-bold text-sm text-foreground mb-1">{contact.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{contact.role}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Mail className="w-3.5 h-3.5" />
                      <a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{contact.phone}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-3">General inquiries: <a href="mailto:press@dotsoko.com" className="text-primary font-medium hover:underline">press@dotsoko.com</a></p>
              </div>
            </div>

            {/* Company Milestones */}
            <div className="bg-background border border-border rounded-3xl p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-ubuntu text-foreground mb-1">Company Milestones</h3>
                  <p className="text-sm text-muted-foreground">Our journey so far</p>
                </div>
              </div>

              <div className="space-y-5">
                {KEY_MILESTONES.map((milestone, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-5 border-b border-border last:border-0 last:pb-0">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-muted-foreground">{milestone.date}</span>
                      <h4 className="font-bold text-sm text-foreground mb-1">{milestone.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
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
          {PRESS_FAQS.map((faq, index) => {
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
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Link
            href="mailto:press@dotsoko.com"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-border rounded-xl hover:bg-muted/50 transition-colors font-medium"
          >
            Email Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
