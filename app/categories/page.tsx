"use client";

import React from 'react';
import { CATEGORIES } from '@/utils/categories';
import Link from 'next/link';
import { ArrowRight, LayoutGrid, ArrowLeft } from 'lucide-react';
import Searchbar from '@/components/features/Searchbar';
import Footer from '@/components/ui/Footer';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      {/* Categories Header */}
      <div className="bg-background border-b border-border sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back to Home</span>
            </Link>
            <div className="h-6 w-px bg-border hidden sm:block"></div>
            <h1 className="text-xl font-bold font-ubuntu tracking-tight text-foreground flex items-center gap-2">
              Browse Categories <LayoutGrid className="w-4 h-4 text-primary" />
            </h1>
          </div>

          <Searchbar
            placeholder="Search categories..."
            className="hidden md:block w-80"
          />
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Intro Text */}
        <div className="mb-10">
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore our diverse range of products across all departments. From tech gadgets to local handmade crafts.
          </p>
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
      </main>

      <Footer />
    </div>
  );
}
