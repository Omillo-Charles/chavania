"use client";

import React from 'react';
import { Search } from 'lucide-react';

interface SearchbarProps {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar({
  placeholder = "Search...",
  className = "w-full",
  inputClassName = "bg-muted/50 border border-transparent focus:border-primary/30 focus:bg-background rounded-xl",
  iconClassName = "text-muted-foreground",
  value,
  onChange
}: SearchbarProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${iconClassName}`} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full pl-10 pr-4 py-2 text-sm transition-all outline-none ${inputClassName}`}
      />
    </div>
  );
}
