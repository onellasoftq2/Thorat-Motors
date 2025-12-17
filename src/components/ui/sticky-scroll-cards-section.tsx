
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
        <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl text-foreground">
          Why Choose Thorat Motors?
        </h2>
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <div className="mt-2 h-1.5 w-24 mx-auto bg-accent"></div>
      </AnimatedElement>
    </div>
  );
};

export function StickyFeatureSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={targetRef} className="relative bg-secondary py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <AnimatedHeader />
        <div className="relative" style={{ height: `${whyChooseUs.length * 100}vh` }}>
          <div className="sticky top-1/4 -translate-y-1/4">
            {whyChooseUs.map((card, i) => (
                <FeatureCard key={card.title + i} card={card} i={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ card, i, scrollYProgress }: { card: WhyChooseUsItem, i: number, scrollYProgress: any }) => {
    const cardCount = whyChooseUs.length;
    const cardProgress = useTransform(scrollYProgress, [i / cardCount, (i + 1) / cardCount], [0, 1]);
    const scale = useTransform(cardProgress, [0, 1], [1 - (cardCount - 1 - i) * 0.05, 1]);
    const top = useTransform(cardProgress, [0, 1], [`${i * 2}rem`, '0rem']);

    return (
        <motion.div
            style={{
                position: 'sticky',
                top: `${(i * 2) + 10}rem`,
                scale
            }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 p-8 md:p-12 rounded-3xl bg-card shadow-lg"
        >
            <div className="flex flex-col justify-center text-left order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
            </div>
            
            <div className="mt-8 md:mt-0 order-1 md:order-2">
                <Image 
                    src={card.imageUrl} 
                    alt={card.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-md object-cover aspect-[4/3]"
                />
            </div>
        </motion.div>
  );
};
