'use client';

import { offices } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Truck } from "lucide-react";
import React from "react";

export const IndiaMap = ({ 
  hoveredCity, 
  animatedTruckPosition 
}: { 
  hoveredCity: string | null,
  animatedTruckPosition?: { x: number, y: number } | null
}) => {
  return (
    <div className="relative w-full h-full aspect-[4/3]">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
            <filter id="dropshadow" height="130%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1"/> 
              <feOffset dx="1" dy="1" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
              </feComponentTransfer>
              <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
              </feMerge>
            </filter>
        </defs>
        <path
          d="M66.5,8.5 L64,13.5 L63.5,15.5 L60.5,18.5 L58.5,18 L55,20.5 L53,23.5 L50,22 L46.5,23.5 L43.5,22 L41.5,19 L39,18 L38.5,15.5 L39.5,12 L39,7 L39.5,2.5 L43.5,0.5 L49,2 L55,2 L57.5,5 L62.5,5 L66.5,8.5 Z M82.5,18.5 L80,24.5 L80,29.5 L75.5,30 L73,31 L70.5,27.5 L68,23 L67,19.5 L71,15.5 L73,15.5 L77.5,16.5 L82.5,18.5 Z M93.5,28 L91,32.5 L89,35.5 L86,34.5 L83,34.5 L81.5,32 L83,28 L85.5,25.5 L90,26 L93.5,28 Z M62.5,26.5 L62.5,30 L63,33.5 L60,35.5 L56.5,33 L52.5,34.5 L48.5,33 L45,35 L43,38 L43.5,41.5 L46,45 L43.5,48.5 L41,47.5 L38.5,49 L35,46.5 L33,46.5 L30.5,49.5 L28,48 L25.5,48.5 L23,45 L21,41.5 L19,40 L19.5,37 L23,34.5 L23,31 L24,28.5 L27,27 L30,28 L34,26.5 L38,28.5 L42,27.5 L46.5,28 L48,26 L53,26.5 L56.5,25.5 L60,25 L62.5,26.5 Z M70,35 L68,38 L68.5,41.5 L71.5,44.5 L71.5,48 L73.5,51 L75.5,50 L77,46.5 L77,41.5 L74.5,36.5 L72,34.5 L70,35 Z M87,41 L86,45 L85.5,49.5 L87,53 L88,50.5 L89.5,47 L90,43.5 L87,41 Z M82.5,55 L81,59 L78.5,60.5 L75,60 L72.5,61.5 L70.5,65 L67.5,68 L64,68.5 L60.5,66.5 L56,66 L52.5,67.5 L48,64 L45,64.5 L41.5,62.5 L39.5,60 L38,58.5 L37.5,55 L39,52 L42,51 L47,52 L49,54.5 L52.5,54.5 L55.5,56.5 L60,57.5 L63.5,56.5 L67,58.5 L70,57 L72,55.5 L75,55.5 L78.5,54 L82.5,55 Z M56.5,70 L54,72.5 L53.5,76 L52,79.5 L49,82 L46.5,82 L44.5,84 L44.5,88 L46,92.5 L48,95.5 L50,97.5 L53.5,99 L57.5,98.5 L59.5,95.5 L61,91.5 L61,88.5 L59.5,86 L57,83 L57.5,80.5 L56,76.5 L56.5,73.5 L56.5,70 Z M41,83 L39,85.5 L36.5,86 L34,87.5 L31.5,87 L29,88.5 L26,88 L23.5,89.5 L21,88.5 L18.5,85.5 L17.5,82 L19,79 L20.5,76.5 L23,75.5 L26.5,75.5 L29.5,77 L31.5,79.5 L34.5,80.5 L38,82 L41,83 Z M40,65.5 L37,68 L33.5,69 L30.5,69.5 L28,68 L26,65 L24.5,61.5 L26.5,58 L29.5,57 L33,59.5 L36.5,61 L40,65.5 Z"
          strokeWidth="0.5"
          className="fill-secondary stroke-border"
          style={{filter: 'url(#dropshadow)'}}
        />
        {offices.map((office) => (
          <g key={office.city}>
            <circle
              cx={office.coords.x}
              cy={office.coords.y}
              r={hoveredCity === office.city ? 2.5 : 1.5}
              className={cn(
                "fill-primary stroke-background transition-all duration-300",
                {
                  "fill-accent stroke-accent/30": hoveredCity === office.city,
                }
              )}
              strokeWidth="0.5"
            />
             {hoveredCity === office.city && (
              <circle
                cx={office.coords.x}
                cy={office.coords.y}
                r="3"
                className="fill-accent/50 stroke-accent/50 animate-pulse"
              />
            )}
          </g>
        ))}
      </svg>

      {animatedTruckPosition && (
        <motion.div
            className="absolute flex items-center gap-2"
            initial={false}
            animate={{ 
                left: `${animatedTruckPosition.x}%`, 
                top: `${animatedTruckPosition.y}%`
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ 
              transform: 'translate(-50%, -50%)',
            }}
        >
            <Truck className="w-8 h-8 text-accent" style={{filter: 'drop-shadow(0 1px 3px hsl(var(--accent) / 0.5))'}} />
            <span className="text-xs font-bold text-primary whitespace-nowrap" style={{filter: 'drop-shadow(0 1px 2px hsl(var(--background)))'}}>Thorat Motors</span>
        </motion.div>
      )}
    </div>
  );
};
