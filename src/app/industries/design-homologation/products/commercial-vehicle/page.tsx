
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Check, CheckCircle, Search, Truck, Layers, Settings, ShieldCheck, UserCheck, Shield, TrafficCone } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';
import { aisStandards } from '@/lib/ais-standards';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { HomologationWorkflowSection } from '@/components/ui/homologation-workflow';

const cvCategories = [
    { name: 'Light Commercial Vehicles (LCV)', category: 'N1', application: 'Urban delivery, small businesses.', imageId: 'cv-lcv' },
    { name: 'Medium Commercial Vehicles (MCV)', category: 'N2', application: 'Regional distribution, logistics.', imageId: 'cv-mcv' },
    { name: 'Heavy Commercial Vehicles (HCV)', category: 'N3', application: 'Long-haul freight, heavy cargo.', imageId: 'cv-hcv' },
    { name: 'Goods Carriers', category: 'N1-N3', application: 'General freight and cargo transport.', imageId: 'cv-goods-carrier' },
    { name: 'Passenger Commercial', category: 'M2-M3', application: 'Buses, vans, staff transport.', imageId: 'cv-passenger' },
    { name: 'Special Purpose Vehicles', category: 'N/M', application: 'Tankers, bulkers, custom builds.', imageId: 'cv-spv' },
];

const complianceScope = [
    { title: 'Chassis & Frame Integrity', icon: <Layers /> },
    { title: 'Braking Systems & Stability', icon: <ShieldCheck /> },
    { title: 'Powertrain & Emissions', icon: <Settings /> },
    { title: 'Body Mounting & Load Balance', icon: <Truck /> },
    { title: 'Lighting & Signalling', icon: <TrafficCone /> },
    { title: 'Driver Ergonomics & Visibility', icon: <UserCheck /> },
];

const homologationWorkflow = [
  { title: 'Vehicle Category & Application Assessment' },
  { title: 'Applicable AIS & CMVR Identification' },
  { title: 'Design & System-Level Evaluation (FEA)' },
  { title: 'Testing & Inspection Coordination (ARAI/ICAT)' },
  { title: 'Comprehensive Documentation & Approval Support' },
];

const testingSupport = [
    'Brake performance and stability compliance testing',
    'Emission and powertrain testing coordination',
    'Structural integrity and load testing support',
    'Lighting, signalling, and safety system validation',
    'Liaison with ARAI / ICAT for final certification',
];

const whyChooseUs = [
    'Deep expertise across LCV, MCV, and HCV categories.',
    'Proven track record of faster approvals and reduced rework.',
    'Support for complex body configurations and special purpose vehicles.',
    'End-to-end regulatory engagement and documentation management.',
];

export default function CommercialVehicleHomologationPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'cv-hero');
  const testingLabImage = PlaceHolderImages.find((p) => p.id === 'cv-testing');

  const [searchTerm, setSearchTerm] = useState('');

  const cvAisStandards = useMemo(() => {
    const keywords = ['commercial', 'goods', 'passenger', 'truck', 'm2', 'm3', 'n1', 'n2', 'n3'];
    return aisStandards.filter(std =>
        std.categories.some(cat => ['M', 'N', 'M1', 'M2', 'M3', 'N1', 'N2', 'N3'].includes(cat)) ||
        keywords.some(kw => std.title.toLowerCase().includes(kw))
    );
  }, []);
  
  const filteredStandards = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return cvAisStandards.filter(std => 
        searchTerm === '' ||
        std.code.toLowerCase().includes(searchLower) ||
        std.title.toLowerCase().includes(searchLower)
    );
  }, [searchTerm, cvAisStandards]);
  
  const groupedStandards = useMemo(() => {
    const groups: { [key: string]: typeof filteredStandards } = {
        'Structural & Chassis Requirements': [],
        'Braking & Stability': [],
        'Safety & Protection Systems': [],
        'Lighting, Signalling & Visibility': [],
        'Emissions & Powertrain': [],
    };
    filteredStandards.forEach(std => {
        const titleLower = std.title.toLowerCase();
        if (titleLower.includes('construction') || titleLower.includes('body') || titleLower.includes('chassis') || titleLower.includes('underrun') || titleLower.includes('superstructure')) {
            groups['Structural & Chassis Requirements'].push(std);
        } else if (titleLower.includes('braking') || titleLower.includes('stability') || titleLower.includes('abs') || titleLower.includes('esc')) {
            groups['Braking & Stability'].push(std);
        } else if (titleLower.includes('safety') || titleLower.includes('protection') || titleLower.includes('occupant') || titleLower.includes('door') || titleLower.includes('seat')) {
            groups['Safety & Protection Systems'].push(std);
        } else if (titleLower.includes('lighting') || titleLower.includes('light-signalling') || titleLower.includes('vision') || titleLower.includes('mirror')) {
            groups['Lighting, Signalling & Visibility'].push(std);
        } else if (titleLower.includes('emission') || titleLower.includes('power train') || titleLower.includes('fuel consumption')) {
            groups['Emissions & Powertrain'].push(std);
        } else {
            groups['Structural & Chassis Requirements'].push(std);
        }
    });
    return groups;
  }, [filteredStandards]);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-12 bg-primary flex items-center">
        {/* {heroImage && <Image src={heroImage.imageUrl} alt="Commercial vehicles on highway" fill className="object-cover opacity-10" data-ai-hint={heroImage.imageHint}/>} */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center z-10">
          <AnimatedElement>
            <h1 className="text-3xl font-extrabold tracking-tight text-white font-headline">
              Commercial Vehicles – Design, Safety Compliance & Homologation
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <p className="mt-3 max-w-3xl mx-auto text-sm text-white text-muted-foreground">
              End-to-end regulatory and homologation support for light, medium, and heavy commercial vehicles as per Indian automotive standards.
            </p>
          </AnimatedElement>
          {/* <AnimatedElement delay={0.3} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild><Link href="/contact">Consult CV Compliance</Link></Button>
            <Button size="lg" variant="outline" asChild><Link href="#ais-section">View Applicable AIS</Link></Button>
          </AnimatedElement> */}
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 md:px-6 lg:px-8">
        {/* 2. CV Categories Covered */}
        <section>
          <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Commercial Vehicle Categories Covered</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cvCategories.map((category, index) => {
              const image = PlaceHolderImages.find(p => p.id === category.imageId);
              return (
                <AnimatedElement key={category.name} delay={index * 0.1}>
                  <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
                    {image && <Image src={image.imageUrl} alt={category.name} width={400} height={250} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" data-ai-hint={image.imageId} />}
                    <CardContent className="p-3 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-muted-foreground text-sm mt-0 flex-grow">{category.application}</p>
                      {/* <Badge variant="secondary" className="mt-4 w-fit">{category.category}</Badge> */}
                    </CardContent>
                  </Card>
                </AnimatedElement>
              )
            })}
          </div>
        </section>

        {/* 3. CV Architecture & Compliance Scope */}
        <section className="mt-16 md:mt-24">
           <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">CV Architecture & Compliance Scope</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center max-w-6xl mx-auto">
              {complianceScope.map((item, index) => (
                  <AnimatedElement key={item.title} delay={index * 0.1}>
                      <div className="bg-primary/5 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                        {React.cloneElement(item.icon, {className: "w-10 h-10 text-accent"})}
                      </div>
                      <p className="mt-4 font-semibold text-sm">{item.title}</p>
                  </AnimatedElement>
              ))}
          </div>
        </section>

        {/* 4. AIS Required for Commercial Vehicles */}
        <section id="ais-section" className="mt-16 md:mt-24">
           <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">AIS Applicable for Commercial Vehicles</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
                A consolidated reference of Automotive Industry Standards applicable to commercial vehicles as notified by the Ministry of Road Transport & Highways.
            </p>
          </AnimatedElement>
          <Card className="max-w-5xl mx-auto shadow-lg">
            <CardContent className="p-6">
                 <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                        placeholder="Search by AIS code or title..." 
                        value={searchTerm} 
                        onChange={e => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                
                <Accordion type="multiple" defaultValue={['Structural & Chassis Requirements']} className="w-full">
                    {Object.entries(groupedStandards).map(([groupTitle, standards]) => (
                        standards.length > 0 &&
                        <AccordionItem value={groupTitle} key={groupTitle}>
                            <AccordionTrigger className="text-lg font-semibold">{groupTitle}</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4 pt-4">
                                {standards.map(item => (
                                    <div key={item.code} className="p-4 border-l-4 border-accent bg-secondary/50 rounded-r-md">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-primary">{item.code} {item.revision && <span className="text-xs text-muted-foreground">({item.revision})</span>} — {item.title}</h4>
                                            </div>
                                            <Badge variant={item.status === 'Final' ? 'default' : 'destructive'} className={cn(item.status === 'Final' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800', 'ml-4 shrink-0')}>
                                                {item.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <p className="text-xs text-muted-foreground mt-6 text-center">
                    Source: Ministry of Road Transport & Highways (MoRTH), Government of India. AIS applicability may vary based on vehicle category, GVW, and usage.
                </p>
            </CardContent>
          </Card>
        </section>

        {/* 5. CV Homologation Workflow */}
        <HomologationWorkflowSection productType="commercial-vehicle" workflowSteps={homologationWorkflow} />

        {/* 6. Testing & Certification Support */}
        <section className="mt-16 md:mt-24 bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                 <AnimatedElement>
                    {testingLabImage && <Image src={testingLabImage.imageUrl} alt="Commercial vehicle testing" width={600} height={400} className="rounded-lg shadow-xl" data-ai-hint={testingLabImage.imageHint} />}
                 </AnimatedElement>
                 <AnimatedElement delay={0.15}>
                    <h2 className="text-3xl font-bold font-headline mb-6">Testing & Certification Support</h2>
                    <ul className="space-y-4">
                        {testingSupport.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                 </AnimatedElement>
            </div>
        </section>

        {/* 7. Why Choose Us */}
        <section className="mt-16 md:mt-24">
            <AnimatedElement className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">Why Choose Us For Commercial Vehicle Compliance</h2>
                <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            </AnimatedElement>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {whyChooseUs.map((item, index) => (
                    <AnimatedElement key={item} delay={index * 0.1}>
                        <Card className="h-full">
                            <CardContent className="p-6">
                                 <p className="font-semibold">{item}</p>
                            </CardContent>
                        </Card>
                    </AnimatedElement>
                ))}
            </div>
        </section>

        {/* 8. Call to Action */}
        <section className="mt-16 md:mt-24 text-center bg-primary text-primary-foreground py-16 rounded-lg">
            <div className="container mx-auto px-4">
                <AnimatedElement>
                    <h2 className="text-3xl font-extrabold max-w-2xl mx-auto">Ensure your commercial vehicles meet all safety and regulatory standards.</h2>
                </AnimatedElement>
                <AnimatedElement delay={0.15}>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact">Talk to Our Experts</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                             <Link href="/quote?product=Commercial Vehicle Homologation">Request AIS Review</Link>
                        </Button>
                    </div>
                </AnimatedElement>
            </div>
        </section>
      </div>
    </div>
  );
}
