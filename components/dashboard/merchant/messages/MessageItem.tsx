"use client";

import React from 'react';

interface MessageItemProps {
  message: {
    id: number;
    text: string;
    time: string;
    sender: 'me' | 'them';
  };
}

export default function MessageItem({ message }: MessageItemProps) {
  const isMe = message.sender === 'me';

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
        isMe 
          ? 'bg-secondary text-secondary-foreground rounded-tr-none' 
          : 'bg-muted text-foreground rounded-tl-none'
      }`}>
        <p className="leading-relaxed">{message.text}</p>
        <p className={`text-[10px] mt-1.5 opacity-70 ${isMe ? 'text-right' : 'text-left'}`}>
          {message.time}
        </p>
      </div>
    </div>
  );
}
