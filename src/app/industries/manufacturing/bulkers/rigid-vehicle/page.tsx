
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, HardHat, Truck, Route, Settings, ShieldCheck, Layers, Workflow, TestTube, CheckCircle } from 'lucide-react';
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
    { icon: <Truck className="h-8 w-8 text-accent" />, title: "Industrial Logistics", description: "Transport finished goods and raw materials." },
    { icon: <HardHat className="h-8 w-8 text-accent" />, title: "Construction", description: "Move materials and equipment to job sites." },
    { icon: <Route className="h-8 w-8 text-accent" />, title: "Regional Movement", description: "Efficient urban and regional distribution." },
    { icon: <Settings className="h-8 w-8 text-accent" />, title: "Specialized Apps", description: "Custom bodies for specialized cargo." },
];

const configurations = [
    { name: 'Load Capacity', value: 'Wide range of tonnage capacities.' },
    { name: 'Body Types', value: 'Flatbed, box, curtain-sider, and custom configs.' },
    { name: 'Materials & Build', value: 'High-strength steel (IS2062, BSK46).' },
    { name: 'Customization', value: 'Custom dimensions, flooring, and fittings.' },
];

const qualityStandards = [
    { icon: <ShieldCheck />, title: 'Automotive Standards', description: 'CMVR compliant construction.' },
    { icon: <Layers />, title: 'Structural Testing', description: 'FEA-validated for stability and performance.' },
    { icon: <TestTube />, title: 'Material Validation', description: 'Material quality checks to meet standards.' },
    { icon: <Workflow />, title: 'Quality Inspection', description: 'Rigorous inspection at every stage.' },
];

const whyChooseUs = [
    { title: "Robust Construction for Long Service Life" },
    { title: "Precision Engineering for Safety & Stability" },
    { title: "Application-Specific Customization" },
    { title: "Dependable Nationwide Service & Support" },
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
                    Strength, stability, and reliability for industrial transport.
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
                Rigid vehicles, with a body built onto a fixed chassis, offer superior stability and handling. Ideal for short to medium-haul operations with maximum control.
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
                    Our process focuses on precision chassis integration and superior fabrication. We ensure optimal load balance and durability with rigorous inspections.
                </p>
                <div className="space-y-3">
                    <p className="flex items-center"><Check className="text-green-500 mr-2" /> Precision chassis integration.</p>
                    <p className="flex items-center"><Check className="text-green-500 mr-2" /> High-quality fabrication and finishing.</p>
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
              </div>
            ))}
          </div>
        </section>

        {/* 9. Why Choose Us */}
        <section className="mt-12 md:mt-20">
            <h2 className="text-3xl font-bold font-headline text-center">Why Choose Our Rigid Vehicles?</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-4xl mx-auto bg-secondary p-8 md:p-12 rounded-lg shadow-inner">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {whyChooseUs.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                            <p className="font-semibold text-lg">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 10. Conversion Section */}
        <section className="mt-12 md:mt-20 bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-extrabold">Looking for a dependable rigid vehicle?</h2>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/quote?product=rigid-vehicle">Enquire Now</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        <Link href="/contact">Talk to Our Team</Link>
                    </Button>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
