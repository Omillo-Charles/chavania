"use client";

import React from 'react';
import WishlistItem from './WishlistItem';

const WISHLIST_DATA = [
  {
    id: 1,
    name: 'Sony WH-1000XM5 Wireless Industry Leading Noise Cancelling Headphones',
    price: 'KES 45,000',
    oldPrice: 'KES 52,000',
    rating: 4.8,
    reviews: 1240,
    inStock: true
  },
  {
    id: 2,
    name: 'Apple Watch Series 9 [GPS 45mm] Smartwatch with Midnight Aluminum Case',
    price: 'KES 65,000',
    rating: 4.9,
    reviews: 856,
    inStock: true
  },
  {
    id: 3,
    name: 'Logitech MX Master 3S Wireless Performance Mouse',
    price: 'KES 12,500',
    oldPrice: 'KES 15,000',
    rating: 4.7,
    reviews: 3201,
    inStock: false
  },
  {
    id: 4,
    name: 'Samsung 990 PRO SSD 2TB PCIe 4.0 M.2 Internal Solid State Drive',
    price: 'KES 28,000',
    rating: 4.9,
    reviews: 542,
    inStock: true
  },
  {
    id: 5,
    name: 'Keychron Q1 QMK Custom Mechanical Keyboard',
    price: 'KES 22,000',
    rating: 4.8,
    reviews: 128,
    inStock: true
  },
  {
    id: 6,
    name: 'Hydro Flask Wide Mouth Bottle with Flex Cap 32 oz',
    price: 'KES 5,500',
    oldPrice: 'KES 6,200',
    rating: 4.6,
    reviews: 9450,
    inStock: true
  }
];

export default function WishlistGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {WISHLIST_DATA.map((item) => (
        <WishlistItem key={item.id} item={item} />
      ))}
    </div>
  );
}
