"use client";

import React from 'react';
import { Filter, MoreVertical } from 'lucide-react';
import Searchbar from '../../../features/Searchbar';

interface Chat {
    id: number;
    name: string;
    lastMessage: string;
    time: string;
    unreadCount: number;
    isOnline: boolean;
    initials: string;
}

const CHATS: Chat[] = [
    { id: 1, name: 'Alice Wambui', lastMessage: 'Is the item still available in blue?', time: '10:24 AM', unreadCount: 2, isOnline: true, initials: 'AW' },
    { id: 2, name: 'David Maina', lastMessage: 'Thank you for the fast delivery!', time: 'Yesterday', unreadCount: 0, isOnline: false, initials: 'DM' },
    { id: 3, name: 'Sarah Kemunto', lastMessage: 'Can I get a discount for bulk purchase?', time: 'Oct 18', unreadCount: 1, isOnline: true, initials: 'SK' },
    { id: 4, name: 'John Kamau', lastMessage: 'I would like to return the charger.', time: 'Oct 15', unreadCount: 0, isOnline: false, initials: 'JK' },
];

export default function ChatSidebar() {
    return (
        <div className="bg-background border border-border rounded-3xl overflow-hidden flex flex-col h-[700px] shadow-sm">
            <div className="p-6 border-b border-border space-y-4 bg-muted/5">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold font-ubuntu">Messages</h3>
                    <button className="p-2 hover:bg-muted rounded-xl transition-colors">
                        <Filter className="w-4 h-4 text-muted-foreground" />
                    </button>
                </div>
                <Searchbar
                    placeholder="Search chats..."
                    inputClassName="bg-muted/50 border border-transparent focus:border-secondary/30 focus:bg-background rounded-xl"
                />
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="divide-y divide-border/50">
                    {CHATS.map((chat) => (
                        <div key={chat.id} className="p-4 flex items-center gap-4 hover:bg-muted/30 transition-all cursor-pointer group relative">
                            <div className="relative flex-shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary font-bold text-lg border border-secondary/20">
                                    {chat.initials}
                                </div>
                                {chat.isOnline && (
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-background rounded-full"></div>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                    <h4 className="text-sm font-bold text-foreground truncate group-hover:text-secondary transition-colors">
                                        {chat.name}
                                    </h4>
                                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">{chat.time}</span>
                                </div>
                                <p className={`text-xs truncate ${chat.unreadCount > 0 ? 'text-foreground font-bold' : 'text-muted-foreground'}`}>
                                    {chat.lastMessage}
                                </p>
                            </div>

                            {chat.unreadCount > 0 && (
                                <div className="absolute right-4 bottom-4 w-5 h-5 bg-secondary text-secondary-foreground text-[10px] font-bold rounded-lg flex items-center justify-center shadow-lg shadow-secondary/20">
                                    {chat.unreadCount}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
