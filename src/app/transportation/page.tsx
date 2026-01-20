
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedNumber } from '@/components/animated-number';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Package,
  Route,
  ShieldCheck,
  Truck,
  Zap,
} from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';

const stats = [
  { value: 500, label: 'Vehicles Deployed', isPlus: true },
  { value: 100, label: 'Daily Shipments', isPlus: true },
  { value: 7, label: 'Logistics Hubs', isPlus: false },
  { value: 98, label: 'On-Time Delivery', isPlus: false, unit: '%' },
];

const modes = [
  {
    title: 'Finished Vehicle Transport',
    description: 'Safe and secure transport for newly manufactured vehicles from factory to showroom.',
    icon: <Truck className="w-10 h-10 text-accent" />,
    imageId: 'transportation-mode-vehicle',
  },
  {
    title: 'Heavy Equipment Movement',
    description: 'Specialized logistics for moving heavy machinery and over-dimensional equipment.',
    icon: <Package className="w-10 h-10 text-accent" />,
    imageId: 'transportation-mode-equipment',
  },
  {
    title: 'Specialized Cargo Handling',
    description: 'Custom solutions for sensitive, high-value, or uniquely shaped industrial cargo.',
    icon: <Zap className="w-10 h-10 text-accent" />,
    imageId: 'transportation-mode-specialized',
  },
  {
    title: 'Long-Haul Logistics',
    description: 'End-to-end management of regional and nationwide transportation requirements.',
    icon: <Route className="w-10 h-10 text-accent" />,
    imageId: 'transportation-mode-logistics',
  },
];

const processFlow = [
  {
    title: 'Logistics Planning',
    description: 'We analyze your requirements, plan optimal routes, and select the right vehicles for the job.',
  },
  {
    title: 'Scheduling & Dispatch',
    description: 'Our team coordinates and schedules pickups and deliveries to meet your timeline.',
  },
  {
    title: 'In-Transit Management',
    description: 'We monitor shipments in real-time, ensuring safety and providing you with timely updates.',
  },
  {
    title: 'On-Site Delivery',
    description: 'Our professional teams ensure safe and efficient unloading and delivery at the destination.',
  },
];

const whyChoose = [
  {
    title: 'On-Time Delivery',
    description: 'Our streamlined processes and experienced team ensure your cargo reaches its destination on schedule.',
    icon: <Clock />,
  },
  {
    title: 'Safety & Security',
    description: 'We adhere to the highest safety standards, ensuring your valuable cargo is secure throughout its journey.',
    icon: <ShieldCheck />,
  },
  {
    title: 'Nationwide Reach',
    description: 'With a network of hubs across the country, we provide reliable transport services anywhere in India.',
    icon: <MapPin />,
  },
];

const galleryImages = [
  'transportation-gallery-motion',
  'transportation-gallery-delivery',
  'transportation-gallery-route',
];

export default function TransportationPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'transportation-hero');
  const ecosystemImage = PlaceHolderImages.find((p) => p.id === 'transportation-ecosystem');

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10"></div>
        <div className="container relative z-20 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight"
          >
            Transportation & Logistics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90"
          >
            Reliable, scalable, and on-time delivery solutions connecting your business across India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust & Scale Indicators */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <h3>
                  <AnimatedNumber value={stat.value} />
                  {stat.isPlus && '+'}
                  {stat.unit}
                </h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Transportation Ecosystem */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline">A Connected Transportation Ecosystem</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
              From factory floor to final destination, our integrated logistics network ensures a seamless flow of goods. We manage every step, providing visibility and reliability for your supply chain.
            </p>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement delay={0.2}>
              {ecosystemImage && (
                <Image
                  src={ecosystemImage.imageUrl}
                  alt={ecosystemImage.description}
                  width={600}
                  height={450}
                  className="rounded-xl shadow-lg object-cover aspect-video"
                  data-ai-hint={ecosystemImage.imageHint}
                />
              )}
            </AnimatedElement>
            <div className="space-y-8">
              {whyChoose.map((item, index) => (
                <AnimatedElement key={item.title} delay={0.1 * index}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 bg-primary/10 text-accent p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Modes of Transport */}
      <section id="services" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline">Modes of Transport</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modes.map((mode, index) => {
              const image = PlaceHolderImages.find((p) => p.id === mode.imageId);
              return (
                <AnimatedElement key={mode.title} delay={index * 0.1}>
                  <Card className="h-full text-center overflow-hidden group">
                    {image && (
                      <div className="relative h-48">
                        <Image
                          src={image.imageUrl}
                          alt={mode.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                         <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold font-headline">{mode.title}</h3>
                      <p className="text-muted-foreground mt-2 text-sm">{mode.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Operational Flow */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
           <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline">Our Operational Flow</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">A transparent and structured process for reliable delivery.</p>
          </AnimatedElement>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
            {processFlow.map((step, index) => (
                <AnimatedElement key={step.title} className="mb-12">
                     <div className="relative flex items-center">
                        <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background p-1.5 rounded-full">
                            <div className="h-5 w-5 rounded-full bg-accent ring-4 ring-background"></div>
                        </div>
                        <div className="w-full pl-12 md:pl-0 md:w-1/2 md:pr-8 text-left md:text-right">
                           {index % 2 !== 0 && (
                            <>
                                <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                                <p className="text-muted-foreground mt-2">{step.description}</p>
                             </>
                           )}
                        </div>
                         <div className="hidden md:block w-1/2"></div>
                         <div className="w-full pl-12 md:pl-8 md:w-1/2 text-left">
                           {index % 2 === 0 && (
                            <>
                                <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                                <p className="text-muted-foreground mt-2">{step.description}</p>
                             </>
                           )}
                        </div>
                     </div>
                </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Visual Showcase */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
           <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline">Our Fleet in Action</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((imageId, index) => {
              const image = PlaceHolderImages.find((p) => p.id === imageId);
              if (!image) return null;
              return (
                <AnimatedElement key={imageId} delay={index * 0.1}>
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-lg aspect-video transition-transform duration-300 hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Conversion Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto text-center px-4">
          <AnimatedElement>
            <h2 className="text-3xl font-extrabold max-w-3xl mx-auto font-headline">Transportation solutions built for scale, safety, and reliability.</h2>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/quote?productCategory=services&product=Transport & Logistics">Enquire Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Connect with Our Logistics Team</Link>
                </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}
