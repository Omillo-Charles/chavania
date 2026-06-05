"use client";

import React from 'react';
import { ShoppingBag, Tag, Info, AlertCircle, CheckCircle2, MoreVertical, Clock } from 'lucide-react';

export type NotificationType = 'order' | 'promo' | 'info' | 'alert' | 'success';

interface NotificationItemProps {
  notification: {
    id: number;
    type: NotificationType;
    title: string;
    message: string;
    time: string;
    isRead: boolean;
    link?: string;
  };
}

const getIcon = (type: NotificationType) => {
  switch (type) {
    case 'order': return { icon: ShoppingBag, color: 'text-blue-500', bg: 'bg-blue-500/10' };
    case 'promo': return { icon: Tag, color: 'text-secondary', bg: 'bg-secondary/10' };
    case 'alert': return { icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-500/10' };
    case 'success': return { icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-500/10' };
    default: return { icon: Info, color: 'text-primary', bg: 'bg-primary/10' };
  }
};

export default function NotificationItem({ notification }: NotificationItemProps) {
  const { icon: Icon, color, bg } = getIcon(notification.type);

  return (
    <div className={`group p-4 sm:p-6 flex gap-4 transition-all duration-300 hover:bg-muted/50 border-b border-border last:border-0 ${!notification.isRead ? 'bg-primary/5 border-l-4 border-l-primary' : ''}`}>
      <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className={`text-sm font-bold text-foreground leading-tight ${!notification.isRead ? 'text-primary' : ''}`}>
              {notification.title}
            </h4>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {notification.message}
            </p>
          </div>
          <button className="p-1 hover:bg-muted rounded-lg transition-colors text-muted-foreground flex-shrink-0">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-4 mt-3">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Clock className="w-3.5 h-3.5" />
            {notification.time}
          </span>
          {notification.link && (
            <button className="text-xs font-bold text-primary hover:underline">
              View Details
            </button>
          )}
          {!notification.isRead && (
            <span className="w-2 h-2 bg-primary rounded-full"></span>
          )}
        </div>
      </div>
    </div>
  );
}
