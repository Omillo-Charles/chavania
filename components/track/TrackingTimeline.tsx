"use client";

import React from 'react';
import { Package, Truck, CheckCircle2, MapPin, Clock } from 'lucide-react';

interface TrackingStep {
    status: string;
    date: string;
    time: string;
    location: string;
    description: string;
    isCompleted: boolean;
    isCurrent: boolean;
}

interface TrackingTimelineProps {
    steps: TrackingStep[];
}

export default function TrackingTimeline({ steps }: TrackingTimelineProps) {
    return (
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-border before:to-transparent">
            {steps.map((step, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Icon */}
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 ${step.isCompleted ? 'bg-primary text-primary-foreground scale-110' :
                            step.isCurrent ? 'bg-secondary text-secondary-foreground animate-pulse' : 'bg-muted text-muted-foreground'
                        }`}>
                        {step.isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Package className="w-5 h-5" />}
                    </div>

                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border border-border bg-background shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-primary/20">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                            <h4 className={`font-bold text-sm ${step.isCurrent ? 'text-primary' : 'text-foreground'}`}>
                                {step.status}
                            </h4>
                            <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {step.time}</span>
                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {step.location}</span>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            {step.description}
                        </p>
                        <div className="mt-3 text-[10px] font-bold text-primary/60">
                            {step.date}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
