
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedElement } from '@/components/ui/animated-element';
import { AnimatedNumber } from '@/components/animated-number';
import { 
    Truck, 
    Wrench, 
    Route, 
    Building2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { QuoteModalTrigger } from '@/components/ui/quote-modal-trigger';

// --- Data for the page ---

const clients = [
    { name: "Apex Logistics" },
    { name: "Stellar Corp" },
    { name: "Quantum Industries" },
    { name: "Pinnacle Motors" },
    { name: "Orion Manufacturing" },
    { name: "Vertex Transport" },
    { name: "Nova Enterprises" },
    { name: "Helios Energy" },
    { name: "Zenith Construction" },
    { name: "Aether Automotive" },
];

const industries = [
  {
    icon: <Route className="w-10 h-10 mb-4 text-accent" />,
    title: 'Automotive & Mobility',
    description: 'OEMs, Tier-1 suppliers, and EV startups.',
  },
  {
    icon: <Wrench className="w-10 h-10 mb-4 text-accent" />,
    title: 'Manufacturing & Fabrication',
    description: 'Heavy engineering and structural fabrication.',
  },
  {
    icon: <Truck className="w-10 h-10 mb-4 text-accent" />,
    title: 'Logistics & Transportation',
    description: 'Fleet operators and logistics providers.',
  },
  {
    icon: <Building2 className="w-10 h-10 mb-4 text-accent" />,
    title: 'Infrastructure & Construction',
    description: 'Project cargo and site equipment mobility.',
  },
];

const stats = [
    { value: 100, label: "Certified Projects", isPlus: true, unit: '' },
    { value: 7, label: "Pan-India Client Presence", isPlus: false, unit: ' Locations' },
    { value: 4, label: "Approval Bodies", isPlus: false, unit: '' },
    { value: 15, label: "Industry Partnerships", isPlus: true, unit: " Years" }
];


const ClientLogoPlaceholder = ({ name }: { name: string }) => {
    const colors = [
        '#3B82F6', // blue-500
        '#10B981', // emerald-500
        '#F97316', // orange-500
        '#8B5CF6', // violet-500
        '#EC4899', // pink-500
    ];
    const color = colors[name.length % colors.length];

    return (
        <svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-gray-500">
            <rect width="140" height="60" rx="8" fill="transparent" />
            <g className="transition-colors duration-300 grayscale group-hover:grayscale-0">
                <circle cx="30" cy="30" r="12" fill={color} />
                <path d="M24 30 L 30 24 L 36 30 L 30 36 Z" fill="white" />
                <text x="45" y="35" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill={color}>
                    {name.split(' ')[0]}
                </text>
            </g>
        </svg>
    );
};

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our clients say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};


export default function ClientsPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center md:px-6 lg:px-8">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">
              Our Clients
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.1}>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Trusted by industry leaders across manufacturing, transport, and infrastructure.
            </p>
          </AnimatedElement>
           <AnimatedElement delay={0.2}>
            <div className="mt-6 h-1.5 w-24 mx-auto bg-accent"></div>
          </AnimatedElement>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 md:px-6 lg:px-8">
        {/* 2. Client Logo Grid */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {clients.map((client, index) => (
                <AnimatedElement key={client.name} delay={index * 0.05}>
                    <div className="group p-4 md:p-6 bg-card rounded-lg border border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1">
                        <ClientLogoPlaceholder name={client.name} />
                    </div>
                </AnimatedElement>
            ))}
          </div>
        </section>

        <Testimonials />

        {/* 3. Client Categories Section */}
        <section className="mt-16 md:mt-24">
            <AnimatedElement className="text-center mb-16">
                <h2 className="text-3xl font-bold font-headline">Industries We Serve</h2>
                <div className="mt-3 w-20 h-1.5 bg-accent mx-auto"></div>
            </AnimatedElement>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {industries.map((industry, index) => (
                    <AnimatedElement key={industry.title} delay={index * 0.1}>
                        <Card className="h-full text-center p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <CardHeader className="p-0 mb-4 items-center">
                                <div className="bg-primary/10 p-4 rounded-full">
                                    {industry.icon}
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <h3 className="text-lg font-bold font-headline mb-2">{industry.title}</h3>
                                <p className="text-muted-foreground text-sm">{industry.description}</p>
                            </CardContent>
                        </Card>
                    </AnimatedElement>
                ))}
            </div>
        </section>


        {/* 4. Trust Statement / Metrics */}
        <section className="mt-16 md:mt-24 bg-secondary py-16 rounded-lg">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                 <div className="stats-grid">
                    {stats.map((stat, index) => (
                    <AnimatedElement key={stat.label} delay={index * 0.1} className="stat-card">
                        <h3>
                          <AnimatedNumber value={stat.value} />
                          {stat.isPlus && '+'}
                          {stat.unit}
                        </h3>
                        <p>{stat.label}</p>
                    </AnimatedElement>
                    ))}
                </div>
            </div>
        </section>

        {/* 5. CTA Section */}
        <section className="mt-16 md:mt-24">
            <div className="text-center bg-card border rounded-lg p-8 md:p-12 shadow-sm">
                 <AnimatedElement>
                    <h2 className="text-2xl md:text-3xl font-bold font-headline max-w-2xl mx-auto">Want to work with a trusted engineering and compliance partner?</h2>
                </AnimatedElement>
                <AnimatedElement delay={0.15}>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <QuoteModalTrigger size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            Enquire Now
                        </QuoteModalTrigger>
                    </div>
                </AnimatedElement>
            </div>
        </section>
      </div>
    </div>
  );
}
