
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldCheck, Layers, Settings, Workflow, Droplet, Factory, Milk, Thermometer, Sparkles, TestTube } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const hygieneFeatures = [
    { title: "Food-Grade Construction", description: "Built entirely from SS304 or SS316 food-grade stainless steel to ensure product purity." },
    { title: "Smooth Internal Surfaces", description: "Seamless, polished interiors with no crevices or sharp corners to prevent residue buildup." },
    { title: "CIP System Compatibility", description: "Designed for easy and effective Clean-in-Place (CIP) processes to maintain the highest hygiene standards." },
    { title: "Secure Sealing", description: "Airtight seals on all manholes and valves to protect against external contaminants." },
];

const applications = [
    { icon: <Milk className="h-8 w-8 text-accent" />, title: "Farm to Dairy Collection" },
    { icon: <Factory className="h-8 w-8 text-accent" />, title: "Inter-Plant Transfers" },
    { icon: <Droplet className="h-8 w-8 text-accent" />, title: "Chilled Milk Distribution" },
    { icon: <Settings className="h-8 w-8 text-accent" />, title: "Cooperative Society Logistics" },
];

const constructionConfigs = [
    { name: 'Tank Material & Finish', description: 'Food-grade stainless steel (SS304/SS316) with a smooth, polished internal finish for maximum hygiene.' },
    { name: 'Capacity Ranges', description: 'Available in various capacities from 3,000 to 20,000 liters, as rigid tankers or semi-trailers.' },
    { name: 'Compartmentalization', description: 'Single or multi-compartment designs to transport different milk grades or quantities simultaneously.' },
    { name: 'Insulation & Temperature Control', description: 'High-quality PUF insulation to maintain milk temperature during long transit periods.' },
    { name: 'Custom Configurations', description: 'Bespoke designs for specific operational needs, including chassis integration and valve systems.' },
];

const complianceStandards = [
    { icon: <ShieldCheck />, title: 'Food-Grade Standards', description: 'Constructed in compliance with national and international food safety standards for dairy transport.' },
    { icon: <Sparkles />, title: 'Hygiene & Cleaning Validation', description: 'Every tank is designed and tested for effective cleaning and sanitization, ensuring no microbial contamination.' },
    { icon: <TestTube />, title: 'Leak-Proof Testing', description: 'Rigorous hydrostatic and seal integrity tests to guarantee a completely leak-proof and airtight containment system.' },
    { icon: <Workflow />, title: 'Material Certification', description: 'All stainless steel and components are certified food-grade and fully traceable.' },
];


export default function MilkTankPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'milk-tank-hero');
    const galleryImages = [
        PlaceHolderImages.find(p => p.id === 'milk-tank-gallery-1'),
        PlaceHolderImages.find(p => p.id === 'milk-tank-gallery-2'),
        PlaceHolderImages.find(p => p.id === 'milk-tank-gallery-3'),
    ];

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
                            <BreadcrumbLink asChild><Link href="/industries/manufacturing/tankers">Tankers</Link></BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Milk Tank</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Milk Tank</h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                    Engineered for hygienic, temperature-safe, and reliable transport of fresh milk.
                </p>
                 <div className="mt-6">
                    <span className="inline-block bg-primary/10 text-primary border border-primary/20 font-semibold rounded-full px-4 py-2 text-sm">Transport Medium: Food-Grade Liquid</span>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" asChild>
                        <Link href="#configurations">Request Technical Details</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/quote?product=milk-tank">Enquire Now</Link>
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
        {/* 2. What it carries */}
        <section className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline">Preserving Freshness from Farm to Dairy</h2>
            <div className="mt-3 mb-6 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
                Our milk tanks are exclusively designed to transport fresh milk under the most stringent hygienic conditions. Every element of the tank is engineered to preserve milk quality, prevent contamination, and maintain optimal temperature from collection to delivery.
            </p>
        </section>

        {/* 3. Hygiene & Contamination Prevention */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Hygiene & Contamination Prevention</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {hygieneFeatures.map(item => (
                    <div key={item.title} className="p-6 bg-secondary rounded-lg">
                        <h3 className="font-bold text-xl text-primary">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 4. Applications & Dairy Operations */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Applications & Dairy Operations</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {applications.map(item => (
                    <Card key={item.title} className="text-center p-6 border-t-4 border-accent shadow-md">
                        <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            {item.icon}
                        </div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                    </Card>
                ))}
            </div>
        </section>
        
        {/* 5. Tank Construction & Configurations */}
        <section id="configurations" className="mt-12 md:mt-20">
            <h2 className="text-3xl font-bold font-headline text-center">Tank Construction & Configurations</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
            <div className="max-w-4xl mx-auto space-y-6">
                 {constructionConfigs.map(config => (
                    <div key={config.name} className="flex items-start gap-4 p-4 border-l-4 border-accent bg-secondary/50 rounded-r-lg">
                        <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg text-primary">{config.name}</h3>
                            <p className="mt-1 text-muted-foreground">{config.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        
        {/* 6. Compliance, Standards & Quality Checks */}
        <section className="mt-12 md:mt-20">
          <h2 className="text-3xl font-bold font-headline text-center mb-2">Compliance, Standards & Quality Checks</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((item) => (
              <div key={item.title} className="text-center">
                {React.cloneElement(item.icon, { className: "h-10 w-10 text-accent mx-auto mb-4" })}
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Operational Considerations */}
        <section className="mt-12 md:mt-20 bg-secondary p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-bold font-headline text-center mb-10">Operational Considerations</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">Ease of Cleaning</h3>
                    <p className="text-muted-foreground">Designed for quick and thorough sanitization, reducing downtime and ensuring hygiene.</p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">Temperature Retention</h3>
                    <p className="text-muted-foreground">Superior insulation maintains milk temperature, critical for quality and safety.</p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">Low Maintenance</h3>
                    <p className="text-muted-foreground">High-quality materials and construction minimize maintenance needs and extend service life.</p>
                </div>
            </div>
        </section>
        
        {/* 8. Visual Gallery */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Visual Gallery</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryImages.map((imageData, index) => {
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
        </section>
        
        {/* 9. Conversion Section */}
        <section className="mt-12 md:mt-20 bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto text-center px-4">
                 <h2 className="text-3xl font-extrabold max-w-3xl mx-auto">Looking for a milk tanker designed for hygienic and reliable dairy transport?</h2>
                 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/quote?product=milk-tank">Enquire Now</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        <Link href="/contact">Talk to Our Engineering Team</Link>
                    </Button>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
