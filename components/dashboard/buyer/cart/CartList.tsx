"use client";

import React from 'react';
import CartItem from './CartItem';

const CART_DATA = [
    {
        id: 1,
        name: 'Wireless Noise Cancelling Headphones',
        price: 'KES 8,500',
        quantity: 1,
        store: 'TechHaven Official'
    },
    {
        id: 2,
        name: 'Leather Slim Wallet',
        price: 'KES 4,500',
        quantity: 1,
        store: 'Glamour Beauty'
    },
    {
        id: 3,
        name: 'USB-C Fast Charger',
        price: 'KES 4,400',
        quantity: 2,
        store: 'TechHaven Official'
    }
];

export default function CartList() {
    return (
        <div className="space-y-4">
            {CART_DATA.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
}
