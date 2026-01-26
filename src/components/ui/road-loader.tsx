'use client';
import React from 'react';
import { Truck } from 'lucide-react';

const RoadLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="w-48 h-24 relative overflow-hidden">
        <style>
          {`
            @keyframes drive {
              from { transform: translateX(-60px); }
              to { transform: translateX(192px); }
            }
            @keyframes road {
              from { stroke-dashoffset: 0; }
              to { stroke-dashoffset: -32; }
            }
          `}
        </style>
        {/* Truck */}
        <div className="absolute bottom-5 left-0 animate-[drive_2s_ease-in-out_infinite]">
          <Truck className="w-12 h-12 text-primary" />
        </div>
        
        {/* Road */}
        <svg width="100%" height="4" className="absolute bottom-4 left-0">
          <line x1="0" y1="2" x2="100%" y2="2" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
          <line x1="0" y1="2" x2="100%" y2="2" stroke="hsl(var(--background))" strokeWidth="2" strokeDasharray="16 16" className="animate-[road_0.5s_linear_infinite]" />
        </svg>
      </div>
      <p className="font-medium text-muted-foreground tracking-widest animate-pulse">LOADING...</p>
    </div>
  );
};

export default RoadLoader;
