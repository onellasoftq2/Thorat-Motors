
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Check } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';
import { Badge } from '@/components/ui/badge';

// Data for the AIS list
const aisGroups = [
  {
    title: "Vehicle Safety Standards",
    items: [
      { code: "AIS-001", name: "Safety Belts & Anchorages", description: "Specifies requirements for seat belts and their anchorages to ensure occupant safety.", tags: ["Safety Critical", "Mandatory"] },
      { code: "AIS-038", name: "Braking Systems", description: "Defines performance requirements for braking systems for various vehicle categories.", tags: ["Safety Critical", "Mandatory"] },
      { code: "AIS-093", name: "Bus Body Code", description: "Standard specifying safety, structural, and performance requirements for bus body construction.", tags: ["Safety Critical"] },
      { code: "AIS-145", name: "Vehicle Tracking Systems", description: "Mandates vehicle location tracking devices and emergency buttons for specific vehicle categories.", tags: ["Mandatory"] },
    ]
  },
  {
    title: "Emission & Environmental Standards",
    items: [
      { code: "AIS-137", name: "Emission Norms (BS-VI)", description: "Sets the limits for exhaust emissions from internal combustion engines, aligned with Euro VI norms.", tags: ["Emission Related", "Mandatory"] },
      { code: "AIS-029", name: "Noise Standards", description: "Specifies the permissible noise levels for vehicles at standstill and in motion.", tags: ["Emission Related"] },
    ]
  },
  {
    title: "Body & Structural Standards",
    items: [
      { code: "AIS-052", name: "Bus Body Code (Original)", description: "Lays down standards for bus body construction, covering aspects like structural strength and safety.", tags: ["Safety Critical"] },
      { code: "AIS-063", name: "Truck Cabin Safety", description: "Specifies requirements for the safety of occupants in commercial vehicle cabins.", tags: ["Safety Critical"] },
    ]
  },
  {
    title: "Lighting, Signalling & Visibility",
    items: [
      { code: "AIS-008", name: "Installation of Lighting & Signalling Devices", description: "Governs the installation, performance, and color of lights and signaling devices on vehicles.", tags: ["Mandatory"] },
      { code: "AIS-010", name: "Mirrors", description: "Defines the requirements for rear-view mirrors and their installation to ensure adequate driver visibility.", tags: ["Mandatory"] },
    ]
  },
  {
    title: "Braking, Steering & Control Systems",
    items: [
      { code: "AIS-153", name: "ABS for Trailers", description: "Mandates the fitment and performance of Anti-lock Braking Systems (ABS) for specific categories of trailers.", tags: ["Safety Critical"] },
      { code: "AIS-003", name: "Steering Effort", description: "Specifies the maximum permissible steering effort for different vehicle types.", tags: ["Safety Critical"] },
    ]
  },
  {
    title: "Electrical & Electronic Systems",
    items: [
      { code: "AIS-004", name: "Electromagnetic Compatibility (EMC)", description: "Ensures that electronic components in a vehicle do not interfere with each other's functioning.", tags: ["Application Specific"] },
      { code: "AIS-125", name: "Electric Power Train Vehicles", description: "Covers safety requirements for electric power train vehicles, including battery safety and electrical isolation.", tags: ["EV", "Safety Critical"] },
    ]
  },
  {
    title: "Special Purpose / Application-Specific Standards",
    items: [
      { code: "AIS-113", name: "Transport of Dangerous Goods", description: "Specifies safety and construction requirements for vehicles transporting hazardous goods, including tankers.", tags: ["Application Specific", "Mandatory"] },
      { code: "AIS-124", name: "Sleeping Berths in Cabins", description: "Sets the standards for the construction and safety of sleeping berths in commercial vehicle cabins.", tags: ["Application Specific"] },
    ]
  }
];

const impactPoints = [
    "Design Validation", "Material Selection", "Structural Safety", "Testing Readiness", "Homologation Success"
];

const approachPoints = [
    { title: "Early-Stage Compliance", description: "We integrate AIS compliance checks from the initial design phase to prevent costly rework." },
    { title: "Design-for-Certification Mindset", description: "Our engineering process is oriented towards meeting all necessary testing and certification criteria efficiently." },
    { title: "Agency Coordination", description: "We maintain strong working relationships with approval agencies to stay updated on regulatory changes and streamline submissions." },
];

export default function AisListPage() {
    const drawingImage = PlaceHolderImages.find(p => p.id === 'ais-drawing');
    const workflowImage = PlaceHolderImages.find(p => p.id === 'compliance-workflow');

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center md:px-6 lg:px-8">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">
              List of AIS (Automotive Industry Standards)
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.1}>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              A guide to the Automotive Industry Standards governing vehicle design, safety, emissions, and compliance for homologation in India.
            </p>
          </AnimatedElement>
           <AnimatedElement delay={0.2}>
            <div className="mt-6 h-1.5 w-24 mx-auto bg-accent"></div>
          </AnimatedElement>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 md:px-6 lg:px-8">
        {/* 2. What are AIS? */}
        <section className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
                <h2 className="text-3xl font-bold font-headline">The Foundation of Vehicle Compliance</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    Automotive Industry Standards (AIS) are technical standards issued by the Ministry of Road Transport and Highways (MoRTH) under the Central Motor Vehicle Rules (CMVR). These standards govern the design, construction, safety performance, and emissions of vehicles and their components. Adherence to applicable AIS is mandatory for any new vehicle model to be legally approved (homologated) and sold in India.
                </p>
            </AnimatedElement>
        </section>
        
        {/* 3. AIS Grouped List */}
        <section className="mt-16 md:mt-24 max-w-4xl mx-auto">
            <AnimatedElement className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">Key AIS Categories</h2>
                <p className="mt-2 text-muted-foreground">A structured overview of important standards across various domains.</p>
            </AnimatedElement>
            <Accordion type="multiple" className="w-full space-y-4">
                {aisGroups.map((group, index) => (
                    <AnimatedElement key={group.title} delay={index * 0.1}>
                        <AccordionItem value={group.title} className="border rounded-lg px-6 bg-secondary/30">
                            <AccordionTrigger className="text-lg font-semibold hover:no-underline">{group.title}</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4 pt-4">
                                {group.items.map(item => (
                                    <div key={item.code} className="p-4 border-l-4 border-accent bg-background rounded-r-md">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-primary">{item.code} — {item.name}</h4>
                                                <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex gap-2">
                                            {item.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </AnimatedElement>
                ))}
            </Accordion>
        </section>

        {/* 5. How AIS Impact Us */}
        <section className="mt-16 md:mt-24">
            <AnimatedElement className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">How AIS Impacts Our Design & Manufacturing</h2>
            </AnimatedElement>
             <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {impactPoints.map((point) => (
                <AnimatedElement key={point}>
                    <div className="flex items-center text-lg font-medium">
                        <Check className="h-6 w-6 text-accent mr-2" />
                        <span>{point}</span>
                    </div>
                </AnimatedElement>
              ))}
            </div>
        </section>

        {/* 6. Our Approach */}
        <section className="mt-16 md:mt-24 bg-secondary py-16 md:py-20 rounded-lg">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <AnimatedElement className="text-center mb-12">
              <h2 className="text-3xl font-bold font-headline">Our Approach to AIS Compliance</h2>
            </AnimatedElement>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {approachPoints.map((point, index) => (
                <AnimatedElement key={point.title} delay={index * 0.1}>
                  <Card className="h-full text-center shadow-md">
                    <CardContent className="pt-6">
                        <h3 className="text-xl font-bold text-primary mb-2">{point.title}</h3>
                        <p className="text-muted-foreground">{point.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Visual Trust Section */}
        <section className="mt-16 md:mt-24">
           <div className="grid md:grid-cols-2 gap-8 items-center">
                <AnimatedElement>
                    {drawingImage && <Image src={drawingImage.imageUrl} alt={drawingImage.description} width={600} height={400} className="rounded-lg shadow-lg aspect-video object-cover" data-ai-hint={drawingImage.imageHint}/>}
                </AnimatedElement>
                <AnimatedElement delay={0.2}>
                    {workflowImage && <Image src={workflowImage.imageUrl} alt={workflowImage.description} width={600} height={400} className="rounded-lg shadow-lg aspect-video object-cover" data-ai-hint={workflowImage.imageHint}/>}
                </AnimatedElement>
           </div>
        </section>

        {/* 8. Conversion Section */}
        <section className="mt-16 md:mt-24 text-center">
          <AnimatedElement>
            <h2 className="text-3xl font-bold font-headline max-w-2xl mx-auto">Need guidance on AIS compliance for your vehicle or body design?</h2>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="/contact">Talk to Our Compliance Team</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="/quote?productCategory=services&product=Designing & Homologation">Enquire Now</Link>
                </Button>
            </div>
          </AnimatedElement>
        </section>
      </div>
    </div>
  );
}

  