"use client";

import React from 'react';
import OrderCard, { OrderStatus } from './OrderCard';

const ORDERS_DATA = [
  {
    id: '#ORD-7721',
    date: 'Oct 12, 2023',
    status: 'Delivered' as OrderStatus,
    total: 'KES 12,900',
    items: [
      { name: 'Wireless Noise Cancelling Headphones', quantity: 1, price: 'KES 8,500' },
      { name: 'USB-C Fast Charger', quantity: 2, price: 'KES 4,400' }
    ]
  },
  {
    id: '#ORD-8812',
    date: 'Oct 15, 2023',
    status: 'In Transit' as OrderStatus,
    total: 'KES 4,500',
    items: [
      { name: 'Leather Slim Wallet', quantity: 1, price: 'KES 4,500' }
    ]
  },
  {
    id: '#ORD-9901',
    date: 'Oct 18, 2023',
    status: 'Processing' as OrderStatus,
    total: 'KES 21,000',
    items: [
      { name: 'Mechanical RGB Keyboard', quantity: 1, price: 'KES 15,000' },
      { name: 'Gaming Mouse Pad (Large)', quantity: 1, price: 'KES 6,000' }
    ]
  },
  {
    id: '#ORD-4452',
    date: 'Sept 28, 2023',
    status: 'Cancelled' as OrderStatus,
    total: 'KES 3,200',
    items: [
      { name: 'Stainless Steel Water Bottle', quantity: 1, price: 'KES 3,200' }
    ]
  }
];

export default function OrdersList() {
  return (
    <div className="space-y-6">
      {ORDERS_DATA.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
      
      {/* Pagination Placeholder */}
      <div className="flex items-center justify-center pt-4">
        <button className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
          Load more orders
        </button>
      </div>
    </div>
  );
}
