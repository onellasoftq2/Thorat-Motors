
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldCheck, Layers, Settings, Workflow, Droplet, Factory, Shield, GitBranchPlus } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const safetyFeatures = [
    { title: "Leak Prevention", description: "Precision welding and high-integrity seals ensure a zero-leakage design for safe containment." },
    { title: "Structural Integrity", description: "Engineered with high-strength materials and reinforced for stability under dynamic liquid loads." },
    { title: "Pressure Management", description: "Equipped with calibrated pressure relief valves and monitoring systems for safe operation." },
    { title: "Secure Handling", description: "Designed for controlled loading and unloading to minimize spillage and operational risk." },
];

const applications = [
    { icon: <Factory className="h-8 w-8 text-accent" />, title: "Industrial Liquid Transport" },
    { icon: <GitBranchPlus className="h-8 w-8 text-accent" />, title: "Controlled Material Logistics" },
    { icon: <Droplet className="h-8 w-8 text-accent" />, title: "Specialized Supply Chains" },
    { icon: <Settings className="h-8 w-8 text-accent" />, title: "Application-Specific Use Cases" },
];

const constructionConfigs = [
    { name: 'Tank Material Options', description: 'Available in stainless steel (SS304/SS316), carbon steel, or other specialized alloys based on fluid compatibility.' },
    { name: 'Capacity Ranges', description: 'Wide range of capacities available, from smaller rigid-mounted tanks to large-volume semi-trailers.' },
    { name: 'Compartmentalization', description: 'Single or multi-compartment designs to transport different liquids simultaneously without cross-contamination.' },
    { name: 'Chassis Integration', description: 'Offered as integrated rigid vehicles or as semi-trailers compatible with standard tractors.' },
    { name: 'Custom Configurations', description: 'Bespoke designs for specific operational pressures, temperatures, and fluid characteristics.' },
];

const complianceStandards = [
    { icon: <ShieldCheck />, title: 'PESO & CMVR Compliance', description: 'Built to meet stringent Petroleum and Explosives Safety Organisation (PESO) and CMVR standards.' },
    { icon: <Layers />, title: 'Hydrostatic Testing', description: 'Every tank undergoes rigorous hydrostatic pressure testing to validate structural integrity and leak-proof performance.' },
    { icon: <Settings />, title: 'Weld Quality Inspection', description: 'Non-destructive testing (NDT) and radiographic inspection of weld seams ensure flawless construction.' },
    { icon: <Workflow />, title: 'Material Certification', description: 'All materials used are certified and traceable to ensure they meet design specifications and safety standards.' },
];


export default function CragganmoreTankPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'cragganmore-hero');
    const galleryImages = [
        PlaceHolderImages.find(p => p.id === 'cragganmore-gallery-1'),
        PlaceHolderImages.find(p => p.id === 'cragganmore-gallery-2'),
        PlaceHolderImages.find(p => p.id === 'cragganmore-gallery-3'),
    ];

  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero Section */}
            <section className="bg-secondary relative mx-auto lg:w-[1024px] md:w-full">
         <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                {/* <Breadcrumb className="mb-4 justify-center md:justify-start">
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
                            <BreadcrumbPage>Cragganmore Tank</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb> */}

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Cragganmore Tank</h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                    Engineered for the safe, controlled, and reliable containment of industrial liquids.
                </p>
                 <div className="mt-6">
                    <span className="inline-block bg-primary/10 text-primary border border-primary/20 font-semibold rounded-full px-4 py-2 text-sm">Transport Medium: Industrial Liquids & Chemicals</span>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" asChild>
                        <Link href="#configurations">Request Technical Details</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/quote?product=cragganmore-tank">Enquire Now</Link>
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
            <h2 className="text-3xl font-bold font-headline">Designed for Secure Liquid Containment</h2>
            <div className="mt-3 mb-6 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
                The Cragganmore Tank is engineered to transport a wide range of industrial liquids, ensuring product integrity and safety from source to destination. Its design focuses on robust containment, preventing leaks and contamination under various transport conditions.
            </p>
        </section>

        {/* 3. Safety & Containment Design */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Safety & Containment by Design</h2>
            <div className="mt-3 mb-10 w-20 h-1.5 bg-accent mx-auto"></div>
             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {safetyFeatures.map(item => (
                    <div key={item.title} className="p-6 bg-secondary rounded-lg">
                        <h3 className="font-bold text-xl text-primary">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 4. Applications & Industries */}
        <section className="mt-12 md:mt-20">
             <h2 className="text-3xl font-bold font-headline text-center">Applications & Industries</h2>
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
        
        {/* 6. Compliance, Standards & Testing */}
        <section className="mt-12 md:mt-20">
          <h2 className="text-3xl font-bold font-headline text-center mb-2">Compliance, Standards & Testing</h2>
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
                    <h3 className="font-bold text-xl mb-2">Loading & Unloading</h3>
                    <p className="text-muted-foreground">Designed for efficient and safe fluid transfer, minimizing turnaround times.</p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">Maintenance & Cleaning</h3>
                    <p className="text-muted-foreground">Smooth internal surfaces and accessible fittings allow for easy cleaning and maintenance.</p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">Real-World Safety</h3>
                    <p className="text-muted-foreground">Baffles and a low center of gravity enhance stability during transit on diverse road conditions.</p>
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
                 <h2 className="text-3xl font-extrabold max-w-3xl mx-auto">Looking for a tanker solution designed around safety and reliability?</h2>
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

    