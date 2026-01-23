
'use client';

import React, { useState } from 'react';
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
import { Check, ArrowLeft, Car, Truck, Bus, Fuel, Wrench, ShieldQuestion } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';
import { Badge } from '@/components/ui/badge';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';


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

const AisApplicabilityTool = () => {
  const [step, setStep] = useState(0);
  const [vehicleCategory, setVehicleCategory] = useState<string | null>(null);

  const vehicleCategories = [
    { id: 'ev', name: 'EV (2/3-Wheelers)', icon: <Car /> },
    { id: 'commercial', name: 'Commercial Vehicle', icon: <Truck /> },
    { id: 'trailer', name: 'Trailer', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck"><path d="M5 18H3c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-1" /><path d="M14 18h1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-1" /><path d="M18 18h3c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-2l-3 4-3-4H3" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg> },
    { id: 'bus', name: 'Bus', icon: <Bus /> },
    { id: 'tanker', name: 'Tanker', icon: <Fuel /> },
    { id: 'body_build', name: 'Special Purpose / Body Build', icon: <Wrench /> },
  ];

  const aisMapping: { [key: string]: { [key: string]: { code: string; name: string; description: string; tags: string[] }[] } } = {
    ev: {
      "Safety Standards": [{ code: "AIS-038", name: "Braking Systems", description: "Performance for braking systems.", tags: ["Safety Critical", "Mandatory"] }],
      "Electrical & Electronic Systems": [{ code: "AIS-125", name: "Electric Power Train Vehicles", description: "Safety for electric power trains.", tags: ["EV", "Safety Critical"] }, { code: "AIS-004", name: "Electromagnetic Compatibility (EMC)", description: "Ensures no electronic interference.", tags: ["Application Specific"] }],
    },
    commercial: {
      "Safety Standards": [{ code: "AIS-001", name: "Safety Belts", description: "Seatbelt requirements.", tags: ["Safety Critical", "Mandatory"] }, { code: "AIS-038", name: "Braking Systems", description: "Performance for braking systems.", tags: ["Safety Critical", "Mandatory"] }],
      "Emission & Environmental Standards": [{ code: "AIS-137", name: "Emission Norms (BS-VI)", description: "Exhaust emission limits.", tags: ["Emission Related", "Mandatory"] }],
      "Body & Structural Standards": [{ code: "AIS-063", name: "Truck Cabin Safety", description: "Cabin safety requirements.", tags: ["Safety Critical"] }],
    },
    trailer: {
      "Braking, Steering & Control Systems": [{ code: "AIS-153", name: "ABS for Trailers", description: "Mandates ABS for certain trailers.", tags: ["Safety Critical"] }],
      "Lighting, Signalling & Visibility": [{ code: "AIS-008", name: "Installation of Lighting", description: "Governs light installation and performance.", tags: ["Mandatory"] }],
    },
    bus: {
      "Safety Standards": [{ code: "AIS-093", name: "Bus Body Code", description: "Requirements for bus body construction.", tags: ["Safety Critical"] }],
      "Emission & Environmental Standards": [{ code: "AIS-137", name: "Emission Norms (BS-VI)", description: "Exhaust emission limits.", tags: ["Emission Related", "Mandatory"] }],
      "Body & Structural Standards": [{ code: "AIS-052", name: "Bus Body Code (Original)", description: "Standards for bus body construction.", tags: ["Safety Critical"] }],
    },
    tanker: {
      "Special Purpose / Application-Specific Standards": [{ code: "AIS-113", name: "Transport of Dangerous Goods", description: "Requirements for vehicles transporting hazardous goods.", tags: ["Application Specific", "Mandatory"] }],
      "Braking, Steering & Control Systems": [{ code: "AIS-153", name: "ABS for Trailers", description: "Mandates ABS for tankers on trailer chassis.", tags: ["Safety Critical"] }],
    },
    body_build: {
      "Special Purpose / Application-Specific Standards": [{ code: "AIS-124", name: "Sleeping Berths in Cabins", description: "Standards for sleeping berths.", tags: ["Application Specific"] }, { code: "AIS-113", name: "Transport of Dangerous Goods", description: "Safety for vehicles carrying hazardous goods.", tags: ["Application Specific"] }],
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    setVehicleCategory(categoryId);
    setStep(1);
  };

  const handleBack = () => {
    setVehicleCategory(null);
    setStep(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section className="mt-16 md:mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline">Which AIS apply to my vehicle?</h2>
        <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Identify applicable Automotive Industry Standards based on your vehicle category and configuration.</p>
        <div className="mt-3 w-20 h-1.5 bg-accent mx-auto"></div>
      </div>

      <Card className="shadow-lg">
        <CardContent className="p-6 md:p-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step-0"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -50 }}
                variants={containerVariants}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vehicleCategories.map(cat => (
                    <motion.div key={cat.id} variants={itemVariants}>
                      <button
                        onClick={() => handleSelectCategory(cat.id)}
                        className="w-full h-full text-left p-6 border rounded-lg hover:bg-secondary hover:border-accent transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 text-accent p-3 rounded-full transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                            {cat.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-foreground">{cat.name}</h3>
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && vehicleCategory && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-6">
                  <Button variant="ghost" onClick={handleBack} className="mr-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <h3 className="text-xl font-bold">Applicable AIS for <span className="text-accent">{vehicleCategories.find(c => c.id === vehicleCategory)?.name}</span></h3>
                </div>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {Object.entries(aisMapping[vehicleCategory] || {}).map(([groupTitle, items]) => (
                    <motion.div key={groupTitle} variants={itemVariants}>
                      <h4 className="text-lg font-semibold mb-4 border-b pb-2">{groupTitle}</h4>
                      <div className="space-y-4">
                        {items.map(item => (
                          <div key={item.code} className="p-4 border-l-4 border-accent bg-secondary/50 rounded-r-md">
                            <h5 className="font-bold text-primary">{item.code} — {item.name}</h5>
                            <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                            <div className="mt-3 flex gap-2">
                              {item.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                 
                 <div className="mt-8">
                     <p className="text-xs text-muted-foreground text-center">AIS applicability may vary based on detailed vehicle specifications and regulatory updates.</p>
                    <div className="mt-8 text-center">
                        <h4 className="text-lg font-bold font-headline max-w-2xl mx-auto">Need confirmation or support with AIS compliance?</h4>
                         <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="sm" asChild>
                                <Link href="/contact">Talk to Our Compliance Team</Link>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                                <Link href="/quote?productCategory=services&product=Designing & Homologation">Request Homologation Support</Link>
                            </Button>
                        </div>
                    </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </section>
  );
};


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
        
        {/* NEW INTERACTIVE SECTION */}
        <AisApplicabilityTool />

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
