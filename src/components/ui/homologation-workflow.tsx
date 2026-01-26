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
    <section className={cn("mt-16 md:mt-24 relative py-16 rounded-lg overflow-hidden", config.backgroundPattern)}>
      <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm z-0"></div>
      <div className="relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: config.animationDuration, ease: 'easeOut' }}
            className="text-center mb-12 px-4"
        >
            <h2 className="text-3xl font-bold font-headline">Homologation Workflow</h2>
            <p className="mt-2 text-muted-foreground">{config.subtitle}</p>
            <div className={cn("mt-3 mb-4 w-20 h-1.5 mx-auto", config.accentBg)} />
        </motion.div>
        <div className="max-w-4xl mx-auto px-4">
            {workflowSteps.map((step, index) => (
                <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.1, duration: config.animationDuration, ease: 'easeOut' }}
                    className="flex items-center mb-4"
                >
                    <div className={cn("flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg border-2 bg-background", config.accentColor)}>
                       {React.cloneElement(config.icons[index] as React.ReactElement, { className: cn("h-6 w-6", config.accentColor) })}
                    </div>
                    <div className="ml-4 p-4 bg-background/50 rounded-lg flex-grow shadow-sm">
                        <p className="font-semibold">{step.title}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
