"use client";

import React from 'react';
import { ChevronDown, Calendar } from 'lucide-react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DATA = [45, 62, 58, 75, 90, 82, 95]; // Percentages for bars

export default function RevenueChart() {
  return (
    <div className="bg-background border border-border rounded-3xl p-6 shadow-sm flex flex-col h-[400px]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-bold font-ubuntu">Revenue Overview</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Daily sales performance for the current week.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-xl text-xs font-bold text-muted-foreground hover:text-foreground transition-all">
            <Calendar className="w-3.5 h-3.5" />
            Weekly
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-end justify-between gap-2 sm:gap-4 px-2">
        {DATA.map((value, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
            <div className="w-full relative">
              {/* Tooltip on hover */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                KES {(value * 1200).toLocaleString()}
              </div>
              {/* Bar */}
              <div 
                className="w-full bg-secondary/10 group-hover:bg-secondary/20 rounded-t-xl transition-all duration-500 relative overflow-hidden"
                style={{ height: `${value}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter group-hover:text-secondary transition-colors">
              {DAYS[i]}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border flex items-center justify-around text-center">
        <div>
          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Total Week</p>
          <p className="text-lg font-bold text-foreground">KES 524,800</p>
        </div>
        <div className="w-px h-8 bg-border"></div>
        <div>
          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Avg. Daily</p>
          <p className="text-lg font-bold text-foreground">KES 74,970</p>
        </div>
      </div>
    </div>
  );
}
