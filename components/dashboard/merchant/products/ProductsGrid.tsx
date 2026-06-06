"use client";

import React from 'react';
import ProductCard from './ProductCard';

const MERCHANT_PRODUCTS_DATA = [
  {
    id: 'PRD-001',
    name: 'Wireless Noise Cancelling Headphones',
    category: 'Electronics',
    price: 'KES 8,500',
    stock: 45,
    sales: 124,
    status: 'Active' as const
  },
  {
    id: 'PRD-002',
    name: 'Leather Slim Wallet - Tan',
    category: 'Fashion',
    price: 'KES 4,500',
    stock: 8,
    sales: 89,
    status: 'Active' as const
  },
  {
    id: 'PRD-003',
    name: 'USB-C Fast Charger (65W)',
    category: 'Electronics',
    price: 'KES 2,200',
    stock: 120,
    sales: 342,
    status: 'Active' as const
  },
  {
    id: 'PRD-004',
    name: 'Mechanical RGB Gaming Keyboard',
    category: 'Electronics',
    price: 'KES 15,000',
    stock: 0,
    sales: 56,
    status: 'Out of Stock' as const
  },
  {
    id: 'PRD-005',
    name: 'Stainless Steel Water Bottle',
    category: 'Home & Living',
    price: 'KES 3,200',
    stock: 15,
    sales: 0,
    status: 'Draft' as const
  },
  {
    id: 'PRD-006',
    name: 'Cotton Oversized Hoodie',
    category: 'Fashion',
    price: 'KES 5,800',
    stock: 24,
    sales: 12,
    status: 'Active' as const
  }
];

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {MERCHANT_PRODUCTS_DATA.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
