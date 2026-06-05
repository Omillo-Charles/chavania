"use client";

import React from 'react';
import AddressCard, { AddressType } from './AddressCard';
import { Plus } from 'lucide-react';

const SAVED_ADDRESSES = [
  {
    id: 1,
    type: 'Home' as AddressType,
    name: 'John Doe',
    street: '123 Ngong Road, Kilimani',
    city: 'Nairobi',
    state: 'Nairobi County',
    zip: '00100',
    phone: '+254 700 123 456',
    isDefault: true
  },
  {
    id: 2,
    type: 'Work' as AddressType,
    name: 'John Doe',
    street: 'Delta Corner Tower, Westlands',
    city: 'Nairobi',
    state: 'Nairobi County',
    zip: '00800',
    phone: '+254 711 222 333',
    isDefault: false
  },
  {
    id: 3,
    type: 'Other' as AddressType,
    name: 'Jane Smith (Sister)',
    street: '45 Mombasa Road, Syokimau',
    city: 'Machakos',
    state: 'Machakos County',
    zip: '00510',
    phone: '+254 722 999 888',
    isDefault: false
  }
];

export default function AddressList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Add New Address Card */}
      <button className="group flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 min-h-[300px]">
        <div className="w-14 h-14 rounded-full bg-muted group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300 mb-4">
          <Plus className="w-8 h-8" />
        </div>
        <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Add New Address</p>
        <p className="text-sm text-muted-foreground mt-2 text-center px-4">Save a new shipping or billing address for faster checkout.</p>
      </button>

      {SAVED_ADDRESSES.map((address) => (
        <AddressCard key={address.id} address={address} />
      ))}
    </div>
  );
}
