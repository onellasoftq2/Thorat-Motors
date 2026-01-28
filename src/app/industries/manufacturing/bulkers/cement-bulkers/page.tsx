
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, HardHat, Factory, Building, Route, ShieldCheck, Layers, Settings, Workflow, CheckCircle } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Data for the page
const useCases = [
    { icon: <Factory className="h-8 w-8 text-accent" />, title: "Cement Manufacturing Plants", description: "Seamless transfer from silos to bulkers for distribution." },
    { icon: <Building className="h-8 w-8 text-accent" />, title: "Ready-Mix Concrete (RMC)", description: "Timely and uncontaminated cement delivery to RMC facilities." },
    { icon: <HardHat className="h-8 w-8 text-accent" />, title: "Infrastructure & Construction", description: "Direct supply of cement to large-scale project sites." },
    { icon: <Route className="h-8 w-8 text-accent" />, title: "Bulk Cement Logistics", description: "Efficient long-haul and regional transport for distributors." },
];

const configurations = [
    { name: 'Capacity Ranges', value: 'From 25 to 50 tons, designed for various operational scales.' },
    { name: 'Tank Construction', value: 'High-strength steel (ST52) pressure vessel for durability and safety.' },
    { name: 'Pneumatic Discharge Systems', value: 'High-performance compressors for rapid, controlled, and dust-free unloading.' },
    { name: 'Custom Configurations', value: 'Tailored solutions for axle configuration, capacity, and specific discharge requirements.' },
];

const whyChooseUs = [
    { title: "Dust-Free & Contamination-Safe", description: "Our fully sealed pneumatic system ensures your cement remains pure from loading to discharge, preventing moisture and contamination." },
    { title: "Engineering Expertise", description: "We specialize in pressure vessel design and pneumatic systems, ensuring optimal performance, safety, and reliability for bulk cement handling." },
    { title: "Operational Efficiency", description: "Designed for rapid loading and unloading, our cement bulkers reduce turnaround times at plants and sites, maximizing your logistical output." },
    { title: "Built for the Long Haul", description: "With robust construction and high-quality components, our bulkers are engineered for a long service life with minimal maintenance, ensuring a lower total cost of ownership." },
];

const qualityStandards = [
    { icon: <ShieldCheck />, title: 'Pressure Vessel Certified', description: 'Tanks are built and tested according to PESO and other pressure vessel standards for maximum safety.'},
    { icon: <Layers />, title: 'Structural Integrity', description: 'FEA-validated designs ensure stability and durability under full load and on diverse terrains.'},
    { icon: <Settings />, title: 'Leak-Proof Testing', description: 'Every bulker undergoes rigorous pressure and leak tests to guarantee a completely sealed system.'},
    { icon: <Workflow />, title: 'Welding & Fabrication Quality', description: 'Certified welders and advanced fabrication techniques ensure flawless and durable construction.'},
];


export default function CementBulkerPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'cement-bulker');

  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero Section */}
      <section className="bg-secondary relative">
         <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <Breadcrumb className="mb-4 justify-center md:justify-start">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink asChild><Link href="/industries/manufacturing">Manufacturing</Link></BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                         <BreadcrumbItem>
                        <BreadcrumbLink asChild><Link href="/industries/manufacturing/bulkers">Bulkers</Link></BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage>Cement Bulkers</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Cement Bulkers</h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                    Engineered for safe, dust-free, and efficient transport of bulk cement and powdered materials.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" asChild>
                        <Link href="#configurations">Request Specifications</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/quote?product=cement-bulker">Enquire Now</Link>
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
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* 3. Introduction Section */}
        <section className="max-w-3xl mx-auto text-center">
             <h2 className="text-3xl font-bold font-headline">The Standard for Modern Cement Transport</h2>
            <div className="mt-3 mb-6 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
                Cement bulkers are specialized tankers designed for transporting cement and other dry powders via a closed pneumatic system. This method prevents product contamination, avoids dust pollution, and allows for controlled, efficient unloading directly into storage silos.
            </p>
        </section>

        {/* 4. Use Cases & Industries */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Key Applications</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map(useCase => (
                    <Card key={useCase.title} className="text-center p-6 border-t-4 border-accent shadow-md">
                        <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            {useCase.icon}
                        </div>
                        <h3 className="font-semibold text-lg">{useCase.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{useCase.description}</p>
                    </Card>
                ))}
            </div>
        </section>

        {/* 5. Product Configurations */}
        <section id="configurations" className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Product Configurations</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {configurations.map(config => (
                    <div key={config.name} className="p-6 bg-secondary rounded-lg">
                        <h3 className="font-bold text-xl text-primary">{config.name}</h3>
                        <p className="mt-2 text-muted-foreground">{config.value}</p>
                    </div>
                ))}
            </div>
        </section>

         {/* 6. Engineering & Manufacturing Excellence */}
        <section className="mt-12 md:mt-20 grid md:grid-cols-2 gap-12 items-center bg-secondary p-8 md:p-12 rounded-lg">
            <div className='order-2 md:order-1'>
                 <h2 className="text-3xl font-bold font-headline">Engineering & Manufacturing Excellence</h2>
                <div className="mt-3 mb-6 w-20 h-1.5 bg-accent"></div>
                 <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Our cement bulkers are built in-house with a focus on structural integrity and performance. We use high-strength steel for a lightweight yet robust tank, precision welding for leak-proof seams, and reliable pneumatic systems for consistent discharge performance.
                </p>
                <div className="space-y-3">
                    <p className="flex items-center"><Check className="text-green-500 mr-2" /> Optimized tank design for better weight distribution and stability.</p>
                     <p className="flex items-center"><Check className="text-green-500 mr-2" /> High-quality compressors and discharge equipment for reliability.</p>
                </div>
            </div>
             <div className='order-1 md:order-2'>
                <Image
                    src="https://images.unsplash.com/photo-1633449494745-6a467f40e0b3?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Manufacturing Strength"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover shadow-md aspect-video"
                    data-ai-hint="welding fabrication"
                />
            </div>
        </section>

        {/* 7. Compliance & Quality Assurance */}
        <section className="mt-12 md:mt-20">
          <h2 className="text-3xl font-bold font-headline text-center mb-2">Compliance & Quality Assurance</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((item) => (
              <div key={item.title} className="text-center">
                {React.cloneElement(item.icon, { className: "h-10 w-10 text-accent mx-auto mb-4" })}
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

         {/* 9. Why Choose Us */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Why Choose Our Cement Bulkers?</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 bg-primary/10 text-accent p-3 rounded-full">
                            <CheckCircle className="h-8 w-8" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                            <p className="mt-1 text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* 10. Conversion Section */}
        <section className="mt-12 md:mt-20 bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto text-center">
                 <h2 className="text-3xl font-extrabold">Looking for a cement bulker designed for efficient and safe bulk transport?</h2>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/quote?product=cement-bulker">Enquire Now</Link>
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
