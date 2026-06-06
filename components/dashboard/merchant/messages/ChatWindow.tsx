"use client";

import React from 'react';
import { Phone, Video, MoreVertical, Send, Smile, Paperclip } from 'lucide-react';
import MessageItem from './MessageItem';

const MESSAGES = [
  { id: 1, text: 'Hello! I saw your listing for the Wireless Headphones.', time: '10:15 AM', sender: 'them' as const },
  { id: 2, text: 'Hi Alice! Yes, it is still available. How can I help you?', time: '10:18 AM', sender: 'me' as const },
  { id: 3, text: 'Is the item still available in blue?', time: '10:24 AM', sender: 'them' as const },
];

export default function ChatWindow() {
  return (
    <div className="bg-background border border-border rounded-3xl overflow-hidden flex flex-col h-[700px] shadow-sm">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-border bg-muted/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary font-bold text-lg border border-secondary/20">
            AW
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground leading-tight">Alice Wambui</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2.5 hover:bg-muted rounded-xl transition-colors text-muted-foreground">
            <Phone className="w-4 h-4" />
          </button>
          <button className="p-2.5 hover:bg-muted rounded-xl transition-colors text-muted-foreground">
            <Video className="w-4 h-4" />
          </button>
          <button className="p-2.5 hover:bg-muted rounded-xl transition-colors text-muted-foreground">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-6 bg-muted/5">
        <div className="flex flex-col">
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-muted px-3 py-1 rounded-full">
              Today
            </span>
          </div>
          {MESSAGES.map((msg) => (
            <MessageItem key={msg.id} message={msg} />
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 sm:p-6 border-t border-border bg-background">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <button className="p-2.5 hover:bg-muted rounded-xl transition-colors text-muted-foreground">
              <Smile className="w-5 h-5" />
            </button>
            <button className="p-2.5 hover:bg-muted rounded-xl transition-colors text-muted-foreground">
              <Paperclip className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="w-full pl-4 pr-12 py-3 bg-muted/50 border border-transparent focus:border-secondary/30 focus:bg-background rounded-2xl text-sm transition-all outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-secondary text-secondary-foreground rounded-xl hover:opacity-90 transition-all shadow-lg shadow-secondary/20">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
