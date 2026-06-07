import {
    Smartphone, Laptop, Shirt, Home as HomeIcon, Gamepad2, Car, Book, Puzzle, Baby, PawPrint,
    ShoppingBasket, Palette, Music, Wrench, Leaf, Film, FlaskConical, Plane, Dumbbell,
    Tv, Scissors, Sparkles, Disc, Plug, Gift, Stethoscope, Paperclip, Crown, Filter, Star, Tag, Truck
} from 'lucide-react';

export const CATEGORIES = [
    { name: 'Appliances', icon: Tv, color: '#64748b' },
    { name: 'Apps & Games', icon: Gamepad2, color: '#8b5cf6' },
    { name: 'Arts, Crafts & Sewing', icon: Scissors, color: '#ec4899' },
    { name: 'Automotive Parts', icon: Car, color: '#475569' },
    { name: 'Baby', icon: Baby, color: '#fbcfe8' },
    { name: 'Beauty & Personal Care', icon: Sparkles, color: '#f472b6' },
    { name: 'Books', icon: Book, color: '#d97706' },
    { name: 'CDs & Vinyl', icon: Disc, color: '#71717a' },
    { name: 'Cell Phones', icon: Smartphone, color: '#3b82f6' },
    { name: 'Clothing, Shoes & Jewelry', icon: Shirt, color: '#db2777' },
    { name: 'Collectibles & Fine Art', icon: Palette, color: '#fb923c' },
    { name: 'Computers', icon: Laptop, color: '#2563eb' },
    { name: 'Electronics', icon: Plug, color: '#0284c7' },
    { name: 'Garden & Outdoor', icon: Leaf, color: '#22c55e' },
    { name: 'Grocery & Food', icon: ShoppingBasket, color: '#16a34a' },
    { name: 'Handmade', icon: Gift, color: '#eab308' },
    { name: 'Health & Household', icon: Stethoscope, color: '#059669' },
    { name: 'Home & Kitchen', icon: HomeIcon, color: '#f97316' },
    { name: 'Industrial & Scientific', icon: FlaskConical, color: '#14b8a6' },
    { name: 'Luggage & Travel', icon: Plane, color: '#0ea5e9' },
    { name: 'Movies & TV', icon: Film, color: '#4b5563' },
    { name: 'Musical Instruments', icon: Music, color: '#ef4444' },
    { name: 'Office Products', icon: Paperclip, color: '#94a3b8' },
    { name: 'Pet Supplies', icon: PawPrint, color: '#b45309' },
    { name: 'Premium Beauty', icon: Crown, color: '#e11d48' },
    { name: 'Sports & Outdoors', icon: Dumbbell, color: '#10b981' },
    { name: 'Tools & Home Improvement', icon: Wrench, color: '#334155' },
    { name: 'Toys & Games', icon: Puzzle, color: '#6366f1' },
    { name: 'Video Games', icon: Gamepad2, color: '#8b5cf6' },
];

export const FILTERS = [
    { name: 'Best Ratings', icon: Star },
    { name: 'Discounted', icon: Tag },
    { name: 'Free Shipping', icon: Truck },
    { name: 'Under KES 5,000', icon: Filter },
    { name: 'KES 5,000 - KES 10,000', icon: Filter },
    { name: 'Over KES 10,000', icon: Filter },
    { name: 'Local Sellers', icon: HomeIcon },
    { name: 'New Arrivals', icon: Star },
];
