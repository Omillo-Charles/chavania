"use client";

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './themeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 flex items-center justify-center text-muted-foreground opacity-50" />
    );
  }

  return (
    <button 
      onClick={toggleTheme}
      className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
      aria-label="Toggle Theme"
    >
      <div className="relative flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 group-hover:scale-110 transition-transform" />
        ) : (
          <Moon className="w-5 h-5 group-hover:scale-110 transition-transform" />
        )}
      </div>
      <span className="text-[10px] font-medium uppercase tracking-wider">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </span>
    </button>
  );
}
