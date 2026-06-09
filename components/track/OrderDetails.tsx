"use client";

import React from 'react';
import OrderCard, { OrderStatus } from '@/components/dashboard/buyer/orders/OrderCard';

interface OrderDetailsProps {
  orderId: string;
}

export default function OrderDetails({ orderId }: OrderDetailsProps) {
  // Mock data formatted for OrderCard based on the tracked orderId
  const order = {
    id: orderId.startsWith('#') ? orderId : `#${orderId}`,
    date: 'June 06, 2026',
    status: 'Delivered' as OrderStatus,
    total: 'KES 21,000',
    items: [
      { name: 'Mechanical RGB Keyboard', quantity: 1, price: 'KES 15,000' },
      { name: 'Gaming Mouse Pad (Large)', quantity: 1, price: 'KES 6,000' }
    ]
  };

  return (
    <div className="w-full">
      <OrderCard order={order} />
    </div>
  );
}
