"use client";

import React from 'react';
import ChatSidebar from '@/components/dashboard/merchant/messages/ChatSidebar';
import ChatWindow from '@/components/dashboard/merchant/messages/ChatWindow';
import { MessageSquare, ArrowLeft, Settings } from 'lucide-react';
import Link from 'next/link';

export default function MerchantMessagesPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex flex-col gap-4">
        <Link 
          href="/profile/merchant" 
          className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-secondary transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Overview
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-ubuntu tracking-tight text-foreground flex items-center gap-3">
              Customer Messages <MessageSquare className="w-7 h-7 text-secondary" />
            </h1>
            <p className="text-muted-foreground mt-1 text-lg">Chat with your customers and resolve inquiries in real-time.</p>
          </div>
          <button className="p-3 bg-muted hover:bg-muted/80 rounded-2xl transition-all text-muted-foreground hover:text-foreground">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messaging Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Sidebar - Chats List */}
        <div className="lg:col-span-1">
          <ChatSidebar />
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-2">
          <ChatWindow />
        </div>
      </div>

      {/* Quick Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-4 rounded-2xl bg-muted/30 border border-border flex items-start gap-4">
          <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-foreground">Fast Response</h5>
            <p className="text-[10px] text-muted-foreground leading-relaxed">Merchants who respond within 1 hour have 2x higher conversion rates.</p>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-muted/30 border border-border flex items-start gap-4">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-foreground">Auto-Reply</h5>
            <p className="text-[10px] text-muted-foreground leading-relaxed">Set up away messages for when your store is closed in settings.</p>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-muted/30 border border-border flex items-start gap-4">
          <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-foreground">Buyer Protection</h5>
            <p className="text-[10px] text-muted-foreground leading-relaxed">Keep all conversations on dotSoko to stay protected by our policies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
