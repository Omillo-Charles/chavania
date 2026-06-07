"use client";

import React from 'react';
import { CATEGORIES } from '@/utils/categories';
import Link from 'next/link';
import { ArrowRight, Search, LayoutGrid } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
            <LayoutGrid className="w-4 h-4" />
            Browse Marketplace
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-ubuntu tracking-tight text-foreground">
            All Categories
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore our diverse range of products across all departments. From tech gadgets to local handmade crafts.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search categories..." 
            className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-transparent focus:border-primary/30 focus:bg-background rounded-2xl text-sm transition-all outline-none"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CATEGORIES.map((category) => (
          <Link 
            key={category.name}
            href={`/?category=${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
            className="group relative flex flex-col bg-background border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
          >
            {/* Category Image */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            {/* Category Info */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <p className="text-xs text-muted-foreground mt-1 font-bold">
                Shop Category
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Collections / Banner */}
      <div className="mt-20 p-10 rounded-[40px] bg-primary text-white relative overflow-hidden group">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-ubuntu leading-tight">
              Can't find what you're looking for?
            </h2>
            <p className="text-blue-50/80 text-lg">
              Our marketplace is constantly growing with new sellers and unique items. Try searching for specific brands or local stores.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 shrink-0">
            <button className="px-8 py-3 bg-white text-primary rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
              Visit All Stores
            </button>
            <button className="px-8 py-3 border border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
