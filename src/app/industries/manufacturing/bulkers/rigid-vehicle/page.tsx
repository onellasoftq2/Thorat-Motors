
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, HardHat, Truck, Route, Settings, ShieldCheck, Layers, Workflow, TestTube } from 'lucide-react';
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
    { icon: <Truck className="h-8 w-8 text-accent" />, title: "Industrial & Commercial Logistics", description: "Reliable transport for finished goods, raw materials, and components." },
    { icon: <HardHat className="h-8 w-8 text-accent" />, title: "Construction & Infrastructure", description: "Moving materials, equipment, and supplies directly to the job site." },
    { icon: <Route className="h-8 w-8 text-accent" />, title: "Intra-City & Regional Movement", description: "Optimized for efficient transport in urban and regional distribution networks." },
    { icon: <Settings className="h-8 w-8 text-accent" />, title: "Specialized Applications", description: "Custom-built bodies for specific cargo like perishables, electronics, or machinery." },
];

const configurations = [
    { name: 'Load Capacity Options', value: 'Wide range of tonnage capacities to suit various operational scales.' },
    { name: 'Body Types & Structures', value: 'Offered in flatbed, box, curtain-sider, and custom structural configurations.' },
    { name: 'Materials & Build', value: 'High-strength steel (IS2062, BSK46) for chassis and body components.' },
    { name: 'Customization', value: 'Tailored solutions for body dimensions, flooring, and specialized fittings.' },
];

const qualityStandards = [
    { icon: <ShieldCheck />, title: 'Automotive Standards', description: 'Built in compliance with CMVR and other applicable automotive regulations.' },
    { icon: <Layers />, title: 'Structural Testing', description: 'FEA-validated designs to ensure stability and performance under all load conditions.' },
    { icon: <TestTube />, title: 'Material Validation', description: 'All materials undergo quality checks to ensure they meet our high-strength standards.' },
    { icon: <Workflow />, title: 'Quality Inspection', description: 'Rigorous inspection at every stage, from fabrication to final assembly and finishing.' },
];

const whyChooseUs = [
    { title: "Robust Construction & Long Life", description: "Engineered with high-tensile steel and superior fabrication techniques to deliver a long, reliable service life and a lower total cost of ownership." },
    { title: "Engineering Precision & Reliability", description: "Our focus on precision chassis integration and optimal load balance results in vehicles that are stable, safe, and dependable in any operating condition." },
    { title: "Application-Specific Customization", description: "We work closely with clients to design and build rigid vehicles that are perfectly matched to their specific cargo, route, and operational needs." },
    { title: "Dependable Service & Support", description: "Backed by a nationwide network, we provide responsive after-sales support and spare parts availability to keep your fleet moving." },
];

export default function RigidVehiclesPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'rigid-vehicle');
    
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
                            <BreadcrumbPage>Rigid Vehicles</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Rigid Vehicles</h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                    Engineered for exceptional strength, stability, and operational reliability in industrial transport.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" asChild>
                        <Link href="#configurations">Request Specifications</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/quote?product=rigid-vehicle">Enquire Now</Link>
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
            <h2 className="text-3xl font-bold font-headline">The Benchmark for Integrated Transport</h2>
            <div className="mt-3 mb-6 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
                Rigid vehicles, where the body is built directly onto a fixed chassis, offer superior load stability and handling. This integrated design makes them ideal for short to medium-haul industrial and commercial operations, ensuring your cargo is transported with maximum control and safety.
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
                    Our manufacturing process focuses on precision chassis integration and superior fabrication quality. We ensure optimal load balance and structural durability in every vehicle, with rigorous in-house inspections guaranteeing a high-quality finish and reliable performance.
                </p>
                <div className="space-y-3">
                    <p className="flex items-center"><Check className="text-green-500 mr-2" /> Precision chassis integration for enhanced stability.</p>
                    <p className="flex items-center"><Check className="text-green-500 mr-2" /> High-quality fabrication and finishing for long-term durability.</p>
                </div>
            </div>
            <div className='order-1 md:order-2'>
                <Image
                    src="https://images.unsplash.com/photo-1633449494745-6a467f40e0b3?q=80&w=1974&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Manufacturing Excellence"
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
            <h2 className="text-3xl font-bold font-headline text-center">Why Choose Our Rigid Vehicles?</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-4xl mx-auto space-y-8">
                {whyChooseUs.map((item, index) => (
                    <Card key={index} className="shadow-md">
                        <CardHeader>
                            <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        {/* 10. Conversion Section */}
        <section className="mt-12 md:mt-20 bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-extrabold">Looking for a rigid vehicle engineered for dependable industrial transport?</h2>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/quote?product=rigid-vehicle">Enquire Now</Link>
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
