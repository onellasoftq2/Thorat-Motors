
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Check, 
    Battery, 
    Power, 
    Shield, 
    DraftingCompass, 
    Truck, 
    Layers, 
    GitBranch, 
    ShieldCheck, 
    Bus as BusIcon, 
    Users, 
    Box, 
    Thermometer,
    Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedElement } from '@/components/ui/animated-element';
import { Card, CardContent } from '@/components/ui/card';

export type ProductType = 'ev' | 'trailer' | 'bus' | 'bulker' | 'refer-container' | 'commercial-vehicle';
export type WorkflowStep = { title: string };

interface WorkflowConfig {
  subtitle: string;
  icons: React.ReactNode[];
  accentColor: string; 
  accentBg: string; 
  backgroundPattern: string;
  animationDuration: number;
}

const configurations: Record<ProductType, WorkflowConfig> = {
  ev: {
    subtitle: "Electrical Safety & Lightweight Compliance",
    icons: [<Battery key="1"/>, <Shield key="2"/>, <DraftingCompass key="3"/>, <Power key="4"/>, <Check key="5"/>],
    accentColor: 'text-teal-500 border-teal-500',
    accentBg: 'bg-teal-500',
    backgroundPattern: 'bg-circuit-pattern',
    animationDuration: 0.5,
  },
  trailer: {
    subtitle: "Structural Integrity & Load Certification",
    icons: [<Layers key="1"/>, <ShieldCheck key="2"/>, <Truck key="3"/>, <GitBranch key="4"/>, <Check key="5"/>],
    accentColor: 'text-accent border-accent',
    accentBg: 'bg-accent',
    backgroundPattern: 'bg-grid-pattern',
    animationDuration: 0.7,
  },
  bus: {
    subtitle: "Passenger Safety & Body Regulations",
    icons: [<BusIcon key="1"/>, <Users key="2"/>, <Shield key="3"/>, <ShieldCheck key="4"/>, <Check key="5"/>],
    accentColor: 'text-primary border-primary',
    accentBg: 'bg-primary',
    backgroundPattern: 'bg-panel-pattern',
    animationDuration: 0.6,
  },
  bulker: {
    subtitle: "Material Handling & Structural Endurance",
    icons: [<Box key="1"/>, <Layers key="2"/>, <Truck key="3"/>, <Settings key="4"/>, <Check key="5"/>],
    accentColor: 'text-slate-600 border-slate-600',
    accentBg: 'bg-slate-600',
    backgroundPattern: 'bg-flow-pattern',
    animationDuration: 0.7,
  },
  'refer-container': {
    subtitle: "Thermal Compliance & Insulation Validation",
    icons: [<Thermometer key="1"/>, <Box key="2"/>, <Truck key="3"/>, <Settings key="4"/>, <Check key="5"/>],
    accentColor: 'text-green-500 border-green-500',
    accentBg: 'bg-green-500',
    backgroundPattern: 'bg-airflow-pattern',
    animationDuration: 0.6,
  },
  'commercial-vehicle': {
    subtitle: "Durability, Safety & Regulatory Approval",
    icons: [<Truck key="1"/>, <Shield key="2"/>, <Layers key="3"/>, <Settings key="4"/>, <Check key="5"/>],
    accentColor: 'text-slate-700 border-slate-700',
    accentBg: 'bg-slate-700',
    backgroundPattern: 'bg-grain-pattern',
    animationDuration: 0.6,
  },
};

export const HomologationWorkflowSection = ({ productType, workflowSteps }: { productType: ProductType; workflowSteps: WorkflowStep[] }) => {
  const config = configurations[productType];

  return (
    <section className={cn("mt-16 md:mt-24 relative py-16 md:py-20 rounded-lg overflow-hidden", config.backgroundPattern)}>
      <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm z-0"></div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline">Homologation Workflow</h2>
            <p className="mt-2 text-muted-foreground">{config.subtitle}</p>
            <div className={cn("mt-3 mb-4 w-20 h-1.5 mx-auto", config.accentBg)} />
        </AnimatedElement>
        
        <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2 hidden md:block"></div>
            
            {workflowSteps.map((step, index) => (
                <AnimatedElement key={step.title} delay={index * 0.1} className="relative flex md:even:flex-row-reverse mb-12">
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                         <div className={cn(
                            "h-16 w-16 rounded-full flex items-center justify-center border-4 bg-background shadow-lg",
                            config.accentColor
                        )}>
                            {React.cloneElement(config.icons[index] as React.ReactElement, { className: "h-8 w-8" })}
                        </div>
                    </div>
                     <div className="w-full md:w-[calc(50%-2rem)]">
                        <Card className="shadow-lg transition-shadow hover:shadow-xl bg-background/80 backdrop-blur-sm">
                            <CardContent className="pt-6">
                                 <div className="flex items-center">
                                    <div className={cn("md:hidden mr-4 h-12 w-12 rounded-full flex items-center justify-center border-2 flex-shrink-0", config.accentColor)}>
                                        {React.cloneElement(config.icons[index] as React.ReactElement, { className: "h-6 w-6" })}
                                    </div>
                                    <p className="text-lg font-semibold">{step.title}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </AnimatedElement>
            ))}
        </div>
      </div>
    </section>
  );
};
