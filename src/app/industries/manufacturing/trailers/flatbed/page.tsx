
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, Cog, Layers, Construction, Package, ShieldCheck, ArrowRight } from 'lucide-react';
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
    { label: "Load Type", value: "Oversized & Heavy Cargo" },
    { label: "Capacity Range", value: "Medium to High" },
    { label: "Deck Type", value: "Open Flat Deck" },
];

const applications = [
    { icon: <Cog className="h-8 w-8 text-accent" />, title: "Machinery & Equipment", imageId: "flatbed-app-machinery" },
    { icon: <Layers className="h-8 w-8 text-accent" />, title: "Steel & Structural Materials", imageId: "flatbed-app-steel" },
    { icon: <Construction className="h-8 w-8 text-accent" />, title: "Infrastructure & Construction", imageId: "flatbed-app-construction" },
    { icon: <Package className="h-8 w-8 text-accent" />, title: "Industrial Project Logistics", imageId: "flatbed-app-logistics" },
];

const configurations = [
    { name: 'Deck Length & Width Options', description: 'Available in standard lengths from 40 to 53 feet, with custom dimensions available.' },
    { name: 'Load Capacity Variants', description: 'Engineered for a wide range of payloads, from standard to heavy-duty applications.' },
    { name: 'Deck Surface & Reinforcement', description: 'Options include high-strength steel checkered plates or durable hardwood flooring.' },
    { name: 'Lashing Points & Load Securing', description: 'Multiple integrated lashing rings, twist locks, and stake pockets for secure cargo transport.' },
    { name: 'Custom Build Options', description: 'Tailored designs for specific cargo types, including extendable decks and specialized reinforcements.' },
];

const engineeringHighlights = [ "High-tensile chassis construction for superior strength-to-weight ratio.", "Optimized load distribution for enhanced stability and safety.", "Structural rigidity engineered to prevent sagging and flexing under heavy loads.", "Precision fabrication and multi-layer coating for long-term durability." ];

const safetyCompliance = [ "Load stability analysis and design validation.", "Secure anchoring systems including high-strength lashing points and twist locks.", "Compliance with all applicable CMVR and automotive manufacturing standards.", "Advanced braking systems for reliable performance." ];

const operationalAdvantages = [ "Easy side and top loading/unloading with cranes or forklifts.", "High flexibility to accommodate a wide variety of cargo shapes and sizes.", "Seamless integration with standard fleet tractors and operations.", "Designed for low maintenance, ensuring maximum uptime and lower total cost of ownership." ];

export default function FlatbedTrailersPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'flatbed-hero');

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
                                <BreadcrumbPage>Flatbed Trailers</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Flatbed Trailers</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                        Engineered for maximum load flexibility and heavy-duty performance in the most demanding conditions.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" asChild>
                            <Link href="#configurations">Request Specifications</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/quote?product=flatbed-trailer">Enquire Now</Link>
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
                 <h2 className="text-3xl font-extrabold max-w-3xl mx-auto">Looking for a flatbed trailer built for versatile and heavy-duty operations?</h2>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/quote?product=flatbed-trailer">Enquire Now</Link>
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
