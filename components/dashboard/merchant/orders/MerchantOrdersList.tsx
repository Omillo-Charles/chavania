"use client";

import React from 'react';
import MerchantOrderCard, { MerchantOrderStatus } from './MerchantOrderCard';

const MERCHANT_ORDERS_DATA = [
  {
    id: '#SL-7721',
    customer: {
      name: 'Alice Wambui',
      email: 'alice.w@example.com',
      address: 'Apt 4B, Silver Heights, Ngong Road, Nairobi'
    },
    date: 'Oct 20, 2023',
    status: 'Processing' as MerchantOrderStatus,
    total: 'KES 12,900',
    items: [
      { name: 'Wireless Noise Cancelling Headphones', quantity: 1, price: 'KES 8,500' },
      { name: 'USB-C Fast Charger', quantity: 2, price: 'KES 4,400' }
    ]
  },
  {
    id: '#SL-8812',
    customer: {
      name: 'David Maina',
      email: 'd.maina@domain.co.ke',
      address: 'Delta Corner Tower, Westlands, Nairobi'
    },
    date: 'Oct 19, 2023',
    status: 'Shipped' as MerchantOrderStatus,
    total: 'KES 4,500',
    items: [
      { name: 'Leather Slim Wallet', quantity: 1, price: 'KES 4,500' }
    ]
  },
  {
    id: '#SL-9901',
    customer: {
      name: 'Sarah Kemunto',
      email: 'sarah.k@provider.com',
      address: 'House 12, Savannah Estate, Donholm, Nairobi'
    },
    date: 'Oct 18, 2023',
    status: 'Delivered' as MerchantOrderStatus,
    total: 'KES 21,000',
    items: [
      { name: 'Mechanical RGB Keyboard', quantity: 1, price: 'KES 15,000' },
      { name: 'Gaming Mouse Pad (Large)', quantity: 1, price: 'KES 6,000' }
    ]
  }
];

export default function MerchantOrdersList() {
  return (
    <div className="space-y-6">
      {MERCHANT_ORDERS_DATA.map((order) => (
        <MerchantOrderCard key={order.id} order={order} />
      ))}
      
      <div className="flex items-center justify-center pt-4">
        <button className="text-sm font-bold text-muted-foreground hover:text-secondary transition-colors">
          View older transactions
        </button>
      </div>
    </div>
  );
}
