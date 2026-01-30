
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
import { Check, CheckCircle, Search, Truck, Layers, Settings, ShieldCheck, GitBranch, Phone, MessageSquare } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';
import { aisStandards } from '@/lib/ais-standards';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { HomologationWorkflowSection } from '@/components/ui/homologation-workflow';

const trailerCategories = [
    { name: 'Flatbed Trailers', category: 'T2/T3/T4', application: 'General cargo, containers', imageId: 'flatbed' },
    { name: 'Sidewall Trailers', category: 'T2/T3/T4', application: 'Packaged goods, loose materials', imageId: 'side-wall' },
    { name: 'Tip Trailers', category: 'T2/T3/T4', application: 'Aggregates, construction debris', imageId: 'tip-trailer-hero' },
    { name: 'Skeletal Trailers', category: 'T2/T3', application: 'ISO containers (20ft, 40ft)', imageId: 'skeletal' },
    { name: 'Semi Lowbed Trailers', category: 'T3/T4', application: 'Heavy machinery, ODC', imageId: 'semi-lowbed-hero' },
    { name: 'Modular / Hydraulic Trailers', category: 'T4/T5', application: 'Super ODC, project cargo', imageId: 'custom' },
];

const complianceScope = [
    { title: 'Structural & Chassis Design', icon: <Layers /> },
    { title: 'Axles & Suspension', icon: <Settings /> },
    { title: 'Braking Systems', icon: <ShieldCheck /> },
    { title: 'Coupling & Kingpin', icon: <GitBranch /> },
    { title: 'Lighting & Signalling', icon: <Truck /> },
    { title: 'Protective Devices (RUPD/SUPD)', icon: <ShieldCheck /> },
];

const homologationWorkflow = [
  { title: 'Trailer Type & Axle Configuration Assessment' },
  { title: 'Applicable AIS & CMVR Identification' },
  { title: 'Design, Structural & FEA Evaluation' },
  { title: 'Testing & Inspection Coordination (ICAT/ARAI)' },
  { title: 'Comprehensive Documentation & Approval Support' },
];

const testingSupport = [
    'Structural & load testing coordination',
    'Brake performance & stability evaluation (laden/unladen)',
    'Lighting, signalling & retro-reflector compliance',
    'Coupling device & kingpin validation',
    'Liaison with ARAI / ICAT / VRDE for certification',
];

const whyChooseUs = [
    'Faster approvals for complex trailer configurations (multi-axle, modular).',
    'Reduced redesign and re-testing cycles through upfront compliance engineering.',
    'Deep expertise across all major trailer categories and applications.',
    'End-to-end regulatory support from initial design to final homologation.',
];

export default function TrailerHomologationPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'trailer-compliance-hero');
  const testingLabImage = PlaceHolderImages.find((p) => p.id === 'trailer-testing');

  const [searchTerm, setSearchTerm] = useState('');

  const trailerAisStandards = useMemo(() => {
    const keywords = ['trailer', 'coupling', 'underrun', 'braking of trailers', 'semi-trailer'];
    return aisStandards.filter(std =>
        std.categories.some(cat => ['T', 'N2', 'N3'].includes(cat)) ||
        keywords.some(kw => std.title.toLowerCase().includes(kw))
    );
  }, []);
  
  const filteredStandards = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return trailerAisStandards.filter(std => 
        searchTerm === '' ||
        std.code.toLowerCase().includes(searchLower) ||
        std.title.toLowerCase().includes(searchLower)
    );
  }, [searchTerm, trailerAisStandards]);
  
  const groupedStandards = useMemo(() => {
    const groups: { [key: string]: typeof filteredStandards } = {
        'Structure, Body & Protective Devices': [],
        'Braking, Stability & Dynamics': [],
        'Lighting, Signalling & Visibility': [],
        'Coupling, Mechanical & General Safety': [],
    };
    filteredStandards.forEach(std => {
        const titleLower = std.title.toLowerCase();
        if (titleLower.includes('underrun') || titleLower.includes('lateral protection') || titleLower.includes('superstructure') || titleLower.includes('construction') || titleLower.includes('body')) {
            groups['Structure, Body & Protective Devices'].push(std);
        } else if (titleLower.includes('braking') || titleLower.includes('stability') || titleLower.includes('abs')) {
            groups['Braking, Stability & Dynamics'].push(std);
        } else if (titleLower.includes('lighting') || titleLower.includes('light-signalling') || titleLower.includes('vision') || titleLower.includes('mirror')) {
            groups['Lighting, Signalling & Visibility'].push(std);
        } else {
            groups['Coupling, Mechanical & General Safety'].push(std);
        }
    });
    return groups;
  }, [filteredStandards]);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-12 bg-primary flex items-center">
        {/* {heroImage && <Image src={heroImage.imageUrl} alt="Trailer blueprint" fill className="object-cover opacity-10" />} */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center z-10">
          <AnimatedElement>
            <h1 className="text-3xl text-white font-extrabold tracking-tight font-headline">
              Trailers – Design, Testing & Regulatory Homologation
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.15}>
            <p className="mt-3 max-w-3xl mx-auto text-sm text-white text-muted-foreground">
              Comprehensive compliance support for all trailer and semi-trailer categories as per Indian automotive regulations.
            </p>
          </AnimatedElement>
          {/* <AnimatedElement delay={0.3} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild><Link href="/contact">Consult Trailer Compliance</Link></Button>
            <Button size="lg" variant="outline" asChild><Link href="#ais-section">View Applicable AIS</Link></Button>
          </AnimatedElement> */}
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 md:px-6 lg:px-8">
        {/* 2. Trailer Categories Covered */}
        <section>
          <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Trailer Categories Covered</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
          </AnimatedElement>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trailerCategories.map((category, index) => {
              const image = PlaceHolderImages.find(p => p.id === category.imageId);
              return (
                <AnimatedElement key={category.name} delay={index * 0.1}>
                  <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
                    {image && <Image src={image.imageUrl} alt={category.name} width={500} height={300} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" data-ai-hint={image.imageId} />}
                    <CardContent className="p-6 flex-grow flex flex-col">
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

        {/* 3. Trailer System & Compliance Scope */}
        <section className="mt-16 md:mt-24">
           <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Trailer System & Compliance Scope</h2>
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

        {/* 4. AIS Required for Trailers */}
        <section id="ais-section" className="mt-16 md:mt-24">
           <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">AIS Applicable for Trailers & Semi-Trailers</h2>
            <div className="mt-3 mb-4 w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
                A consolidated reference of Automotive Industry Standards applicable to trailers and semi-trailers as notified by MoRTH.
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
                
                <Accordion type="multiple" defaultValue={['Structure, Body & Protective Devices']} className="w-full">
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
                    Source: Ministry of Road Transport & Highways (MoRTH), Government of India. AIS applicability may vary based on trailer type, axle configuration, and use case.
                </p>
            </CardContent>
          </Card>
        </section>

        {/* 5. Trailer Homologation Workflow */}
        <HomologationWorkflowSection productType="trailer" workflowSteps={homologationWorkflow} />

        {/* 6. Testing & Certification Support */}
        <section className="mx-auto md:max-w-[1024px] mt-16 md:mt-24 bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                 <AnimatedElement>
                    {testingLabImage && <Image src={testingLabImage.imageUrl} alt="Industrial testing facility" width={600} height={400} className="rounded-lg shadow-xl" data-ai-hint={testingLabImage.imageHint} />}
                 </AnimatedElement>
                 <AnimatedElement delay={0.15}>
                    <h2 className="text-3xl font-bold font-headline mb-6">Testing & Certification Support</h2>
                    <ul className="space-y-3">
                        {testingSupport.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span className='text-sm'>{item}</span>
                            </li>
                        ))}
                    </ul>
                 </AnimatedElement>
            </div>
        </section>

        {/* 7. Why Choose Us */}
        <section className="mt-16 md:mt-24">
            <AnimatedElement className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">Why Choose Us For Trailer Compliance</h2>
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
                    <h2 className="text-3xl font-extrabold max-w-2xl mx-auto">Ensure your trailers meet all regulatory requirements, faster.</h2>
                </AnimatedElement>
                <AnimatedElement delay={0.15}>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                           <a href="tel:9011943810" className="flex items-center">
                                <Phone className="mr-2 h-5 w-5" />
                                Talk to our Experts
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            <a href="https://wa.me/919096757924" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <MessageSquare className="mr-2 h-5 w-5" />
                                Chat with Us
                            </a>
                        </Button>
                    </div>
                </AnimatedElement>
            </div>
        </section>
      </div>
    </div>
  );
}
