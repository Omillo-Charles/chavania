"use client";

import React from 'react';
import CustomerCard from './CustomerCard';

const CUSTOMERS_DATA = [
  {
    id: 'CST-001',
    name: 'Alice Wambui',
    email: 'alice.w@example.com',
    location: 'Kilimani, Nairobi',
    totalOrders: 12,
    totalSpent: 'KES 84,200',
    lastOrder: '2 days ago',
    isTopCustomer: true,
    initials: 'AW'
  },
  {
    id: 'CST-002',
    name: 'David Maina',
    email: 'd.maina@domain.co.ke',
    location: 'Westlands, Nairobi',
    totalOrders: 8,
    totalSpent: 'KES 42,500',
    lastOrder: '5 days ago',
    isTopCustomer: false,
    initials: 'DM'
  },
  {
    id: 'CST-003',
    name: 'Sarah Kemunto',
    email: 'sarah.k@provider.com',
    location: 'Donholm, Nairobi',
    totalOrders: 15,
    totalSpent: 'KES 120,400',
    lastOrder: 'Yesterday',
    isTopCustomer: true,
    initials: 'SK'
  },
  {
    id: 'CST-004',
    name: 'John Kamau',
    email: 'john.k@mail.com',
    location: 'Syokimau, Machakos',
    totalOrders: 3,
    totalSpent: 'KES 15,800',
    lastOrder: '1 week ago',
    isTopCustomer: false,
    initials: 'JK'
  },
  {
    id: 'CST-005',
    name: 'Grace Mutua',
    email: 'g.mutua@business.ke',
    location: 'Thika, Kiambu',
    totalOrders: 5,
    totalSpent: 'KES 28,900',
    lastOrder: '2 weeks ago',
    isTopCustomer: false,
    initials: 'GM'
  },
  {
    id: 'CST-006',
    name: 'Peter Omondi',
    email: 'p.omondi@gmail.com',
    location: 'Kisumu City',
    totalOrders: 22,
    totalSpent: 'KES 245,000',
    lastOrder: '3 days ago',
    isTopCustomer: true,
    initials: 'PO'
  }
];

export default function CustomerGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {CUSTOMERS_DATA.map((customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </div>
  );
}
