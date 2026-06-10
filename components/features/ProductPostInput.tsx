"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Globe2, Image as ImageIcon, Video, FileText, Coins, Package, Tag, ChevronDown, Repeat2 } from 'lucide-react';
import { CATEGORIES } from '@/utils/categories';

export default function ProductPostInput() {
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('');
    const [permission, setPermission] = useState<'resell' | 'repost'>('resell');
    const [isPermissionOpen, setIsPermissionOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const permissionRef = useRef<HTMLDivElement>(null);
    const categoryRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (permissionRef.current && !permissionRef.current.contains(event.target as Node)) {
                setIsPermissionOpen(false);
            }
            if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
                setIsCategoryOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="p-4 border-b border-border flex gap-4 relative z-40">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0 mt-1"></div>
            <div className="flex-1 min-w-0">
                <textarea
                    placeholder="What are you selling today?"
                    className="w-full bg-transparent border-none resize-none focus:outline-none text-lg placeholder:text-muted-foreground placeholder:font-normal py-2 overflow-hidden"
                    rows={2}
                    onInput={(e) => {
                        const target = e.currentTarget as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = target.scrollHeight + 'px';
                    }}
                ></textarea>

                {/* Everyone can reply & Product Details */}
                <div className={`border-b border-border/50 overflow-x-auto hide-scrollbar transition-all duration-200 ${isPermissionOpen || isCategoryOpen ? 'pb-48 mb-[-180px]' : 'pb-3'}`}>
                    <div className="flex items-center gap-2 min-w-max py-1">
                        {/* Permission Dropdown */}
                        <div className="relative" ref={permissionRef}>
                            <button
                                onClick={() => {
                                    setIsPermissionOpen(!isPermissionOpen);
                                    setIsCategoryOpen(false);
                                }}
                                className="flex items-center gap-1.5 bg-muted/30 px-2.5 py-1 rounded-full border border-border/50 hover:bg-muted/50 transition-colors shrink-0 text-primary text-[13px] font-medium"
                            >
                                {permission === 'resell' ? (
                                    <Globe2 className="w-3.5 h-3.5" />
                                ) : (
                                    <Repeat2 className="w-3.5 h-3.5" />
                                )}
                                <span>Everyone can {permission}</span>
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isPermissionOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isPermissionOpen && (
                                <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                                    <button
                                        onClick={() => {
                                            setPermission('resell');
                                            setIsPermissionOpen(false);
                                        }}
                                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted transition-colors text-left"
                                    >
                                        <Globe2 className="w-4 h-4 text-primary" />
                                        <div className="flex flex-col">
                                            <span className="font-bold">Everyone can resell</span>
                                            <span className="text-[11px] text-muted-foreground">Anyone can list this product</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setPermission('repost');
                                            setIsPermissionOpen(false);
                                        }}
                                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted transition-colors text-left"
                                    >
                                        <Repeat2 className="w-4 h-4 text-primary" />
                                        <div className="flex flex-col">
                                            <span className="font-bold">Everyone can repost</span>
                                            <span className="text-[11px] text-muted-foreground">Standard social interactions</span>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Price Input */}
                        <div className="flex items-center gap-1.5 bg-muted/30 px-2.5 py-0.5 rounded-full border border-border/50 focus-within:border-primary/30 transition-colors shrink-0">
                            <Coins className="w-3.5 h-3.5 text-primary/70" />
                            <input
                                type="text"
                                placeholder="Price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="bg-transparent border-none focus:outline-none text-[13px] w-16 placeholder:text-muted-foreground/70"
                            />
                        </div>

                        {/* Category Dropdown */}
                        <div className="relative" ref={categoryRef}>
                            <button
                                onClick={() => {
                                    setIsCategoryOpen(!isCategoryOpen);
                                    setIsPermissionOpen(false);
                                }}
                                className="flex items-center gap-1.5 bg-muted/30 px-2.5 py-0.5 rounded-full border border-border/50 hover:bg-muted/50 transition-colors shrink-0 text-[13px] text-muted-foreground"
                            >
                                <Tag className="w-3.5 h-3.5 text-primary/70" />
                                <span className={category ? 'text-foreground font-medium' : ''}>
                                    {category || 'Category'}
                                </span>
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCategoryOpen && (
                                <div className="absolute top-full right-0 lg:left-0 mt-1 w-56 max-h-64 overflow-y-auto bg-background border border-border rounded-xl shadow-xl z-50 no-scrollbar animate-in fade-in zoom-in-95 duration-100">
                                    <div className="p-1">
                                        {CATEGORIES.map((cat) => (
                                            <button
                                                key={cat.name}
                                                onClick={() => {
                                                    setCategory(cat.name);
                                                    setIsCategoryOpen(false);
                                                }}
                                                className="w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-muted rounded-lg transition-colors text-left"
                                            >
                                                <cat.icon className="w-4 h-4 text-primary/70" />
                                                <span>{cat.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Stock Input */}
                        <div className="flex items-center gap-1.5 bg-muted/30 px-2.5 py-0.5 rounded-full border border-border/50 focus-within:border-primary/30 transition-colors shrink-0">
                            <Package className="w-3.5 h-3.5 text-primary/70" />
                            <input
                                type="number"
                                placeholder="Stock"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                className="bg-transparent border-none focus:outline-none text-[13px] w-12 placeholder:text-muted-foreground/70"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                    {/* Action Icons */}
                    <div className="flex items-center gap-1 text-primary">
                        <button className="p-2 rounded-full hover:bg-primary/10 transition-colors" aria-label="Image">
                            <ImageIcon className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-primary/10 transition-colors" aria-label="Video">
                            <Video className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-primary/10 transition-colors" aria-label="Document">
                            <FileText className="w-5 h-5" />
                        </button>
                    </div>

                    <button
                        disabled={!price}
                        className="px-5 py-1.5 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 disabled:opacity-50 transition-colors"
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}
