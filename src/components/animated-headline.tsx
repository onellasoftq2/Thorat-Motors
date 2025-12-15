
'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type AnimatedHeadlineProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedHeadline({ children, className }: AnimatedHeadlineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const headlineVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={headlineVariants}
      className={cn(className)}
    >
      {children}
    </motion.h1>
  );
}
