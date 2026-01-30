
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Settings, Scaling, ShieldCheck, Truck } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AnimatedElement } from '@/components/ui/animated-element';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { QuoteModalTrigger } from '@/components/ui/quote-modal-trigger';

const oemPlatforms = [
  { name: "TATA Ace", imageId: "tata-ace" },
  { name: "TATA Intra", imageId: "tata-intra" },
  { name: "TATA Yodha", imageId: "tata-yodha" },
  { name: "TATA LPT/SFC", imageId: "tata-lpt" },
];

const bodyTypes = [
  { name: "Open Body", description: "Versatile flatbeds for general cargo.", imageId: "tata-open-body" },
  { name: "Closed Body", description: "Secure, weather-protected transport.", imageId: "tata-closed-body" },
  { name: "Container Body", description: "Durable, standardized container structures.", imageId: "tata-container-body" },
  { name: "Special Purpose", description: "Custom bodies for specific applications.", imageId: "tata-special-body" },
];

const engineeringFeatures = [
    { icon: <Scaling className="h-8 w-8 text-accent"/>, title: "Precision Chassis Alignment", description: "Ensuring perfect fitment and stability on TATA's specific chassis dimensions." },
    { icon: <Settings className="h-8 w-8 text-accent"/>, title: "Optimized Weight Distribution", description: "Engineered to maintain vehicle balance and handling characteristics." },
    { icon: <ShieldCheck className="h-8 w-8 text-accent"/>, title: "Reinforced Structural Integrity", description: "Built to withstand heavy loads and tough operational conditions." },
];

const whyChooseUs = [
  "OEM-Aligned Design for a perfect, factory-grade fit.",
  "High-tensile steel construction for superior durability.",
  "Optimized for operational efficiency and maximum payload.",
  "Advanced coating and finishing for exceptional longevity."
];

export default function TataLoadBodiesPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'tata-loadbody-hero');
    const fabricationImage = PlaceHolderImages.find(p => p.id === 'tata-fabrication');
    const galleryImages = [
        PlaceHolderImages.find(p => p.id === 'tata-gallery-1'),
        PlaceHolderImages.find(p => p.id === 'tata-gallery-2'),
        PlaceHolderImages.find(p => p.id === 'tata-gallery-3'),
    ];

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement className="text-center md:text-left z-10">
                <Breadcrumb className="mb-4 justify-center md:justify-start">
                    <BreadcrumbList>
                        <BreadcrumbItem><BreadcrumbLink asChild><Link href="/industries/manufacturing">Manufacturing</Link></BreadcrumbLink></BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem><BreadcrumbLink asChild><Link href="/industries/manufacturing/load-bodies">Load Bodies</Link></BreadcrumbLink></BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem><BreadcrumbPage>TATA Load Bodies</BreadcrumbPage></BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline">TATA Load Bodies</h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                    Engineered for perfect compatibility, superior durability, and operational reliability on all TATA chassis.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <QuoteModalTrigger size="lg">Request Design Consultation</QuoteModalTrigger>
                </div>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
                 {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        width={600}
                        height={450}
                        className="rounded-lg object-cover shadow-2xl aspect-[4/3]"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                )}
            </AnimatedElement>
          </div>
        </div>
        {/* OEM Strip */}
        <div className="border-t border-b border-border bg-background/30 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-center md:justify-start gap-x-6 gap-y-2 flex-wrap">
                    <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">Compatible With:</span>
                    <div className="flex items-center gap-6">
                        {oemPlatforms.map(p => <span key={p.name} className="text-sm font-medium">{p.name}</span>)}
                    </div>
                </div>
            </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* 2. OEM Compatibility Highlight */}
        <section>
            <AnimatedElement className="text-center">
              <h2 className="text-3xl font-bold font-headline">Precision-Engineered for TATA Platforms</h2>
              <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground text-lg">Our load bodies are designed to match the exact specifications of TATA's leading vehicle platforms, ensuring factory-fit precision and optimal load balance.</p>
            </AnimatedElement>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {oemPlatforms.map((platform, i) => {
                    const platformImage = PlaceHolderImages.find(p => p.id === platform.imageId);
                    return (
                        <AnimatedElement key={platform.name} delay={i * 0.1}>
                            <Card className="overflow-hidden group text-center border-2 border-transparent hover:border-accent hover:shadow-lg transition-all duration-300">
                                {platformImage && <Image src={platformImage.imageUrl} alt={platform.name} width={400} height={250} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={platformImage.imageHint}/>}
                                <CardContent className="p-4 bg-secondary">
                                    <h3 className="font-semibold text-lg">{platform.name}</h3>
                                </CardContent>
                            </Card>
                        </AnimatedElement>
                    )
                })}
            </div>
        </section>

        {/* 3. Body Types & Configurations */}
        <section className="mt-16 md:mt-24">
            <AnimatedElement className="text-center">
              <h2 className="text-3xl font-bold font-headline">Versatile Body Configurations</h2>
              <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            </AnimatedElement>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {bodyTypes.map((type, i) => {
                    const typeImage = PlaceHolderImages.find(p => p.id === type.imageId);
                    return (
                        <AnimatedElement key={type.name} delay={i * 0.1}>
                          <Card className="text-center p-6 h-full border-t-4 border-accent/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                              {typeImage && <Image src={typeImage.imageUrl} alt={type.name} width={400} height={250} className="w-full h-40 object-cover rounded-md mb-4" data-ai-hint={typeImage.imageHint}/>}
                              <h3 className="font-semibold text-xl">{type.name}</h3>
                              <p className="text-sm text-muted-foreground mt-2">{type.description}</p>
                          </Card>
                        </AnimatedElement>
                    );
                })}
            </div>
        </section>

        {/* 4. Engineering Fit & Integration */}
        <section className="mt-16 md:mt-24 bg-secondary py-16 md:py-20 rounded-xl">
             <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <AnimatedElement className="text-center">
                    <h2 className="text-3xl font-bold font-headline">Engineered for a Perfect Fit</h2>
                    <div className="mt-3 mb-12 w-20 h-1.5 bg-accent mx-auto"></div>
                </AnimatedElement>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {engineeringFeatures.map((feat, i) => (
                        <AnimatedElement key={feat.title} delay={i * 0.15} className="text-center">
                            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-md">
                                {feat.icon}
                            </div>
                            <h3 className="font-semibold text-lg">{feat.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2">{feat.description}</p>
                        </AnimatedElement>
                    ))}
                </div>
             </div>
        </section>
        
        {/* 5. Why Choose Us */}
        <section className="mt-16 md:mt-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <AnimatedElement delay={0.2}>
                    {fabricationImage && <Image src={fabricationImage.imageUrl} alt="Fabrication quality" width={600} height={500} className="rounded-lg shadow-xl object-cover aspect-[4/4]" data-ai-hint={fabricationImage.imageHint} />}
                </AnimatedElement>
                <AnimatedElement>
                    <h2 className="text-3xl font-bold font-headline mb-6">Unmatched Quality & Reliability</h2>
                    <ul className="space-y-4">
                        {whyChooseUs.map((item, index) => (
                            <motion.li 
                                key={index} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="flex items-start text-lg">
                                <Check className="text-green-500 mr-3 mt-1 h-6 w-6 flex-shrink-0" />
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </AnimatedElement>
            </div>
        </section>

        {/* 7. Gallery */}
        <section className="mt-16 md:mt-24">
            <AnimatedElement className="text-center">
              <h2 className="text-3xl font-bold font-headline">Load Bodies in Action</h2>
              <div className="mt-3 mb-12 w-20 h-1.5 bg-accent mx-auto"></div>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
                <CarouselContent>
                    {galleryImages.map((img, index) => img && (
                        <CarouselItem key={index}>
                            <Image src={img.imageUrl} alt={img.description} width={1200} height={800} className="rounded-xl object-cover aspect-video" data-ai-hint={img.imageHint}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 md:-left-12" />
                <CarouselNext className="-right-4 md:-right-12"/>
              </Carousel>
            </AnimatedElement>
        </section>

        {/* 8. Conversion Section */}
        <section className="mt-16 md:mt-24">
          <div className="bg-primary text-primary-foreground py-16 rounded-lg text-center">
            <AnimatedElement>
                <h2 className="text-3xl font-extrabold max-w-2xl mx-auto">Looking for a load body engineered to match your TATA vehicle?</h2>
            </AnimatedElement>
            <AnimatedElement delay={0.15}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <QuoteModalTrigger size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        Enquire Now
                    </QuoteModalTrigger>
                    <QuoteModalTrigger size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        Talk to Our Engineering Team
                    </QuoteModalTrigger>
                </div>
            </AnimatedElement>
          </div>
        </section>
      </div>
    </div>
  );
}

