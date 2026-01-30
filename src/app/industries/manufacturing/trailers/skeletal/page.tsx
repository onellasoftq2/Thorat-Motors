
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldCheck, ArrowRight, Anchor, Warehouse, Globe, Truck, Phone, MessageSquare } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AnimatedElement } from '@/components/ui/animated-element';

// Data for the page
const keySpecs = [
    { label: "Cargo Type", value: "ISO Containers" },
    { label: "Container Sizes", value: "20 ft / 40 ft" },
    { label: "Trailer Type", value: "Skeletal / Container Chassis" },
];

const applications = [
    { icon: <Anchor className="h-8 w-8 text-accent" />, title: "Port & Terminal Operations" },
    { icon: <Warehouse className="h-8 w-8 text-accent" />, title: "Container Freight Stations (CFS)" },
    { icon: <Globe className="h-8 w-8 text-accent" />, title: "Inland Container Depots (ICD)" },
    { icon: <Truck className="h-8 w-8 text-accent" />, title: "Long-Haul & Multimodal Logistics" },
];

const configurations = [
    { name: 'Container Sizes', description: 'Carries 1x20ft, 2x20ft, or 1x40ft ISO containers.' },
    { name: 'Axle & Suspension', description: 'Tandem/tridem axles with heavy-duty suspension.' },
    { name: 'Twist-Locks', description: 'Certified twist-locks for secure container anchoring.' },
    { name: 'Chassis Design', description: 'Lightweight chassis designed to maximize payload capacity.' },
    { name: 'Custom Builds', description: 'Custom designs available for specific fleet and route needs.' },
];

const engineeringHighlights = [ "Lightweight chassis for max payload.", "Fail-safe twist-locks for secure handling.", "Optimized load distribution for stability.", "Durable fabrication for container logistics." ];

const safetyCompliance = [ "Secure locking systems prevent shifting.", "FEA-validated for dynamic load stability.", "CMVR and manufacturing standards compliant.", "Advanced braking for reliable performance." ];

const operationalAdvantages = [
    { title: "Payload Efficiency", description: "Higher payload efficiency due to optimized lightweight design." },
    { title: "Faster Turnaround", description: "Faster container turnaround times at ports, CFS, and ICDs." },
    { title: "Reduced Weight", description: "Significant reduction in dead weight compared to flatbed trailers." },
    { title: "Low Maintenance", description: "Designed for low maintenance and long service life, maximizing uptime." }
];

export default function SkeletalTrailersPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'skeletal-hero');

  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero Section */}
            <section className="bg-secondary relative mx-auto lg:w-[1024px] md:w-full">
         <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-16 md:pt-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedElement className="text-center md:text-left">
                    {/* <Breadcrumb className="mb-4 justify-center md:justify-start">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link href="/industries/manufacturing">Manufacturing</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link href="/industries/manufacturing/trailers">Trailers</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Skeletal Trailers</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb> */}

                    <h1 className="text-3xl font-extrabold tracking-tight font-headline">Skeletal Trailers</h1>
                    <p className="mt-2 text-md text-muted-foreground max-w-lg mx-auto md:mx-0">
                        Engineered for efficient ISO container transport with superior payload efficiency and reliability.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" asChild>
                            <Link href="#configurations">Request Specifications</Link>
                        </Button>
                    </div>
                </AnimatedElement>
                <AnimatedElement delay={0.1}>
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            width={600}
                            height={400}
                            className="rounded-lg object-cover shadow-xl aspect-video"
                            data-ai-hint={heroImage.imageHint}
                            priority
                        />
                    )}
                </AnimatedElement>
            </div>
         </div>
         {/* Key Specs Strip */}
         <div className="bg-primary/5 border-t border-b border-border mt-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-4">
                    {keySpecs.map(spec => (
                        <AnimatedElement key={spec.label}>
                            <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">{spec.label}</p>
                            <p className="text-lg font-bold text-primary">{spec.value}</p>
                        </AnimatedElement>
                    ))}
                </div>
            </div>
         </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* 2. Primary Applications */}
        {/* <section>
             <h2 className="text-3xl font-bold font-headline text-center">Primary Applications</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map((app, index) => (
                    <AnimatedElement key={app.title} delay={index * 0.1}>
                         <Card className="text-center p-6 border-t-4 border-transparent hover:border-accent shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                {app.icon}
                            </div>
                            <h3 className="font-semibold text-lg">{app.title}</h3>
                        </Card>
                    </AnimatedElement>
                ))}
            </div>
        </section> */}

        {/* 3. Trailer Configurations & Variants */}
        <section id="configurations" className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Configurations & Variants</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {configurations.map((config, index) => (
                    <AnimatedElement key={config.name} delay={index * 0.1}>
                        <Card className="text-center h-full p-6">
                            <h3 className="font-bold text-xl text-primary">{config.name}</h3>
                            <p className="mt-2 text-muted-foreground">{config.description}</p>
                        </Card>
                    </AnimatedElement>
                ))}
            </div>
        </section>

         {/* 4. Engineering & 5. Safety Sections */}
        <section className="mt-12 md:mt-20 grid md:grid-cols-2 gap-12 items-start bg-secondary p-8 md:p-12 rounded-lg">
            <AnimatedElement>
                 <h3 className="text-2xl font-bold font-headline mb-4">Engineering Highlights</h3>
                 <ul className="space-y-3">
                    {engineeringHighlights.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <ArrowRight className="text-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
                 <h3 className="text-2xl font-bold font-headline mb-4">Safety & Compliance</h3>
                  <ul className="space-y-3">
                    {safetyCompliance.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <ShieldCheck className="text-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>
            </AnimatedElement>
        </section>
        
        {/* 6. Operational Advantages */}
        <section className="mt-12 md:mt-20">
            <h2 className="text-3xl font-bold font-headline text-center">Operational Advantages</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {operationalAdvantages.map((item, index) => (
                    <AnimatedElement key={item.title} delay={index * 0.1}>
                         <Card className="shadow-sm">
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardContent>
                         </Card>
                    </AnimatedElement>
                ))}
            </div>
        </section>

        {/* 7. Visual Gallery */}
        {/* <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Visual Gallery</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryImagesData.map((imageData, index) => {
                    if (!imageData) return null;
                    return (
                        <Image
                            key={index}
                            src={imageData.imageUrl}
                            alt={imageData.description}
                            width={500}
                            height={400}
                            className="rounded-lg object-cover shadow-md aspect-video"
                            data-ai-hint={imageData.imageHint}
                        />
                    );
                })}
            </div>
        </section> */}

        {/* 8. Conversion Section */}
        <section className="mt-12 md:mt-20 bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto text-center px-4">
                 <h2 className="text-3xl font-extrabold max-w-3xl mx-auto">Looking for a skeletal trailer for efficient container transport?</h2>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/contact">Talk to Our Experts</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        <Link href="/contact">Request Quote</Link>
                    </Button>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
