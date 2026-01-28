
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ShieldCheck, ArrowRight, Anchor, Warehouse, Globe, Truck } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Data for the page
const keySpecs = [
    { label: "Cargo Type", value: "ISO Containers" },
    { label: "Container Sizes", value: "20 ft / 40 ft" },
    { label: "Trailer Type", value: "Skeletal / Container Chassis" },
];

const applications = [
    { icon: <Anchor className="h-8 w-8 text-accent" />, title: "Port & Terminal Operations", imageId: "skeletal-app-port" },
    { icon: <Warehouse className="h-8 w-8 text-accent" />, title: "Container Freight Stations (CFS)", imageId: "skeletal-app-cfs" },
    { icon: <Globe className="h-8 w-8 text-accent" />, title: "Inland Container Depots (ICD)", imageId: "skeletal-app-icd" },
    { icon: <Truck className="h-8 w-8 text-accent" />, title: "Long-Haul & Multimodal Logistics", imageId: "skeletal-app-logistics" },
];

const configurations = [
    { name: 'Supported Container Sizes', description: 'Engineered to carry 1x20ft, 2x20ft, or 1x40ft ISO containers.' },
    { name: 'Axle & Suspension Configurations', description: 'Tandem and tridem axle options with heavy-duty mechanical or air suspension.' },
    { name: 'Twist-Lock Systems', description: 'Equipped with high-quality, certified twist-locks for secure container anchoring.' },
    { name: 'Weight-Optimized Chassis', description: 'High-strength, lightweight steel chassis designed to maximize payload capacity.' },
    { name: 'Custom Fleet Solutions', description: 'Tailored designs for specific fleet requirements, operational routes, and regulatory needs.' },
];

const engineeringHighlights = [ "High-tensile, lightweight chassis design for maximum payload and fuel efficiency.", "Precision-engineered, fail-safe twist-lock mechanisms for secure container handling.", "Optimized load distribution for superior on-road stability, both loaded and empty.", "Durable fabrication quality designed for the high-cycle demands of container logistics." ];

const safetyCompliance = [ "Secure container locking systems to prevent shifting and ensure transport safety.", "FEA-validated designs for stability under all dynamic loading conditions.", "Full compliance with CMVR and all applicable trailer manufacturing standards.", "Advanced braking systems for reliable and safe performance in all operating environments." ];

const operationalAdvantages = [ "Higher payload efficiency due to optimized lightweight design.", "Faster container turnaround times at ports, CFS, and ICDs.", "Significant reduction in dead weight compared to full-body flatbed trailers.", "Designed for low maintenance and long service life, maximizing fleet uptime." ];

export default function SkeletalTrailersPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'skeletal-hero');

  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero Section */}
      <section className="bg-secondary relative">
         <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-16 md:pt-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <Breadcrumb className="mb-4 justify-center md:justify-start">
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
                    </Breadcrumb>

                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Skeletal Trailers</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                        Engineered for efficient ISO container transport with superior payload efficiency and reliability.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" asChild>
                            <Link href="#configurations">Request Specifications</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/quote?product=skeletal-trailer">Enquire Now</Link>
                        </Button>
                    </div>
                </div>
                <div>
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
                </div>
            </div>
         </div>
         {/* Key Specs Strip */}
         <div className="bg-primary/5 border-t border-b border-border mt-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-4">
                    {keySpecs.map(spec => (
                        <div key={spec.label}>
                            <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">{spec.label}</p>
                            <p className="text-lg font-bold text-primary">{spec.value}</p>
                        </div>
                    ))}
                </div>
            </div>
         </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* 2. Primary Applications */}
        <section>
             <h2 className="text-3xl font-bold font-headline text-center">Primary Applications</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map(app => {
                    const appImage = PlaceHolderImages.find(p => p.id === app.imageId);
                    return (
                        <Card key={app.title} className="overflow-hidden group text-center">
                            {appImage && <Image src={appImage.imageUrl} alt={app.title} width={400} height={250} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" />}
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lg">{app.title}</h3>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>

        {/* 3. Trailer Configurations & Variants */}
        <section id="configurations" className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Configurations & Variants</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-4xl mx-auto space-y-8">
                 {configurations.map(config => (
                    <div key={config.name} className="flex items-start gap-4">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-primary">{config.name}</h3>
                            <p className="mt-1 text-muted-foreground">{config.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

         {/* 4. Engineering & 5. Safety Sections */}
        <section className="mt-12 md:mt-20 grid md:grid-cols-2 gap-12 items-start bg-secondary p-8 md:p-12 rounded-lg">
            <div>
                 <h3 className="text-2xl font-bold font-headline mb-4">Engineering Highlights</h3>
                 <ul className="space-y-3">
                    {engineeringHighlights.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <ArrowRight className="text-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>
            </div>
            <div>
                 <h3 className="text-2xl font-bold font-headline mb-4">Safety & Compliance</h3>
                  <ul className="space-y-3">
                    {safetyCompliance.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <ShieldCheck className="text-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>
            </div>
        </section>
        
        {/* 6. Operational Advantages */}
        <section className="mt-12 md:mt-20">
            <h2 className="text-3xl font-bold font-headline text-center">Operational Advantages</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {operationalAdvantages.map(item => (
                     <Card key={item} className="shadow-sm">
                        <CardContent className="pt-6">
                            <p className="font-medium text-lg">{item}</p>
                        </CardContent>
                     </Card>
                ))}
            </div>
        </section>

        {/* 8. Conversion Section */}
        <section className="mt-12 md:mt-20 bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto text-center px-4">
                 <h2 className="text-3xl font-extrabold max-w-3xl mx-auto">Looking for a skeletal trailer optimized for reliable and efficient container transport?</h2>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/quote?product=skeletal-trailer">Enquire Now</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        <Link href="/contact">Talk to Our Manufacturing Team</Link>
                    </Button>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
