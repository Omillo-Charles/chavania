"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";
import Footer from "@/components/ui/Footer";
import {
  TABS,
  LAST_UPDATED,
  EFFECTIVE_DATE,
  COMPANY,
  CONTACT_EMAIL,
  JURISDICTION,
} from "./data";

function SectionCard({
  heading,
  body,
}: {
  heading: string;
  body: string[];
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-background transition-all duration-200 hover:border-primary/30">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-muted/30 transition-colors"
        aria-expanded={open}
      >
        <h2 className="text-base font-bold text-foreground font-ubuntu leading-snug">
          {heading}
        </h2>
        {open ? (
          <ChevronUp className="w-4 h-4 text-primary shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>

      {open && (
        <div className="px-6 pb-6 space-y-3 border-t border-border/50 pt-4">
          {body.map((para, i) => (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState("platform");

  const currentTab = TABS.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen bg-muted/20 flex flex-col">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-background border-b border-border">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--secondary)) 0%, transparent 40%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold font-ubuntu text-foreground tracking-tight">
                Security
              </h1>
              <p className="text-muted-foreground mt-2 text-sm max-w-2xl">
                Security is core to everything we build at Chavania. This page
                covers how we protect the platform and your data, how to keep
                your account safe, and how to report vulnerabilities.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mt-4 text-xs text-muted-foreground">
                <span>
                  <strong className="text-foreground">Effective:</strong>{" "}
                  {EFFECTIVE_DATE}
                </span>
                <span>
                  <strong className="text-foreground">Last updated:</strong>{" "}
                  {LAST_UPDATED}
                </span>
                <span>
                  <strong className="text-foreground">Jurisdiction:</strong>{" "}
                  {JURISDICTION}
                </span>
                <span>
                  <strong className="text-foreground">Contact:</strong>{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Tab Bar */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 lg:px-8 py-10">
        <div className="mb-8 p-6 rounded-2xl bg-primary/5 border border-primary/15">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{currentTab.icon}</span>
            <h2 className="text-xl font-bold font-ubuntu text-foreground">
              {currentTab.label}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {currentTab.intro}
          </p>
        </div>

        <div className="space-y-4">
          {currentTab.sections.map((section, i) => (
            <SectionCard
              key={i}
              heading={section.heading}
              body={section.body}
            />
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-border bg-background text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            Security is a shared responsibility between{" "}
            <strong className="text-foreground">{COMPANY}</strong> and every
            person who uses the platform. If you spot something suspicious,
            please tell us.
          </p>
          <p className="text-sm text-muted-foreground">
            Report security issues to{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-primary font-semibold hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
