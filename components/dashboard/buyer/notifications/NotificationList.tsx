"use client";

import React from 'react';
import NotificationItem, { NotificationType } from './NotificationItem';

const NOTIFICATIONS_DATA = [
  {
    id: 1,
    type: 'order' as NotificationType,
    title: 'Order Delivered!',
    message: 'Your order #ORD-7721 has been successfully delivered. We hope you enjoy your new headphones!',
    time: '2 hours ago',
    isRead: false,
    link: '/profile/buyer/orders'
  },
  {
    id: 2,
    type: 'promo' as NotificationType,
    title: 'Flash Sale Alert! 🔥',
    message: 'Up to 40% off on all tech accessories for the next 24 hours. Don\'t miss out!',
    time: '5 hours ago',
    isRead: false,
    link: '/categories/tech'
  },
  {
    id: 3,
    type: 'success' as NotificationType,
    title: 'Profile Updated',
    message: 'Your account information has been updated successfully.',
    time: 'Yesterday',
    isRead: true
  },
  {
    id: 4,
    type: 'order' as NotificationType,
    title: 'Payment Received',
    message: 'We have received your payment of KES 21,000 for order #ORD-9901.',
    time: '2 days ago',
    isRead: true,
    link: '/profile/buyer/orders'
  },
  {
    id: 5,
    type: 'alert' as NotificationType,
    title: 'Security Alert',
    message: 'A new login was detected from a Chrome browser on a Linux device.',
    time: '3 days ago',
    isRead: true,
    link: '/profile/buyer/settings'
  },
  {
    id: 6,
    type: 'info' as NotificationType,
    title: 'New Feature: Wishlist Sharing',
    message: 'You can now share your wishlist with friends and family. Check it out in your wishlist tab!',
    time: '1 week ago',
    isRead: true,
    link: '/profile/buyer/wishlist'
  }
];

export default function NotificationList() {
  return (
    <div className="bg-background border border-border rounded-3xl overflow-hidden shadow-sm">
      <div className="flex flex-col">
        {NOTIFICATIONS_DATA.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
      
      {/* Load More */}
      <div className="p-6 bg-muted/10 border-t border-border flex items-center justify-center">
        <button className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
          View older notifications
        </button>
      </div>
    </div>
  );
}
