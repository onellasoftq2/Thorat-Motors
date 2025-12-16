
"use client";
import React, { useState, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";
import { Check } from "lucide-react";

export const IndustryScroll = ({
  items,
  
}: {
  items: {
    id: string;
    name: string;
    description: string;
    solutions: string[];
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = items.length;
 
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsPerBreakpoint = Math.ceil(cardLength / (1 / latest));
    const newActiveCard = Math.min(cardLength - 1, cardsPerBreakpoint);
    if (newActiveCard !== activeCard) {
        setActiveCard(newActiveCard);
    }
  });

  const backgroundColors = [
    "var(--neutral-900)",
    "var(--black)",
    "var(--slate-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
 
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold font-headline tracking-tight sm:text-4xl">Industry-Specific Solutions</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Tailored trailers, cabins, and container solutions designed for real-world industrial applications.
        </p>
        </div>
        <motion.div
            className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
            ref={ref}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {items.map((item, index) => (
                    <div key={item.name + index} className="my-20">
                        <motion.h2
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className="text-2xl font-bold text-primary"
                        >
                            {item.name}
                        </motion.h2>
                        <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className="text-kg text-muted-foreground max-w-sm mt-10"
                        >
                            {item.description}
                        </motion.p>
                    </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <motion.div
                className={cn(
                "hidden lg:block h-full w-full rounded-md bg-white sticky top-10 overflow-hidden",
                )}
            >
                <div className="bg-secondary rounded-lg p-8 h-full">
                    <h3 className="text-2xl font-bold font-headline mb-4 text-primary">{items[activeCard].name}</h3>
                    <p className="text-muted-foreground mb-6">{items[activeCard].description}</p>
                    <h4 className="font-semibold mb-3">Relevant Solutions:</h4>
                    <ul className="space-y-2 mb-8">
                    {items[activeCard].solutions.map((solution, index) => (
                        <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        <span>{solution}</span>
                        </li>
                    ))}
                    </ul>
                    <Button asChild variant="outline">
                    <Link href={`/industries#${items[activeCard].id}`}>View Solutions for This Industry</Link>
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    </div>
  );
};