
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, ShieldCheck, Layers, Settings, Workflow, Route, Building, Leaf, Factory } from 'lucide-react';
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
    { icon: <Route className="h-8 w-8 text-accent" />, title: "Long-Haul Bulk Logistics", description: "Efficient long-distance transport of bulk goods for major fleet operators." },
    { icon: <Building className="h-8 w-8 text-accent" />, title: "Cement & Fly Ash", description: "High-capacity, contamination-free transport for the cement industry." },
    { icon: <Leaf className="h-8 w-8 text-accent" />, title: "Food-Grade Bulk Transport", description: "Hygienic configurations for transporting grains, flour, and other food products." },
    { icon: <Factory className="h-8 w-8 text-accent" />, title: "Industrial Supply Chains", description: "Reliable movement of raw materials like powders and minerals for industrial use." },
];

const configurations = [
    { name: 'Capacity & Volume Ranges', value: 'From 40 to 70 CBM, designed for high-volume, long-haul efficiency.' },
    { name: 'Trailer Axle Configurations', value: 'Tandem and tridem axle configurations for optimal load distribution and stability.' },
    { name: 'Tank & Body Construction', value: 'High-strength steel (ST52) or food-grade stainless steel (SS304/SS316) options.' },
    { name: 'Discharge Systems', value: 'Advanced pneumatic systems for rapid, controlled unloading or gravity-based systems for specific materials.' },
    { name: 'Custom Fleet Solutions', value: 'Bespoke designs tailored to your fleet’s specific operational and material requirements.' },
];

const whyChooseUs = [
    { title: "High-Capacity & Efficient Transport", description: "Our bulker trailers are optimized for maximum payload and efficient unloading, reducing turnaround times and increasing your operational profitability." },
    { title: "Engineering Expertise in Trailers", description: "We leverage our deep experience in trailer manufacturing to build bulker trailers that offer superior stability, safety, and performance on the road." },
    { title: "Custom Solutions for Your Cargo", description: "We engineer solutions for different bulk materials, from cement to food grains, ensuring the integrity of your cargo and compliance with all standards." },
    { title: "Long-Term Durability & Reliability", description: "Built with high-quality materials and robust construction, our bulker trailers are designed for a long service life, ensuring a lower total cost of ownership for your fleet." },
];

const qualityStandards = [
    { icon: <ShieldCheck />, title: 'Automotive Certified', description: 'Trailers are built to comply with all CMVR and other applicable automotive standards for safety on the road.'},
    { icon: <Layers />, title: 'Structural Load Testing', description: 'FEA-validated designs and physical load tests ensure stability and durability under maximum payload.'},
    { icon: <Settings />, title: 'Discharge System Validation', description: 'Pneumatic and mechanical systems are rigorously tested for performance, reliability, and safety.'},
    { icon: <Workflow />, title: 'Fabrication Quality', description: 'Certified welders and multi-stage inspections guarantee a flawless and durable final product.'},
];


export default function BulkerTrailersPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'bulker-trailer-hero');

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
                        <BreadcrumbPage>Bulker Trailers</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Bulker Trailers</h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                    Engineered for high-volume, stable, and efficient bulk material transport over long distances.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" asChild>
                        <Link href="#configurations">Request Specifications</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/quote?product=bulker-trailer">Enquire Now</Link>
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
             <h2 className="text-3xl font-bold font-headline">The Backbone of Long-Haul Bulk Transport</h2>
            <div className="mt-3 mb-6 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
                Bulker trailers are high-capacity semi-trailers designed for the efficient transport of dry bulk materials like cement, food grains, and industrial powders over long distances. Their design prioritizes stability, payload optimization, and reliable unloading systems to support modern supply chains.
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
                 <h2 className="text-3xl font-bold font-headline">Engineering for Stability & Efficiency</h2>
                <div className="mt-3 mb-6 w-20 h-1.5 bg-accent"></div>
                 <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Our bulker trailers are designed with a focus on structural stability and weight optimization to maximize payload. We use precision fabrication and assembly techniques to ensure every trailer meets high standards for durability, especially for demanding long-haul operations.
                </p>
                <div className="space-y-3">
                    <p className="flex items-center"><Check className="text-green-500 mr-2" /> Optimized chassis design for superior on-road stability.</p>
                     <p className="flex items-center"><Check className="text-green-500 mr-2" /> High-quality welding and finishing for long-term corrosion resistance.</p>
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
             <h2 className="text-3xl font-bold font-headline text-center">Why Choose Our Bulker Trailers?</h2>
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
                 <h2 className="text-3xl font-extrabold">Looking for a bulker trailer built for high-volume and long-haul operations?</h2>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/quote?product=bulker-trailer">Enquire Now</Link>
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
