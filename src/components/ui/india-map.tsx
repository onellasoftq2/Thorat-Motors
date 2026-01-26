
'use client';

import { offices } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useRef } from "react";

export const IndiaMap = ({ 
  hoveredCity, 
  currentCityIndex 
}: { 
  hoveredCity: string | null,
  currentCityIndex: number
}) => {
  const prevIndexRef = useRef(currentCityIndex);
  
  useEffect(() => {
    prevIndexRef.current = currentCityIndex === 0 ? offices.length - 1 : currentCityIndex - 1;
  }, [currentCityIndex]);

  const startOffice = offices[prevIndexRef.current];
  const endOffice = offices[currentCityIndex];

  const [visibleCity, setVisibleCity] = useState<string | null>(offices[0].city);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCity(endOffice.city);
    }, 1500); // Show name halfway through journey

    const hideTimer = setTimeout(() => {
      setVisibleCity(null);
    }, 2800); // Hide just before next journey starts

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [endOffice]);

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
          className="fill-card stroke-border"
          style={{filter: 'url(#dropshadow)'}}
        />

        {/* Route Line */}
        <motion.path
          key={currentCityIndex} // Re-animate when index changes
          d={`M ${startOffice.coords.x} ${startOffice.coords.y} L ${endOffice.coords.x} ${endOffice.coords.y}`}
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="0.3"
          strokeDasharray="1 1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'linear' }}
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

        {/* City Names */}
        {offices.map((office) => (
          <AnimatePresence key={`city-name-${office.city}`}>
            {visibleCity === office.city && (
                <motion.text
                    x={office.coords.x}
                    y={office.coords.y - 3}
                    textAnchor="middle"
                    className="fill-foreground font-bold"
                    fontSize="2"
                    style={{filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))'}}
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    transition={{ duration: 0.5 }}
                >
                    {office.city}
                </motion.text>
            )}
          </AnimatePresence>
        ))}

        {/* Animated Trailer */}
        <motion.g
          key={`truck-${currentCityIndex}`} // Use key to re-trigger animation
          initial={{
            x: startOffice.coords.x,
            y: startOffice.coords.y,
          }}
          animate={{
            x: endOffice.coords.x,
            y: endOffice.coords.y,
          }}
          transition={{ duration: 3, ease: 'linear' }}
        >
          <motion.g 
            transform="translate(-5, -4) scale(0.25)"
            animate={{
                y: [0, -0.1, 0], // Subtle bounce
            }}
            transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{ filter: 'drop-shadow(0 1px 1px hsla(var(--accent-foreground) / 0.3))' }}
          >
            {/* Trailer Body */}
            <path d="M0 18V4C0 3.44772 0.447715 3 1 3H28C28.5523 3 29 3.44772 29 4V18H0Z" fill="hsl(var(--background))" stroke="hsl(var(--accent-foreground))" strokeWidth="0.5"/>
            
            {/* Trailer Swoosh */}
            <path d="M1,16 C10,10 18,10 28,15 V 17 H 1 Z" fill="hsl(var(--accent))" />

            {/* Truck Cabin */}
            <path d="M28 18V5C28 4.44772 28.4477 4 29 4H36L39 8V18H28Z" fill="hsl(var(--accent))" stroke="hsl(var(--accent-foreground))" strokeWidth="0.5"/>
            
            {/* Wheels */}
            <circle cx="7" cy="20" r="2.5" fill="hsl(var(--foreground))" stroke="hsl(var(--background))" strokeWidth="0.5"/>
            <circle cx="12" cy="20" r="2.5" fill="hsl(var(--foreground))" stroke="hsl(var(--background))" strokeWidth="0.5"/>
            <circle cx="23" cy="20" r="2.5" fill="hsl(var(--foreground))" stroke="hsl(var(--background))" strokeWidth="0.5"/>
            <circle cx="34" cy="20" r="2.5" fill="hsl(var(--foreground))" stroke="hsl(var(--background))" strokeWidth="0.5"/>
            
            {/* Text */}
            <text x="14.5" y="9.5" textAnchor="middle" fontSize="2.5" fontWeight="bold" fill="hsl(var(--foreground))">
              THORAT MOTORS
            </text>
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
};
