
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { whyChooseUs, type WhyChooseUsItem } from '@/lib/data';
import Image from 'next/image';

const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

const AnimatedHeader = () => {
  const [headerRef, headerInView] = useScrollAnimation();
  const [pRef, pInView] = useScrollAnimation();

  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2
        ref={headerRef}
        className={`text-3xl font-extrabold font-headline tracking-tight sm:text-4xl transition-all duration-700 ease-out text-foreground ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        Why Choose Thorat Motors?
      </h2>
      <div
        ref={pRef}
        className={`mt-2 h-1.5 w-24 mx-auto bg-accent transition-all duration-700 ease-out delay-200 ${pInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        style={{ transformOrigin: 'center' }}
      ></div>
    </div>
  );
};


export function StickyFeatureSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
    });
  
    return (
      <div className="bg-secondary font-sans py-16 lg:py-24">
        <div className="px-[5%]">
          <div className="max-w-7xl mx-auto">
            <section ref={containerRef} className="flex flex-col items-center">
              <AnimatedHeader />
  
              <div className="w-full relative">
                {whyChooseUs.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    index={index}
                    feature={feature}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
  
  const FeatureCard = ({ feature, index, scrollYProgress }: { feature: WhyChooseUsItem, index: number, scrollYProgress: any }) => {
    const totalFeatures = whyChooseUs.length;
    const start = index / totalFeatures;
    const end = (index + 1) / totalFeatures;
    
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  
    return (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 p-8 md:p-12 rounded-3xl mb-8 sticky top-24 bg-card shadow-md"
        style={{
            scale,
            opacity,
            top: `${10 + index * 4}rem`
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
