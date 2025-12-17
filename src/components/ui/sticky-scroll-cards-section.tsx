
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { whyChooseUs, type WhyChooseUsItem } from '@/lib/data';
import Image from 'next/image';
import { AnimatedElement } from './animated-element';


const AnimatedHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
       <AnimatedElement>
         <h2
            className={`text-3xl font-extrabold font-headline tracking-tight sm:text-4xl text-foreground`}
          >
            Why Choose Thorat Motors?
          </h2>
      </AnimatedElement>
       <AnimatedElement delay={0.1}>
         <div
            className={`mt-2 h-1.5 w-24 mx-auto bg-accent`}
          ></div>
      </AnimatedElement>
    </div>
  );
};


export function StickyFeatureSection() {
    return (
      <div className="bg-secondary font-sans py-16 lg:py-24">
        <div className="px-[5%]">
          <div className="max-w-7xl mx-auto">
            <section className="flex flex-col items-center">
              <AnimatedHeader />
  
              <div className="w-full relative">
                {whyChooseUs.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    index={index}
                    feature={feature}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
  
  const FeatureCard = ({ feature, index }: { feature: WhyChooseUsItem, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

    return (
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 p-8 md:p-12 rounded-3xl mb-8 sticky bg-card shadow-md"
        style={{
            scale,
            opacity,
            top: `8rem`
        }}
      >
        <div className="flex flex-col justify-center text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
        
        <div className="mt-8 md:mt-0">
          <Image 
              src={feature.imageUrl} 
              alt={feature.title}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[4/3]"
          />
        </div>
      </motion.div>
    );
  };
