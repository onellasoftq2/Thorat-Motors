
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ShieldCheck, ArrowRight, Construction, Zap, Mountain, Globe } from 'lucide-react';
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
    { label: "Cargo Type", value: "Heavy & Over-dimensional" },
    { label: "Load Capacity", value: "High" },
    { label: "Deck Design", value: "Semi Lowbed" },
];

const applications = [
    { icon: <Construction className="h-8 w-8 text-accent" />, title: "Construction & Infrastructure", imageId: "semi-lowbed-app-construction" },
    { icon: <Zap className="h-8 w-8 text-accent" />, title: "Power & Energy Sector", imageId: "semi-lowbed-app-energy" },
    { icon: <Mountain className="h-8 w-8 text-accent" />, title: "Mining & Quarry Machinery", imageId: "semi-lowbed-app-mining" },
    { icon: <Globe className="h-8 w-8 text-accent" />, title: "Industrial & Project Cargo", imageId: "semi-lowbed-app-cargo" },
];

const configurations = [
    { name: 'Load Capacity Ranges', description: 'Engineered for high-tonnage capacities, tailored to specific heavy equipment.' },
    { name: 'Deck Height & Length Options', description: 'Optimized low deck heights for stability with customizable lengths for oversized cargo.' },
    { name: 'Axle & Suspension Configurations', description: 'Multi-axle configurations with heavy-duty mechanical or air suspension for superior load bearing.' },
    { name: 'Ramp & Loading Options', description: 'Available with hydraulic or manual ramps designed for safe and efficient equipment loading.' },
    { name: 'Custom Reinforcements', description: 'Bespoke chassis and deck reinforcements based on the specific footprint and weight of your equipment.' },
];

const engineeringHighlights = [ "Optimized low center of gravity for exceptional stability with tall and heavy loads.", "High-tensile chassis construction engineered to handle concentrated and dynamic loads.", "Structural analysis to ensure maximum strength and durability without excess weight.", "Precision fabrication and welding to guarantee structural integrity and a long service life." ];

const safetyCompliance = [ "Advanced stability analysis to ensure safe transit on diverse terrains.", "Multiple high-strength lashing points and anchoring systems for secure cargo fastening.", "Full compliance with all CMVR and heavy transport manufacturing standards.", "High-performance braking and suspension systems for reliable control under maximum load." ];

const operationalAdvantages = [ "Enables the safe and legal transport of tall equipment that would exceed height limits on standard trailers.", "Low deck height reduces the risk associated with loading and unloading heavy machinery.", "Provides access to routes with height restrictions, increasing logistical flexibility.", "Built for durability in demanding environments, ensuring a high return on investment." ];

export default function SemiLowbedTrailersPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'semi-lowbed-hero');

    const galleryImagesData = [
        PlaceHolderImages.find(img => img.id === 'semi-lowbed-gallery-1'),
        PlaceHolderImages.find(img => img.id === 'semi-lowbed-gallery-2'),
        PlaceHolderImages.find(img => img.id === 'semi-lowbed-gallery-3'),
    ];


  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero Section */}
            <section className="bg-secondary relative mx-auto lg:w-[1024px] md:w-full">
         <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-16 md:pt-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
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
                                <BreadcrumbPage>Semi Lowbed Trailers</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb> */}

                    <h1 className="text-3xl font-extrabold tracking-tight font-headline">Semi Lowbed Trailers</h1>
                    <p className="mt-2 text-md text-muted-foreground max-w-lg mx-auto md:mx-0">
                        Engineered for low deck height and high load stability, ensuring the safe transport of heavy and over-dimensional equipment.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" asChild>
                            <Link href="#configurations">Request Specifications</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/quote?product=semi-lowbed-trailer">Enquire Now</Link>
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
        {/* <section>
             <h2 className="text-3xl font-bold font-headline text-center">Primary Applications</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map(app => {
                    const appImage = PlaceHolderImages.find(p => p.id === app.imageId);
                    return (
                        <Card key={app.title} className="overflow-hidden group text-center">
                            {appImage && <Image src={appImage.imageUrl} alt={app.title} width={400} height={250} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" />}
                            <CardContent className="p-6">
                                 <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    {app.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{app.title}</h3>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section> */}

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
                 <h2 className="text-3xl font-extrabold max-w-3xl mx-auto">Looking for a semi lowbed trailer engineered for safe and stable heavy equipment transport?</h2>
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
