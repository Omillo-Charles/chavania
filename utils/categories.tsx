import {
    Smartphone, Laptop, Shirt, Home as HomeIcon, Gamepad2, Car, Book, Puzzle, Baby, PawPrint,
    ShoppingBasket, Palette, Music, Wrench, Leaf, Film, FlaskConical, Plane, Dumbbell,
    Tv, Scissors, Sparkles, Disc, Plug, Gift, Stethoscope, Paperclip, Crown, Filter, Star, Tag, Truck
} from 'lucide-react';

export const CATEGORIES = [
    { name: 'Appliances', icon: Tv, color: '#64748b', image: '/categories/appliances.jpeg' },
    { name: 'Apps & Games', icon: Gamepad2, color: '#8b5cf6', image: '/categories/appsngames.jpeg' },
    { name: 'Arts, Crafts & Sewing', icon: Scissors, color: '#ec4899', image: '/categories/artncraftnsewing.jpeg' },
    { name: 'Automotive Parts', icon: Car, color: '#475569', image: '/categories/automotive.jpeg' },
    { name: 'Baby', icon: Baby, color: '#fbcfe8', image: '/categories/baby.jpeg' },
    { name: 'Beauty & Personal Care', icon: Sparkles, color: '#f472b6', image: '/categories/beauty.jpeg' },
    { name: 'Books', icon: Book, color: '#d97706', image: '/categories/books.jpeg' },
    { name: 'CDs & Vinyl', icon: Disc, color: '#71717a', image: '/categories/cdsnvinyl.jpeg' },
    { name: 'Cell Phones', icon: Smartphone, color: '#3b82f6', image: '/categories/phones.jpeg' },
    { name: 'Clothing, Shoes & Jewelry', icon: Shirt, color: '#db2777', image: '/categories/clothing.jpeg' },
    { name: 'Collectibles & Fine Art', icon: Palette, color: '#fb923c', image: '/categories/collectibles.jpeg' },
    { name: 'Computers', icon: Laptop, color: '#2563eb', image: '/categories/computers.jpeg' },
    { name: 'Electronics', icon: Plug, color: '#0284c7', image: '/categories/electronics.jpeg' },
    { name: 'Garden & Outdoor', icon: Leaf, color: '#22c55e', image: '/categories/garden.jpeg' },
    { name: 'Grocery & Food', icon: ShoppingBasket, color: '#16a34a', image: '/categories/grocery.jpeg' },
    { name: 'Handmade', icon: Gift, color: '#eab308', image: '/categories/handmade.jpeg' },
    { name: 'Health & Household', icon: Stethoscope, color: '#059669', image: '/categories/health.jpeg' },
    { name: 'Home & Kitchen', icon: HomeIcon, color: '#f97316', image: '/categories/homenkitchen.jpeg' },
    { name: 'Industrial & Scientific', icon: FlaskConical, color: '#14b8a6', image: '/categories/industrial.jpeg' },
    { name: 'Luggage & Travel', icon: Plane, color: '#0ea5e9', image: '/categories/luggage.jpeg' },
    { name: 'Movies & TV', icon: Film, color: '#4b5563', image: '/categories/moviesntv.jpeg' },
    { name: 'Musical Instruments', icon: Music, color: '#ef4444', image: '/categories/musical.jpeg' },
    { name: 'Office Products', icon: Paperclip, color: '#94a3b8', image: '/categories/officeproducts.jpeg' },
    { name: 'Pet Supplies', icon: PawPrint, color: '#b45309', image: '/categories/pet.jpeg' },
    { name: 'Premium Beauty', icon: Crown, color: '#e11d48', image: '/categories/premiumbeauty.jpeg' },
    { name: 'Sports & Outdoors', icon: Dumbbell, color: '#10b981', image: '/categories/sports.jpeg' },
    { name: 'Tools & Home Improvement', icon: Wrench, color: '#334155', image: '/categories/toolsnhomeimprovement.jpeg' },
    { name: 'Toys & Games', icon: Puzzle, color: '#6366f1', image: '/categories/toysngames.jpeg' },
    { name: 'Video Games', icon: Gamepad2, color: '#8b5cf6', image: '/categories/videogames.jpeg' },
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
